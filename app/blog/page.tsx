'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import AuroraBackground from '@/components/ui/AuroraBackground';
import Link from 'next/link';

const posts = [
  {
    title: 'Building Scalable SaaS Architecture',
    excerpt: 'Learn how to design and implement a robust SaaS platform that scales with your business.',
    author: 'Alex Chen',
    date: '2024-01-15',
    slug: 'scalable-saas-architecture',
    category: 'Engineering'
  },
  {
    title: 'Subscription Billing Best Practices',
    excerpt: 'Master the art of subscription billing with proven strategies and implementation tips.',
    author: 'Sarah Johnson',
    date: '2024-01-12',
    slug: 'subscription-billing-best-practices',
    category: 'Business'
  },
  {
    title: 'Security in Modern SaaS Applications',
    excerpt: 'Essential security measures every SaaS founder should implement from day one.',
    author: 'Mike Rodriguez',
    date: '2024-01-10',
    slug: 'saas-security-guide',
    category: 'Security'
  }
];

export default function BlogPage() {
  return (
    <AuroraBackground className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl lg:text-4xl font-cinematic mb-4">
            SaaS <span className="aurora-text">Insights</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Expert insights, tutorials, and industry trends to help you build better SaaS products.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              className="glass-panel p-5 hover:shadow-neon transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-3">
                <span className="text-xs text-aurora-mint bg-aurora-mint/20 px-2 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h2 className="text-lg font-cinematic mb-3 hover:text-aurora-glow transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              
              <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
              
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-aurora-glow hover:text-aurora-mint transition-colors"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </AuroraBackground>
  );
}