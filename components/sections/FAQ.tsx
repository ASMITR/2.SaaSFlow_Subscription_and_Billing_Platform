'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly can I get started with SaaSFlow?',
    answer: 'Most customers are up and running within 24 hours. Our streamlined onboarding process and comprehensive documentation make integration seamless.'
  },
  {
    question: 'What payment methods do you support?',
    answer: 'We support all major credit cards, ACH transfers, SEPA, and 135+ international payment methods through our Stripe integration.'
  },
  {
    question: 'Is my data secure with SaaSFlow?',
    answer: 'Absolutely. We use bank-level encryption, maintain SOC 2 Type II compliance, and follow industry best practices for data security and privacy.'
  },
  {
    question: 'Can I customize the billing experience?',
    answer: 'Yes, SaaSFlow offers extensive customization options including branded invoices, custom pricing models, and white-label solutions.'
  },
  {
    question: 'Do you offer migration assistance?',
    answer: 'Yes, our expert team provides free migration assistance to help you seamlessly transition from your current billing system to SaaSFlow.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-aurora-mint/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-cinematic mb-6">
            Frequently Asked <span className="aurora-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about SaaSFlow
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-aurora-glow/30 pl-6 hover:border-aurora-glow/60 transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}