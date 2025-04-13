'use client';

import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Globe } from 'lucide-react';

const values = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Team & Expertise',
    description: 'Unser Team vereint jahrelange Erfahrung in KI, Softwareentwicklung und digitaler Transformation.',
    iconBg: 'bg-purple-950'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Mission & Vision',
    description: 'Wir streben danach, Unternehmen durch innovative KI-Lösungen zukunftsfähig zu machen.',
    iconBg: 'bg-blue-950'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Innovation & Forschung',
    description: 'Kontinuierliche Forschung und Entwicklung neuer KI-Technologien und Lösungsansätze.',
    iconBg: 'bg-fuchsia-950'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global & Lokal',
    description: 'Wir verbinden globale KI-Expertise mit lokaler Präsenz und kulturellem Verständnis.',
    iconBg: 'bg-indigo-950'
  }
];

export default function UnternehmenContent() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-purple-400 font-medium mb-4 uppercase tracking-wider text-sm"
          >
            Unser Unternehmen
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-semibold mb-6 text-white leading-tight"
          >
            Innovative KI-Lösungen für Ihr Unternehmen
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Von der strategischen Beratung bis zur technischen Umsetzung – wir unterstützen Sie bei der digitalen Transformation mit modernsten KI-Technologien.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 bg-[#111] rounded-2xl h-full">
                  <div className={`w-10 h-10 rounded-lg ${value.iconBg} flex items-center justify-center text-white mb-6`}>
                    {value.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-3">{value.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
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
            className="bg-[#111] rounded-2xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-6 text-white">Unsere Geschichte</h2>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>
                Axoralutions wurde mit der Vision gegründet, Unternehmen durch innovative KI-Lösungen 
                in die digitale Zukunft zu führen. Unsere Reise begann mit einem kleinen Team von Experten, 
                die ihre Leidenschaft für KI-Technologie und Innovation teilen.
              </p>
              <p>
                Heute sind wir ein wachsendes Unternehmen mit einem diversen Team von Spezialisten, 
                die sich der Entwicklung zukunftsfähiger KI-Lösungen verschrieben haben. Unsere Expertise 
                umfasst KI-Entwicklung, Prozessautomatisierung und digitale Transformation.
              </p>
              <p>
                Wir glauben an die Kraft der KI-Innovation und daran, dass intelligente Technologie positive Veränderungen 
                bewirken kann. Mit jedem Projekt streben wir danach, nicht nur technische Lösungen zu 
                liefern, sondern echte Wertschöpfung für unsere Kunden zu schaffen.
              </p>
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
            <h2 className="text-2xl font-semibold mb-4 text-white">Bereit für die digitale Transformation?</h2>
            <p className="text-gray-400 mb-8 text-sm">
              Lassen Sie uns gemeinsam die Potenziale der KI für Ihr Unternehmen erschließen.
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-purple-500 text-white text-sm font-medium hover:bg-purple-600 transition-colors duration-300"
            >
              Kostenloses Erstgespräch vereinbaren
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 