'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Brain, Code, Zap, Cloud } from 'lucide-react';

const services = [
  {
    title: 'KI-Beratung',
    description: 'Strategische Beratung für KI-Implementierungen, Workshops und Machbarkeitsstudien',
    icon: <Brain className="w-6 h-6" />,
    href: '/leistungen/ki-beratung',
    color: 'from-purple-400 to-indigo-500',
    features: [
      'Workshops & Strategieentwicklung',
      'Machbarkeitsstudien',
      'KI-Strategie & Roadmap',
      'Technologieauswahl'
    ]
  },
  {
    title: 'Custom AI Solutions',
    description: 'Maßgeschneiderte KI-Lösungen mit GPT, NLP und Computer Vision',
    icon: <Code className="w-6 h-6" />,
    href: '/leistungen/custom-ai',
    color: 'from-fuchsia-400 to-purple-500',
    features: [
      'GPT & LLM Integration',
      'NLP & Textanalyse',
      'Computer Vision',
      'Custom Model Training'
    ]
  },
  {
    title: 'Prozessautomatisierung',
    description: 'Intelligente Automatisierung mit RPA, OCR und Workflow-Management',
    icon: <Zap className="w-6 h-6" />,
    href: '/leistungen/automatisierung',
    color: 'from-indigo-400 to-blue-500',
    features: [
      'RPA & Workflow Automation',
      'OCR & Dokumentenverarbeitung',
      'API Integration',
      'Prozessoptimierung'
    ]
  },
  {
    title: 'SaaS & IT-Entwicklung',
    description: 'Cloud-basierte Softwarelösungen mit KI-Funktionen',
    icon: <Cloud className="w-6 h-6" />,
    href: '/leistungen/saas-entwicklung',
    color: 'from-blue-400 to-cyan-500',
    features: [
      'Cloud-Architektur',
      'API-Entwicklung',
      'Frontend & Backend',
      'DevOps & CI/CD'
    ]
  }
];

export default function ServicesPage() {
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
            Unsere Leistungen
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Innovative KI-Lösungen für die digitale Transformation Ihres Unternehmens
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <Link href={service.href}>
                  <div className="relative p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white`}>
                          {service.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                      </div>
                      <p className="text-gray-400 mb-6">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
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
              <h2 className="text-3xl font-bold mb-4">Bereit für die digitale Transformation?</h2>
              <p className="text-gray-400 mb-8">
                Lassen Sie uns gemeinsam die perfekte KI-Lösung für Ihr Unternehmen entwickeln.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 