'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, Clock } from 'lucide-react';
import AuroraBackground from '@/components/ui/AuroraBackground';
import GlowButton from '@/components/ui/GlowButton';

const supportOptions = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    availability: '24/7 Available',
    action: 'Start Chat'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us a detailed message',
    availability: 'Response within 2 hours',
    action: 'Send Email'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our experts',
    availability: 'Mon-Fri 9AM-6PM EST',
    action: 'Call Now'
  }
];

export default function SupportPage() {
  return (
    <AuroraBackground className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl lg:text-4xl font-cinematic mb-4">
            Get <span className="aurora-text">Support</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our expert team is here to help you succeed. Choose your preferred way to get in touch.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              className="glass-panel p-6 text-center hover:shadow-neon transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-aurora-gradient/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <option.icon className="w-6 h-6 text-aurora-glow" />
              </div>
              <h3 className="text-lg font-cinematic mb-3">{option.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{option.description}</p>
              <div className="flex items-center justify-center text-aurora-mint text-xs mb-4">
                <Clock className="w-3 h-3 mr-1" />
                {option.availability}
              </div>
              <GlowButton variant="secondary" size="sm" className="w-full">
                {option.action}
              </GlowButton>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass-panel p-6 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-cinematic mb-4 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How do I integrate SaaSFlow with my existing system?',
                a: 'Our comprehensive API documentation and SDKs make integration straightforward. Most customers are up and running within 24 hours.'
              },
              {
                q: 'What payment methods do you support?',
                a: 'We support all major credit cards, ACH transfers, and international payment methods through our Stripe integration.'
              },
              {
                q: 'Is my data secure with SaaSFlow?',
                a: 'Yes, we use bank-level encryption, SOC 2 compliance, and follow industry best practices for data security.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="glass-panel p-6 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <h3 className="font-semibold mb-2 text-aurora-glow">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}