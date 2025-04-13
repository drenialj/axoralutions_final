'use client';

import { motion } from 'framer-motion';
import { Rocket, Users, Target, Code } from 'lucide-react';

const features = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Innovation & Zukunft',
    description: 'Wir treiben die digitale Transformation voran und entwickeln zukunftsweisende KI-Lösungen für unsere Kunden.',
    list: [
      'Innovative KI-Technologien',
      'Zukunftsorientierte Lösungen',
      'Kontinuierliche Weiterentwicklung',
      'Technologische Exzellenz'
    ]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Unser Team',
    description: 'Ein Team von Experten mit langjähriger Erfahrung in KI, Softwareentwicklung und Prozessoptimierung.',
    list: [
      'Interdisziplinäre Expertise',
      'Agile Arbeitsweise',
      'Kontinuierliche Weiterbildung',
      'Innovative Denkweise'
    ]
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Unsere Mission',
    description: 'Wir machen Unternehmen fit für die digitale Zukunft durch maßgeschneiderte KI-Lösungen.',
    list: [
      'Nachhaltige Transformation',
      'Messbare Ergebnisse',
      'Langfristige Partnerschaften',
      'Wertorientierung'
    ]
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Technologie',
    description: 'Modernste KI-Technologien und Entwicklungsmethoden für optimale Ergebnisse.',
    list: [
      'State-of-the-Art KI',
      'Skalierbare Architekturen',
      'Sichere Implementierung',
      'Bewährte Frameworks'
    ]
  }
];

export function UeberUnsContent() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 font-medium mb-4 uppercase tracking-wider text-sm"
          >
            Über uns
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-semibold mb-6 text-white leading-tight"
          >
            Ihr Partner für digitale Innovation und KI-Transformation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Wir sind ein innovatives Technologieunternehmen aus Mannheim, spezialisiert auf KI-Lösungen 
            und digitale Transformation. Unsere Mission ist es, Unternehmen durch innovative Technologien 
            zukunftsfähig zu machen.
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 bg-[#111] rounded-2xl h-full">
                  <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-white mb-6">
                    {feature.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-3">{feature.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.list.map((item) => (
                      <li key={item} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#111] rounded-2xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-6 text-white">Unser Ansatz</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-blue-400 font-medium mb-2">1. Innovation & Expertise</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wir kombinieren innovative KI-Technologien mit fundierter Branchenexpertise, 
                  um maßgeschneiderte Lösungen zu entwickeln, die echten Mehrwert schaffen.
                </p>
              </div>
              <div>
                <h3 className="text-blue-400 font-medium mb-2">2. Kundenorientierung</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ihre Anforderungen stehen im Mittelpunkt. Wir arbeiten eng mit Ihnen zusammen, 
                  um Lösungen zu entwickeln, die perfekt zu Ihren Zielen passen.
                </p>
              </div>
              <div>
                <h3 className="text-blue-400 font-medium mb-2">3. Qualität & Nachhaltigkeit</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wir setzen auf höchste Qualitätsstandards und nachhaltige Lösungen, 
                  die langfristigen Erfolg und Wachstum ermöglichen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Bereit für Ihre digitale Transformation?
            </h2>
            <p className="text-gray-400 mb-8 text-sm">
              Lassen Sie uns gemeinsam die Zukunft Ihres Unternehmens gestalten.
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors duration-300"
            >
              Kostenloses Erstgespräch vereinbaren
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 