import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/config';
import { adminDb } from '@/lib/firebase/admin';
import Stripe from 'stripe';

export const runtime = 'nodejs';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  // Check if Firebase Admin is properly configured
  if (!adminDb) {
    console.error('Firebase Admin SDK not configured. Webhook processing skipped.');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  const body = await req.text();
  const signature = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;
        
        // Get user by customer ID
        const usersSnapshot = await adminDb
          .collection('users')
          .where('stripeCustomerId', '==', customerId)
          .get();
        
        if (!usersSnapshot.empty) {
          const userDoc = usersSnapshot.docs[0];
          const userId = userDoc.id;
          
          // Update user subscription status
          await adminDb.collection('users').doc(userId).update({
            subscriptionStatus: subscription.status,
            subscriptionId: subscription.id,
            currentPeriodEnd: new Date(subscription.current_period_end * 1000),
            planId: subscription.items.data[0].price.id,
          });
          
          // Log activity
          await adminDb.collection('activity_logs').add({
            userId,
            action: event.type,
            timestamp: new Date(),
            metadata: {
              subscriptionId: subscription.id,
              status: subscription.status,
            },
          });
        }
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;
        
        const usersSnapshot = await adminDb
          .collection('users')
          .where('stripeCustomerId', '==', customerId)
          .get();
        
        if (!usersSnapshot.empty) {
          const userDoc = usersSnapshot.docs[0];
          const userId = userDoc.id;
          
          await adminDb.collection('users').doc(userId).update({
            subscriptionStatus: 'canceled',
            subscriptionId: null,
            currentPeriodEnd: null,
            planId: null,
          });
          
          await adminDb.collection('activity_logs').add({
            userId,
            action: 'subscription.canceled',
            timestamp: new Date(),
            metadata: {
              subscriptionId: subscription.id,
            },
          });
        }
        break;
      }

      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;
        
        const usersSnapshot = await adminDb
          .collection('users')
          .where('stripeCustomerId', '==', customerId)
          .get();
        
        if (!usersSnapshot.empty) {
          const userDoc = usersSnapshot.docs[0];
          const userId = userDoc.id;
          
          // Store invoice record
          await adminDb.collection('invoices').add({
            userId,
            invoiceId: invoice.id,
            amount: invoice.amount_paid,
            currency: invoice.currency,
            status: 'paid',
            paidAt: new Date(invoice.status_transitions.paid_at! * 1000),
            periodStart: new Date(invoice.period_start * 1000),
            periodEnd: new Date(invoice.period_end * 1000),
          });
        }
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;
        
        const usersSnapshot = await adminDb
          .collection('users')
          .where('stripeCustomerId', '==', customerId)
          .get();
        
        if (!usersSnapshot.empty) {
          const userDoc = usersSnapshot.docs[0];
          const userId = userDoc.id;
          
          await adminDb.collection('activity_logs').add({
            userId,
            action: 'payment.failed',
            timestamp: new Date(),
            metadata: {
              invoiceId: invoice.id,
              amount: invoice.amount_due,
            },
          });
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}