'use client';

import { motion } from 'framer-motion';
import { Zap, FileText, Mail, Workflow } from 'lucide-react';

const services = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'RPA & Workflow Automation',
    description: 'Automatisierung wiederkehrender Aufgaben und Geschäftsprozesse mit modernen RPA-Tools.',
    features: [
      'Prozessanalyse & Mapping',
      'Workflow-Design',
      'Bot-Entwicklung',
      'Deployment & Monitoring'
    ]
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'OCR & Dokumentenverarbeitung',
    description: 'Intelligente Verarbeitung und Extraktion von Informationen aus Dokumenten und Formularen.',
    features: [
      'Dokumentenklassifikation',
      'Datenextraktion',
      'Qualitätssicherung',
      'Integration in Workflows'
    ]
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: 'API Integration',
    description: 'Nahtlose Integration verschiedener Systeme und Dienste für automatisierte Workflows.',
    features: [
      'API-Design',
      'Systemintegration',
      'Daten-Synchronisation',
      'Fehlerbehandlung'
    ]
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'Prozessoptimierung',
    description: 'Analyse und Optimierung bestehender Prozesse für maximale Effizienz.',
    features: [
      'Prozessanalyse',
      'Effizienzsteigerung',
      'Kostenoptimierung',
      'Skalierbarkeit'
    ]
  }
];

export default function AutomatisierungPage() {
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
            Prozessautomatisierung
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Intelligente Automatisierung Ihrer Geschäftsprozesse
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
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
                <div className="relative p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                    </div>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <h2 className="text-3xl font-bold mb-4">Bereit für die Automatisierung?</h2>
              <p className="text-gray-400 mb-8">
                Lassen Sie uns gemeinsam Ihre Prozesse optimieren und automatisieren.
              </p>
              <a
                href="/kontakt"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
              >
                Prozessanalyse starten
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 