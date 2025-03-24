'use client';

import { motion } from 'framer-motion';
import { Cloud, Code, Shield, BarChart } from 'lucide-react';
import Link from 'next/link';

// Konstanten für wiederverwendbare Styles
const GRADIENT_STYLES = {
  primary: 'from-purple-400 to-indigo-500',
  secondary: 'from-purple-500/10 to-indigo-500/10',
  text: 'from-purple-400 via-fuchsia-500 to-indigo-500'
};

const CARD_STYLES = {
  base: 'relative p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300',
  icon: 'p-3 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-500 text-white',
  title: 'text-2xl font-bold text-white',
  description: 'text-gray-400 mb-6',
  feature: 'flex items-center text-sm text-gray-300',
  dot: 'w-1.5 h-1.5 rounded-full bg-purple-400 mr-2'
};

// Animations-Varianten für Framer Motion
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const services = [
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Custom SaaS Entwicklung',
    description: 'Maßgeschneiderte SaaS-Lösungen für Ihre spezifischen Geschäftsanforderungen.',
    features: [
      'Skalierbare Cloud-Architektur',
      'Microservices-Architektur',
      'API-First Entwicklung',
      'DevOps & CI/CD Integration'
    ]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Cloud Infrastructure',
    description: 'Robuste und skalierbare Cloud-Infrastruktur für Ihre SaaS-Anwendungen.',
    features: [
      'AWS, Azure & GCP Integration',
      'Container Orchestration',
      'Serverless Architecture',
      'Infrastructure as Code'
    ]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Sicherheit & Compliance',
    description: 'Höchste Sicherheitsstandards und DSGVO-konforme Implementierung.',
    features: [
      'End-to-End Verschlüsselung',
      'DSGVO Compliance',
      'Penetration Testing',
      'Security Monitoring'
    ]
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Analytics & Reporting',
    description: 'Umfassende Analysen und Berichterstattung für Ihre SaaS-Anwendung.',
    features: [
      'Echtzeit-Analytics',
      'Custom Dashboards',
      'Performance Monitoring',
      'User Analytics'
    ]
  }
];

const processSteps = [
  {
    title: 'Analyse',
    description: 'Detaillierte Anforderungsanalyse und Konzeption'
  },
  {
    title: 'Design',
    description: 'UI/UX Design und Architekturplanung'
  },
  {
    title: 'Entwicklung',
    description: 'Agile Entwicklung mit modernen Technologien'
  },
  {
    title: 'Deployment',
    description: 'Sicheres Deployment und Monitoring'
  }
];

// Wiederverwendbare Komponenten
const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
  <motion.div
    {...fadeInUp}
    transition={{ delay: index * 0.1 }}
    className="group relative"
  >
    <div className={CARD_STYLES.base}>
      <div className={`absolute inset-0 bg-gradient-to-r ${GRADIENT_STYLES.secondary} rounded-2xl`} />
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className={CARD_STYLES.icon}>
            {service.icon}
          </div>
          <h2 className={CARD_STYLES.title}>{service.title}</h2>
        </div>
        <p className={CARD_STYLES.description}>{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className={CARD_STYLES.feature}>
              <div className={CARD_STYLES.dot} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const ProcessStep = ({ step, index }: { step: typeof processSteps[0], index: number }) => (
  <motion.div
    {...fadeInUp}
    transition={{ delay: index * 0.1 }}
    className="relative p-6 bg-black/50 backdrop-blur-lg rounded-xl border border-white/10"
  >
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold">
      {index + 1}
    </div>
    <h3 className="text-xl font-bold text-white mt-4 mb-2">{step.title}</h3>
    <p className="text-gray-400 text-sm">{step.description}</p>
  </motion.div>
);

export default function SaasEntwicklungPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            {...fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent"
          >
            SaaS & IT-Entwicklung
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Moderne Cloud-basierte Softwarelösungen mit KI-Funktionen für Ihr Unternehmen
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Unser Entwicklungsprozess</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ein strukturierter Ansatz für die Entwicklung Ihrer SaaS-Lösung
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="relative p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${GRADIENT_STYLES.secondary} rounded-2xl`} />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Bereit für Ihre SaaS-Lösung?</h2>
              <p className="text-gray-400 mb-8">
                Lassen Sie uns gemeinsam Ihre maßgeschneiderte SaaS-Lösung entwickeln.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
              >
                Kostenloses Erstgespräch
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 