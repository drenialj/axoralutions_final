'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SaaSIcon } from '@/components/icons/ServiceIcons';
import { Cloud, Shield, Zap, BarChart } from 'lucide-react';

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

const services = [
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud-native Lösungen',
    description: 'Moderne, skalierbare SaaS-Lösungen für maximale Flexibilität und Performance.',
    features: [
      'Microservices-Architektur',
      'Container-Orchestrierung',
      'Auto-Skalierung',
      'Multi-Cloud Support'
    ]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Enterprise Security',
    description: 'Höchste Sicherheitsstandards für Ihre geschäftskritischen Anwendungen.',
    features: [
      'Ende-zu-Ende Verschlüsselung',
      'Identity Management',
      'Compliance-Monitoring',
      'Datenschutz-Garantie'
    ]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'KI-Integration',
    description: 'Integration modernster KI-Technologien in Ihre SaaS-Anwendungen.',
    features: [
      'GPT & LLM Integration',
      'Machine Learning',
      'Predictive Analytics',
      'Automatisierte Workflows'
    ]
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Analytics & Reporting',
    description: 'Umfassende Analyse- und Reporting-Funktionen für datenbasierte Entscheidungen.',
    features: [
      'Real-time Analytics',
      'Custom Dashboards',
      'KPI Tracking',
      'Export-Funktionen'
    ]
  }
];

export default function SaaSLoesungenContent() {
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
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <SaaSIcon className="w-16 h-16 text-indigo-400" />
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-indigo-400 font-medium tracking-wider uppercase text-sm mb-6 text-center"
            >
              SaaS-Lösungen
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 text-center"
            >
              Enterprise SaaS-Lösungen mit KI
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto text-center"
            >
              Skalierbare, sichere und intelligente Software-as-a-Service Lösungen für Ihr Unternehmen.
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
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-light text-white mb-8">Unser Entwicklungsprozess</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium text-indigo-400 mb-3">1. Anforderungsanalyse</h3>
                <p className="text-gray-400">
                  Wir analysieren Ihre spezifischen Anforderungen und entwickeln ein maßgeschneidertes Konzept für Ihre SaaS-Lösung.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-indigo-400 mb-3">2. Architektur & Design</h3>
                <p className="text-gray-400">
                  Entwicklung einer skalierbaren Cloud-Architektur und eines modernen User Interface Designs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-indigo-400 mb-3">3. Agile Entwicklung</h3>
                <p className="text-gray-400">
                  Iterative Entwicklung mit regelmäßigen Feedback-Schleifen und kontinuierlicher Integration neuer Features.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-indigo-400 mb-3">4. Deployment & Support</h3>
                <p className="text-gray-400">
                  Professionelles Deployment, umfassende Dokumentation und kontinuierlicher Support für Ihre SaaS-Lösung.
                </p>
              </div>
            </div>
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
              Bereit für Ihre eigene SaaS-Lösung?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 mb-8"
            >
              Lassen Sie uns gemeinsam Ihre Vision einer modernen SaaS-Lösung verwirklichen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300"
              >
                Kostenloses Beratungsgespräch vereinbaren
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 