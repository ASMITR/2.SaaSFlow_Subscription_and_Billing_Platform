import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export const STRIPE_PLANS = {
  starter: {
    priceId: process.env.STRIPE_STARTER_PRICE_ID!,
    name: 'Starter',
    price: 2499, // ₹2,499 (~$29)
    features: [
      'Up to 1,000 subscribers',
      'Basic analytics',
      'Email support',
      'Standard integrations'
    ]
  },
  pro: {
    priceId: process.env.STRIPE_PRO_PRICE_ID!,
    name: 'Pro',
    price: 8299, // ₹8,299 (~$99)
    features: [
      'Unlimited subscribers',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'API access',
      'White-label options'
    ]
  }
};

export const getStripeCustomerPortalUrl = async (customerId: string) => {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
  });
  return session.url;
};