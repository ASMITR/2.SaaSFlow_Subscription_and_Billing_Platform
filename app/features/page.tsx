'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, BarChart3, Globe, Users, CreditCard } from 'lucide-react';
import AuroraBackground from '@/components/ui/AuroraBackground';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption with SOC 2 compliance and advanced threat protection.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-100ms response times with global CDN and edge computing.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Real-time insights with predictive analytics and custom dashboards.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Multi-region deployment with 99.99% uptime SLA guarantee.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Role-based access control with seamless team management.',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: CreditCard,
    title: 'Smart Billing',
    description: 'Automated invoicing with flexible pricing models and tax compliance.',
    gradient: 'from-teal-500 to-cyan-500'
  }
];

export default function FeaturesPage() {
  return (
    <AuroraBackground className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl lg:text-4xl font-cinematic mb-4">
            Powerful <span className="aurora-text">Features</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to build, scale, and manage your subscription business with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-panel p-6 hover:shadow-neon transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-cinematic mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AuroraBackground>
  );
}