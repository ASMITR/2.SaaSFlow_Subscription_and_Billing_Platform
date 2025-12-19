'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, BarChart3, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption with SOC 2 compliance and advanced threat protection for your peace of mind.',
    mockup: (
      <div className="w-full h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
        <Shield className="w-12 h-12 text-green-400" />
      </div>
    )
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'Sub-100ms response times with global CDN and edge computing for blazing fast user experiences.',
    mockup: (
      <div className="w-full h-32 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
        <div className="flex space-x-1">
          {[80, 60, 90, 70, 95].map((height, i) => (
            <motion.div
              key={i}
              className="w-3 bg-gradient-to-t from-yellow-500 to-orange-400 rounded-sm"
              style={{ height: `${height}%` }}
              animate={{ height: [`${height * 0.5}%`, `${height}%`] }}
              transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: 'reverse' }}
            />
          ))}
        </div>
      </div>
    )
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Real-time insights with predictive analytics and custom dashboards to drive growth.',
    mockup: (
      <div className="w-full h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4">
        <div className="grid grid-cols-3 gap-2 h-full">
          <div className="bg-blue-400/30 rounded flex items-end justify-center">
            <div className="w-2 h-8 bg-blue-400 rounded-sm"></div>
          </div>
          <div className="bg-cyan-400/30 rounded flex items-end justify-center">
            <div className="w-2 h-12 bg-cyan-400 rounded-sm"></div>
          </div>
          <div className="bg-teal-400/30 rounded flex items-end justify-center">
            <div className="w-2 h-6 bg-teal-400 rounded-sm"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Role-based access control with seamless team management and real-time collaboration tools.',
    mockup: (
      <div className="w-full h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-quantum-black`}></div>
          ))}
        </div>
      </div>
    )
  }
];

export default function Features() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-aurora-cyan/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-aurora-mint/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-cinematic mb-4">
            Built for <span className="aurora-text">Scale</span>
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Enterprise-grade features designed to grow with your business from startup to IPO.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`${index % 2 === 1 ? 'lg:mt-12' : 'lg:mt-0'}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-aurora-gradient/15 rounded-xl flex items-center justify-center flex-shrink-0 border border-aurora-glow/25">
                  <feature.icon className="w-6 h-6 text-aurora-glow" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-cinematic mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}