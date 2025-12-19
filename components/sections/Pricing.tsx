'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../ui/PricingCard';
import { STRIPE_PLANS } from '@/lib/stripe/config';

const plans = [
  {
    name: STRIPE_PLANS.starter.name,
    price: STRIPE_PLANS.starter.price,
    features: STRIPE_PLANS.starter.features,
    popular: false,
  },
  {
    name: STRIPE_PLANS.pro.name,
    price: STRIPE_PLANS.pro.price,
    features: STRIPE_PLANS.pro.features,
    popular: true,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const handlePlanSelect = (planName: string) => {
    // This will be connected to Stripe checkout
    console.log(`Selected plan: ${planName}, yearly: ${isYearly}`);
  };

  return (
    <section className="py-18 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/5 left-1/5 w-72 h-72 bg-aurora-teal/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/5 right-1/5 w-64 h-64 bg-aurora-mint/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-cinematic mb-4">
            Choose Your{' '}
            <span className="aurora-text">Plan</span>
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto mb-6">
            Start free and scale as you grow. No hidden fees, no surprises.
            Cancel anytime with our flexible billing options.
          </p>

          {/* Billing Toggle */}
          <motion.div
            className="relative inline-flex items-center bg-quantum-black/50 backdrop-blur-md border border-aurora-glow/20 rounded-2xl p-2 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Background slider */}
            <motion.div
              className="absolute top-2 bottom-2 bg-aurora-gradient rounded-xl shadow-aurora"
              animate={{
                left: isYearly ? '50%' : '8px',
                right: isYearly ? '8px' : '50%'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            
            <button
              className={`relative z-10 px-8 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                !isYearly 
                  ? 'text-quantum-black' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            
            <button
              className={`relative z-10 px-8 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                isYearly 
                  ? 'text-quantum-black' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="flex justify-center items-end gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PricingCard
                plan={plan}
                isYearly={isYearly}
                onSelect={() => handlePlanSelect(plan.name)}
              />
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="glass-panel rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-cinematic mb-4">Need Enterprise?</h3>
            <p className="text-gray-300 mb-6">
              Custom solutions for large organizations with advanced security,
              compliance, and dedicated support.
            </p>
            <button className="glass-button">
              Contact Sales
            </button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex justify-center items-center space-x-8 mt-16 opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-sm text-gray-400">🔒 Bank-level Security</div>
          <div className="text-sm text-gray-400">⚡ 99.9% Uptime SLA</div>
          <div className="text-sm text-gray-400">🌍 Global CDN</div>
        </motion.div>
      </div>
    </section>
  );
}