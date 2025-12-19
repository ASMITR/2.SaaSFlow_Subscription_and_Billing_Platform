'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "SaaSFlow reduced our billing overhead by 60% and improved cash flow predictability. The ROI was evident within the first quarter.",
    author: "Vikram Mehta",
    role: "Chief Financial Officer",
    company: "Infosys Limited",
    rating: 5,
    avatar: "VM",
    logo: "🏢"
  },
  {
    quote: "Seamless integration with our existing tech stack. Zero downtime migration and enterprise-grade compliance out of the box.",
    author: "Dr. Sunita Reddy",
    role: "Head of Digital Transformation",
    company: "Apollo Hospitals",
    rating: 5,
    avatar: "SR",
    logo: "🏥"
  },
  {
    quote: "The platform scales effortlessly with our growth. Managing 50,000+ subscribers across multiple markets has never been easier.",
    author: "Arjun Malhotra",
    role: "VP of Operations",
    company: "Zomato",
    rating: 5,
    avatar: "AM",
    logo: "🍽️"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aurora-teal/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-aurora-mint/4 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-panel border border-aurora-mint/30 mb-6">
            <span className="text-aurora-mint text-sm font-semibold">Trusted by Fortune 500 Companies</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-cinematic mb-6">
            Enterprise <span className="aurora-text">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Leading enterprises trust SaaSFlow to power their subscription revenue at scale
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              {/* Card */}
              <div className="relative bg-quantum-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-aurora-glow/30 transition-all duration-500 h-full shadow-2xl">
                {/* Company Logo & Quote */}
                <div className="flex items-start justify-between mb-6">
                  <Quote className="w-6 h-6 text-aurora-glow/60" />
                  <div className="text-2xl opacity-60">{testimonial.logo}</div>
                </div>
                
                {/* Quote */}
                <blockquote className="text-white mb-8 leading-relaxed text-lg font-medium">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-aurora-glow/30 to-transparent mb-6" />
                
                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-aurora-cyan to-aurora-mint rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-quantum-black font-bold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white text-base">{testimonial.author}</div>
                      <div className="text-gray-300 text-sm">{testimonial.role}</div>
                      <div className="text-aurora-mint text-sm font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-aurora-mint fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Subtle Glow */}
                <div className="absolute inset-0 rounded-2xl bg-aurora-gradient opacity-0 group-hover:opacity-3 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enterprise Metrics */}
        <motion.div
          className="mt-20 glass-panel rounded-3xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold aurora-text mb-2">₹210Cr+</div>
              <div className="text-gray-300 text-sm">Revenue Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold aurora-text mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold aurora-text mb-2">500+</div>
              <div className="text-gray-300 text-sm">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold aurora-text mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Premium Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}