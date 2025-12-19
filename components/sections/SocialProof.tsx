'use client';

import { motion } from 'framer-motion';

const brands = [
  { name: 'Microsoft', logo: 'M' },
  { name: 'Shopify', logo: 'S' },
  { name: 'Stripe', logo: '$' },
  { name: 'Slack', logo: '#' },
  { name: 'Zoom', logo: 'Z' },
  { name: 'Adobe', logo: 'A' }
];

export default function SocialProof() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                className="flex items-center space-x-3 text-gray-400 hover:text-aurora-glow transition-all duration-500 cursor-pointer relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.1, y: -2 }}
              >
                <div className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center text-sm font-bold text-aurora-mint border border-aurora-mint/50 shadow-neon/50 bg-aurora-mint/5 group-hover:border-aurora-mint group-hover:shadow-neon group-hover:bg-aurora-mint/10 transition-all duration-500">
                  {brand.logo}
                </div>
                <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">{brand.name}</span>
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-aurora-gradient/30 group-hover:h-1 group-hover:bg-aurora-gradient transition-all duration-500 rounded-full shadow-aurora/50" />
                <div className="absolute inset-0 bg-aurora-gradient opacity-5 group-hover:opacity-10 rounded-xl transition-opacity duration-500 blur-xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}