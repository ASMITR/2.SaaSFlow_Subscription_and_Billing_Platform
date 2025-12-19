'use server';

import { stripe, STRIPE_PLANS } from '@/lib/stripe/config';
import { adminDb } from '@/lib/firebase/admin';
import { redirect } from 'next/navigation';

export async function createCheckoutSession(
  planName: 'starter' | 'pro',
  isYearly: boolean = false,
  userId: string
) {
  try {
    const plan = STRIPE_PLANS[planName];
    
    // Create or get customer
    const userDoc = await adminDb.collection('users').doc(userId).get();
    let customerId = userDoc.data()?.stripeCustomerId;
    
    if (!customerId) {
      const customer = await stripe.customers.create({
        metadata: { userId },
      });
      customerId = customer.id;
      
      // Update user with Stripe customer ID
      await adminDb.collection('users').doc(userId).update({
        stripeCustomerId: customerId,
      });
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      line_items: [
        {
          price: plan.priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
      metadata: {
        userId,
        planName,
        isYearly: isYearly.toString(),
      },
    });

    if (session.url) {
      redirect(session.url);
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw new Error('Failed to create checkout session');
  }
}

export async function createCustomerPortalSession(userId: string) {
  try {
    const userDoc = await adminDb.collection('users').doc(userId).get();
    const customerId = userDoc.data()?.stripeCustomerId;
    
    if (!customerId) {
      throw new Error('No Stripe customer found');
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
    });

    if (session.url) {
      redirect(session.url);
    }
  } catch (error) {
    console.error('Error creating portal session:', error);
    throw new Error('Failed to create portal session');
  }
}

export async function cancelSubscription(subscriptionId: string) {
  try {
    await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error canceling subscription:', error);
    return { success: false, error: 'Failed to cancel subscription' };
  }
}