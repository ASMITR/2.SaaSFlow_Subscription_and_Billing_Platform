'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Shield, Zap, Users } from 'lucide-react';
import GlowButton from '../ui/GlowButton';
import AuroraBackground from '../ui/AuroraBackground';

export default function Hero() {
  return (
    <AuroraBackground className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Trust Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass-panel border border-aurora-glow/40 mb-6 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Shield className="w-4 h-4 text-aurora-mint mr-2" />
            <span className="text-aurora-mint text-sm font-semibold">Enterprise-Grade Security</span>
            <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse"></div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-cinematic mb-6 leading-tight max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Scale Your Business with{' '}
            <span className="aurora-text relative">
              Smart Billing
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-aurora-gradient rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          {/* Value Proposition */}
          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Automate subscriptions, optimize revenue, and scale globally with our 
            <span className="text-aurora-glow font-semibold"> AI-powered platform</span>. 
            Trusted by 10,000+ businesses worldwide.
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            className="flex justify-center items-center gap-6 mb-8 text-sm text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center glass-panel px-4 py-2 rounded-full border border-aurora-glow/20">
              <Zap className="w-4 h-4 text-aurora-glow mr-2" />
              <span>Setup in 5 minutes</span>
            </div>
            <div className="flex items-center glass-panel px-4 py-2 rounded-full border border-aurora-mint/20">
              <Shield className="w-4 h-4 text-aurora-mint mr-2" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center glass-panel px-4 py-2 rounded-full border border-aurora-cyan/20">
              <Users className="w-4 h-4 text-aurora-cyan mr-2" />
              <span>24/7 Support</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {/* Primary CTA - Start Free Trial */}
            <motion.button
              className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-aurora-cyan via-aurora-glow to-aurora-mint text-quantum-black font-bold text-lg rounded-2xl shadow-2xl shadow-aurora-glow/40 hover:shadow-aurora-glow/60 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated background overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-aurora-mint via-aurora-glow to-aurora-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
              
              <span className="relative z-10 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>

            {/* Secondary CTA - Watch Demo */}
            <motion.button
              className="group relative w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-aurora-glow/40 text-white font-semibold text-lg rounded-2xl backdrop-blur-md hover:border-aurora-glow hover:bg-aurora-glow/10 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-aurora-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <span className="relative z-10 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-aurora-cyan to-aurora-mint border-2 border-quantum-black flex items-center justify-center text-xs font-bold text-quantum-black">
                    {i}
                  </div>
                ))}
              </div>
              <span>Join 10,000+ businesses</span>
            </div>
            <div className="flex items-center">
              <div className="flex text-aurora-mint mr-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span>4.9/5 from 2,500+ reviews</span>
            </div>
          </motion.div>

          {/* Social Proof Stats - New Style */}
          <motion.div
            className="flex justify-center items-center gap-16 mb-16 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { value: '₹210Cr+', label: 'Revenue Processed', icon: '💰' },
              { value: '99.99%', label: 'Platform Uptime', icon: '⚡' },
              { value: '180+', label: 'Countries', icon: '🌍' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-3xl font-bold aurora-text mb-1 group-hover:text-aurora-mint transition-colors duration-300">{stat.value}</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  );
}