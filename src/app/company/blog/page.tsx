'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      slug: 'zukunft-ki-geschaeftswelt',
      title: 'Die Zukunft der KI in der Geschäftswelt',
      description: 'Ein Ausblick auf die Entwicklungen und Chancen der künstlichen Intelligenz im Business-Kontext.',
      date: '15. März 2024',
      readTime: '5 min',
      image: '/blog/ai-future.jpg'
    },
    {
      slug: 'prozessautomatisierung-effizienz',
      title: 'Prozessautomatisierung: Effizienzsteigerung durch KI',
      description: 'Praktische Anwendungsfälle und Best Practices für die Automatisierung von Geschäftsprozessen.',
      date: '10. März 2024',
      readTime: '4 min',
      image: '/blog/process-automation.jpg'
    },
    {
      slug: 'saas-entwicklung-trends',
      title: 'SaaS-Entwicklung: Trends und Best Practices',
      description: 'Aktuelle Entwicklungen und bewährte Methoden in der SaaS-Entwicklung.',
      date: '5. März 2024',
      readTime: '6 min',
      image: '/blog/saas-development.jpg'
    },
    {
      slug: 'dsgvo-ki-implementierung',
      title: 'DSGVO-konforme KI-Implementierung',
      description: 'Leitfaden für die datenschutzkonforme Entwicklung und Implementierung von KI-Systemen.',
      date: '1. März 2024',
      readTime: '7 min',
      image: '/blog/gdpr-ai.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with increased padding and line-height */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-relaxed bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent"
          >
            Blog & Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Erfahren Sie mehr über die neuesten Entwicklungen in KI, Technologie
            und digitaler Transformation
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/company/blog/${post.slug}`}
              className="group"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-zinc-900/50 rounded-2xl overflow-hidden hover:bg-zinc-800/50 transition-colors"
              >
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-violet-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-6">
                    {post.description}
                  </p>
                  <div className="flex items-center text-violet-400 group-hover:text-violet-300 transition-colors">
                    Weiterlesen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 