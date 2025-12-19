'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

const footerLinks = {
  Product: [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/docs/api' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  Support: [
    { name: 'Help Center', href: '/support' },
    { name: 'Community', href: '/community' },
    { name: 'Status', href: '/status' },
    { name: 'Security', href: '/security' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // This will be connected to Firestore
    console.log('Newsletter signup:', email);
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-aurora-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-aurora-mint/5 rounded-full blur-3xl" />
      </div>

      {/* Glass Panel */}
      <div className="glass-panel border-t border-glass-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Newsletter Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-cinematic mb-4">
              Stay in the <span className="aurora-text">Loop</span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest updates, feature releases, and industry insights 
              delivered straight to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 glass-panel rounded-full border border-glass-border 
                           focus:border-aurora-glow/50 focus:outline-none focus:shadow-neon 
                           bg-transparent text-white placeholder-gray-400"
                  required
                />
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-aurora-gradient text-quantum-black font-semibold 
                           rounded-full hover:shadow-aurora transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubscribed}
                >
                  {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-aurora-gradient rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-quantum-black" />
                </div>
                <span className="text-xl font-cinematic aurora-text">SaaSFlow</span>
              </Link>
              <p className="text-gray-400 text-sm mb-6 max-w-sm">
                The future of subscription management. Built for modern businesses 
                that demand precision, security, and scale.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 glass-panel rounded-full flex items-center justify-center 
                             hover:border-aurora-glow/50 hover:shadow-neon transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-4 h-4 text-gray-400 hover:text-aurora-glow" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-white mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-aurora-glow transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SaaSFlow. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-xs text-gray-500 flex items-center">
                <span className="w-2 h-2 bg-aurora-mint rounded-full mr-2 animate-pulse"></span>
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}