'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Heart, Lightbulb, BookOpen } from 'lucide-react';

const companySections = [
  {
    title: 'Über uns',
    description: 'Lernen Sie Axoralutions kennen - unsere Mission und Vision',
    icon: <Users className="w-6 h-6" />,
    href: '/company/ueber-uns',
    color: 'from-purple-400 to-indigo-500'
  },
  {
    title: 'Werte & Kultur',
    description: 'Unsere Grundwerte und Arbeitsweise',
    icon: <Heart className="w-6 h-6" />,
    href: '/company/werte',
    color: 'from-fuchsia-400 to-purple-500'
  },
  {
    title: 'Team',
    description: 'Das Team hinter Axoralutions',
    icon: <Users className="w-6 h-6" />,
    href: '/company/team',
    color: 'from-indigo-400 to-blue-500'
  },
  {
    title: 'Blog & Insights',
    description: 'Fachartikel, Use Cases und KI-Trends',
    icon: <BookOpen className="w-6 h-6" />,
    href: '/company/blog',
    color: 'from-blue-400 to-cyan-500'
  }
];

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent"
          >
            Willkommen bei Axoralutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Entdecken Sie unsere Geschichte, Werte und das Team hinter der Innovation
          </motion.p>
        </div>
      </section>

      {/* Company Sections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companySections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <Link href={section.href}>
                  <div className="relative p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${section.color} text-white`}>
                          {section.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                      </div>
                      <p className="text-gray-400 mb-6">{section.description}</p>
                      <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Lassen Sie uns ins Gespräch kommen</h2>
              <p className="text-gray-400 mb-8">
                Haben Sie Fragen zu unserem Unternehmen oder möchten Sie mehr über unsere Services erfahren?
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 