'use client';

import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Globe } from 'lucide-react';

const values = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team & Expertise',
    description: 'Unser Team vereint jahrelange Erfahrung in KI, Softwareentwicklung und digitaler Transformation.',
    features: [
      'Interdisziplinäres Team',
      'Kontinuierliche Weiterbildung',
      'Agile Arbeitsmethoden',
      'Innovative Lösungsansätze'
    ]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Mission & Vision',
    description: 'Wir streben danach, Unternehmen durch innovative Technologielösungen zukunftsfähig zu machen.',
    features: [
      'Nachhaltige Digitalisierung',
      'Technologische Innovation',
      'Kundenorientierung',
      'Wertschöpfung'
    ]
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation & Forschung',
    description: 'Kontinuierliche Forschung und Entwicklung neuer Technologien und Lösungsansätze.',
    features: [
      'KI-Forschung',
      'Prototypenentwicklung',
      'Technologie-Partnerschaften',
      'Innovationsworkshops'
    ]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Global & Lokal',
    description: 'Wir verbinden globale Expertise mit lokaler Präsenz und kulturellem Verständnis.',
    features: [
      'Internationale Projekte',
      'Lokale Expertise',
      'Kulturelle Vielfalt',
      'Globale Vernetzung'
    ]
  }
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent"
          >
            Über Axoralutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Ihr Partner für digitale Innovation und technologische Transformation
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-white">
                        {value.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-white">{value.title}</h2>
                    </div>
                    <p className="text-gray-400 mb-6">{value.description}</p>
                    <ul className="space-y-2">
                      {value.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2" />
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

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Unsere Geschichte</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Axoralutions wurde mit der Vision gegründet, Unternehmen durch innovative Technologielösungen 
                  in die digitale Zukunft zu führen. Unsere Reise begann mit einem kleinen Team von Experten, 
                  die ihre Leidenschaft für Technologie und Innovation teilen.
                </p>
                <p>
                  Heute sind wir ein wachsendes Unternehmen mit einem diversen Team von Spezialisten, 
                  die sich der Entwicklung zukunftsfähiger Lösungen verschrieben haben. Unsere Expertise 
                  umfasst KI, Softwareentwicklung, Prozessautomatisierung und digitale Transformation.
                </p>
                <p>
                  Wir glauben an die Kraft der Innovation und daran, dass Technologie positive Veränderungen 
                  bewirken kann. Mit jedem Projekt streben wir danach, nicht nur technische Lösungen zu 
                  liefern, sondern echte Wertschöpfung für unsere Kunden zu schaffen.
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
            className="relative p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Werden Sie Teil unserer Geschichte</h2>
              <p className="text-gray-400 mb-8">
                Lassen Sie uns gemeinsam die Zukunft gestalten.
              </p>
              <a
                href="/kontakt"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 