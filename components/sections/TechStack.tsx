'use client';

import { motion } from 'framer-motion';
import { Code, Database, Shield, Zap } from 'lucide-react';

const techItems = [
  { name: 'Next.js 14', category: 'Frontend', icon: Code },
  { name: 'Firebase', category: 'Backend', icon: Database },
  { name: 'Stripe', category: 'Payments', icon: Shield },
  { name: 'Vercel', category: 'Deploy', icon: Zap }
];

export default function TechStack() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-6">Built with enterprise-grade technology</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {techItems.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex items-center space-x-2 glass-panel px-4 py-2 rounded-xl border border-aurora-glow/20 hover:border-aurora-glow/40 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <tech.icon className="w-4 h-4 text-aurora-glow" />
                <span className="text-sm font-medium text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}