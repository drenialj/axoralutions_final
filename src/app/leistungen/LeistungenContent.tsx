'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Brain, Code, Zap, Cloud } from 'lucide-react';
import { AutomationIcon, ConsultingIcon, SaaSIcon, CustomAIIcon } from '@/components/icons/ServiceIcons';

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
    title: 'Individuelle KI-Lösungen',
    description: 'Maßgeschneiderte KI-Lösungen mit GPT, NLP und Computer Vision',
    icon: <Code className="w-6 h-6" />,
    href: '/leistungen/individuelle-ki',
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
    href: '/leistungen/ki-automatisierung',
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
    href: '/leistungen/saas-loesungen',
    color: 'from-blue-400 to-cyan-500',
    features: [
      'Cloud-Architektur',
      'API-Entwicklung',
      'Frontend & Backend',
      'DevOps & CI/CD'
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LeistungenContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#0D0D12] to-[#0B0B0F]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        
        {/* Grid Background */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-purple-400 font-medium tracking-wider uppercase text-sm mb-6"
            >
              Unsere Leistungen
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6"
            >
              Innovative KI-Lösungen für Ihr Unternehmen
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Von der strategischen Beratung bis zur technischen Umsetzung – wir unterstützen Sie bei der digitalen Transformation mit modernsten KI-Technologien.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* KI-Automatisierung */}
            <motion.div 
              variants={fadeInUp}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <AutomationIcon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">KI-Automatisierung</h3>
                <p className="text-gray-400 mb-6">
                  Optimieren Sie Ihre Geschäftsprozesse durch intelligente Automatisierung. Wir entwickeln maßgeschneiderte KI-Lösungen, die Ihre Effizienz steigern und Kosten reduzieren.
                </p>
                <Link 
                  href="/leistungen/ki-automatisierung"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* KI-Beratung */}
            <motion.div 
              variants={fadeInUp}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ConsultingIcon className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">KI-Beratung</h3>
                <p className="text-gray-400 mb-6">
                  Entwickeln Sie eine zukunftssichere KI-Strategie. Unsere Experten beraten Sie bei der Identifikation und Implementierung der richtigen KI-Lösungen für Ihr Unternehmen.
                </p>
                <Link 
                  href="/leistungen/ki-beratung"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* SaaS-Lösungen */}
            <motion.div 
              variants={fadeInUp}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-fuchsia-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <SaaSIcon className="w-8 h-8 text-fuchsia-400" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">SaaS-Lösungen</h3>
                <p className="text-gray-400 mb-6">
                  Nutzen Sie skalierbare KI-Software aus der Cloud. Unsere SaaS-Lösungen bieten Ihnen modernste KI-Technologie ohne hohe Initialkosten und mit maximaler Flexibilität.
                </p>
                <Link 
                  href="/leistungen/saas-loesungen"
                  className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                >
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Individuelle KI-Lösungen */}
            <motion.div 
              variants={fadeInUp}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CustomAIIcon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Individuelle KI-Lösungen</h3>
                <p className="text-gray-400 mb-6">
                  Erhalten Sie maßgeschneiderte KI-Lösungen für Ihre spezifischen Anforderungen. Wir entwickeln individuelle Anwendungen, die perfekt auf Ihre Geschäftsprozesse abgestimmt sind.
                </p>
                <Link 
                  href="/leistungen/individuelle-ki"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#0D0D12] to-[#0B0B0F]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-light text-white mb-6"
            >
              Bereit für die digitale Transformation?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 mb-8"
            >
              Lassen Sie uns gemeinsam die Potenziale der KI für Ihr Unternehmen erschließen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-purple-500 hover:bg-purple-600 transition-colors duration-300"
              >
                Kostenloses Erstgespräch vereinbaren
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 