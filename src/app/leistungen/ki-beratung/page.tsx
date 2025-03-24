'use client';

import { motion } from 'framer-motion';
import { Brain, Users, Target, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Workshops & Strategieentwicklung',
    description: 'Gemeinsam entwickeln wir Ihre KI-Strategie und identifizieren die besten Einsatzmöglichkeiten für Ihr Unternehmen.',
    features: [
      'Analyse bestehender Prozesse',
      'Identifikation von KI-Potenzialen',
      'Entwicklung einer Roadmap',
      'Ressourcenplanung'
    ]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Machbarkeitsstudien',
    description: 'Wir prüfen die technische und wirtschaftliche Machbarkeit Ihrer KI-Projekte.',
    features: [
      'Technische Analyse',
      'Kosten-Nutzen-Bewertung',
      'Risikoeinschätzung',
      'Implementierungsplan'
    ]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'KI-Strategie & Roadmap',
    description: 'Entwicklung einer umfassenden KI-Strategie mit klaren Meilensteinen und Zielen.',
    features: [
      'Strategische Ausrichtung',
      'Meilensteinplanung',
      'Team-Strukturierung',
      'Change Management'
    ]
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Technologieauswahl',
    description: 'Wir helfen Ihnen bei der Auswahl der optimalen KI-Technologien für Ihre Anforderungen.',
    features: [
      'Technologievergleich',
      'Vendor-Evaluation',
      'Architekturplanung',
      'Skalierbarkeitsanalyse'
    ]
  }
];

export default function KIBeratungPage() {
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
            KI-Beratung
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Strategische Beratung für Ihre KI-Transformation
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
              <h2 className="text-3xl font-bold mb-4">Bereit für Ihre KI-Transformation?</h2>
              <p className="text-gray-400 mb-8">
                Lassen Sie uns gemeinsam Ihre KI-Strategie entwickeln und Ihr Unternehmen in die Zukunft führen.
              </p>
              <a
                href="/kontakt"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
              >
                Kostenloses Erstgespräch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 