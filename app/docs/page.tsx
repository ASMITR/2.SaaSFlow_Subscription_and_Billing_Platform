'use client';

import { motion } from 'framer-motion';
import { Book, Code, Rocket, Shield } from 'lucide-react';
import AuroraBackground from '@/components/ui/AuroraBackground';
import GlowButton from '@/components/ui/GlowButton';

const sections = [
  { icon: Rocket, title: 'Quick Start', desc: 'Get up and running in minutes' },
  { icon: Code, title: 'API Reference', desc: 'Complete API documentation' },
  { icon: Shield, title: 'Security', desc: 'Best practices and compliance' },
  { icon: Book, title: 'Guides', desc: 'Step-by-step tutorials' }
];

export default function DocsPage() {
  return (
    <AuroraBackground className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl lg:text-4xl font-cinematic mb-4">
            <span className="aurora-text">Documentation</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Everything you need to integrate and customize SaaSFlow for your business.
          </p>
          <GlowButton>Get Started</GlowButton>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="glass-panel p-4 text-center hover:shadow-neon transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <section.icon className="w-8 h-8 text-aurora-glow mx-auto mb-3" />
              <h3 className="text-base font-cinematic mb-2">{section.title}</h3>
              <p className="text-gray-400 text-xs">{section.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass-panel p-6 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl font-cinematic mb-4">Popular Topics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Authentication Setup',
              'Stripe Integration',
              'Webhook Configuration',
              'Custom Pricing Models',
              'User Management',
              'Analytics & Reporting'
            ].map((topic, index) => (
              <motion.div
                key={topic}
                className="flex items-center p-4 glass-panel rounded-xl hover:border-aurora-glow/50 transition-all cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-2 h-2 bg-aurora-mint rounded-full mr-3"></div>
                <span className="text-gray-300">{topic}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}