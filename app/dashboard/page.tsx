'use client';

import { motion } from 'framer-motion';
import { BarChart3, Users, DollarSign, TrendingUp, Settings, CreditCard } from 'lucide-react';
import AuroraBackground from '@/components/ui/AuroraBackground';
import GlowButton from '@/components/ui/GlowButton';

const stats = [
  { name: 'Total Revenue', value: '$12,426', change: '+12.5%', icon: DollarSign },
  { name: 'Active Subscribers', value: '2,143', change: '+8.2%', icon: Users },
  { name: 'Conversion Rate', value: '3.24%', change: '+2.1%', icon: TrendingUp },
  { name: 'Churn Rate', value: '2.1%', change: '-0.5%', icon: BarChart3 },
];

export default function DashboardPage() {
  return (
    <AuroraBackground className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-cinematic mb-2">
            Welcome back, <span className="aurora-text">Alex</span>
          </h1>
          <p className="text-gray-300">Here's what's happening with your business today.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              className="glass-panel p-4 hover:shadow-neon transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-xs">{stat.name}</p>
                  <p className="text-xl font-bold aurora-text">{stat.value}</p>
                  <p className="text-aurora-mint text-xs">{stat.change}</p>
                </div>
                <div className="w-10 h-10 bg-aurora-gradient/20 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-aurora-glow" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chart Area */}
          <motion.div
            className="lg:col-span-2 glass-panel p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-cinematic mb-6">Revenue Overview</h3>
            <div className="h-64 bg-gradient-to-br from-aurora-cyan/10 to-aurora-mint/10 rounded-xl flex items-end justify-around p-4">
              {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                <motion.div
                  key={i}
                  className="bg-aurora-gradient rounded-sm"
                  style={{ width: '20px', height: `${height}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="glass-panel p-6">
              <h3 className="text-xl font-cinematic mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <GlowButton variant="secondary" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Account Settings
                </GlowButton>
                <GlowButton variant="secondary" className="w-full justify-start">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Billing & Plans
                </GlowButton>
                <GlowButton variant="secondary" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Users
                </GlowButton>
              </div>
            </div>

            <div className="glass-panel p-6">
              <h3 className="text-xl font-cinematic mb-4">Current Plan</h3>
              <div className="text-center">
                <div className="text-2xl font-bold aurora-text mb-2">Pro Plan</div>
                <div className="text-gray-400 text-sm mb-4">$99/month</div>
                <GlowButton size="sm" className="w-full">
                  Upgrade Plan
                </GlowButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  );
}