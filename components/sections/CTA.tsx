'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import GlowButton from '../ui/GlowButton';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-aurora-gradient opacity-10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center glass-panel p-12 rounded-3xl border-2 border-aurora-glow/30 backdrop-blur-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-cinematic mb-6">
            Ready to <span className="aurora-text">Scale</span>?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 10,000+ businesses using SaaSFlow to automate their subscription management and accelerate growth.
          </p>
          
          <div className="flex justify-center items-center gap-6 mb-8 text-sm">
            <div className="flex items-center text-aurora-mint">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center text-aurora-mint">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center text-aurora-mint">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Cancel anytime</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowButton className="group px-12 py-4 text-lg font-bold">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </GlowButton>
            
            <GlowButton variant="secondary" className="px-12 py-4 text-lg font-bold">
              Schedule Demo
            </GlowButton>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            Trusted by startups to Fortune 500 companies
          </p>
        </motion.div>
      </div>
    </section>
  );
}