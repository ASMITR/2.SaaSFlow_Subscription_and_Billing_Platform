'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import GlowButton from './GlowButton';
import { cn } from '@/lib/utils/cn';

interface PricingCardProps {
  plan: {
    name: string;
    price: number;
    features: string[];
    popular?: boolean;
  };
  isYearly?: boolean;
  onSelect: () => void;
  className?: string;
}

export default function PricingCard({ plan, isYearly = false, onSelect, className = '' }: PricingCardProps) {
  const yearlyDiscount = 0.8; // 20% discount
  const displayPrice = isYearly ? Math.round(plan.price * yearlyDiscount) : plan.price;

  return (
    <motion.div
      className={cn(
        "relative p-8 rounded-3xl border transition-all duration-500",
        plan.popular 
          ? "bg-aurora-gradient/10 border-aurora-glow/50 shadow-aurora" 
          : "glass-panel border-glass-border",
        className
      )}
      whileHover={{ 
        scale: 1.02,
        boxShadow: plan.popular 
          ? "0 0 60px rgba(16, 185, 129, 0.6)" 
          : "0 0 40px rgba(34, 211, 238, 0.3)"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-aurora-gradient px-6 py-2 rounded-full text-quantum-black font-semibold text-sm">
            Most Popular
          </div>
        </motion.div>
      )}

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-aurora-cyan/5 to-aurora-mint/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Plan Name */}
        <h3 className="text-2xl font-cinematic mb-2">{plan.name}</h3>
        
        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline">
            <span className="text-5xl font-bold aurora-text">₹{displayPrice.toLocaleString('en-IN')}</span>
            <span className="text-gray-400 ml-2">/{isYearly ? 'year' : 'month'}</span>
          </div>

        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Check className="w-5 h-5 text-aurora-mint mr-3 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <GlowButton
          variant={plan.popular ? 'primary' : 'secondary'}
          className="w-full"
          onClick={onSelect}
        >
          Get Started
        </GlowButton>
      </div>
    </motion.div>
  );
}