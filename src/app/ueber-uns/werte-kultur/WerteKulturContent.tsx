'use client';

import { motion } from 'framer-motion';
import { Heart, Brain, Target, Users } from 'lucide-react';

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Leidenschaft & Innovation',
    description: 'Wir brennen für KI-Technologie und treiben Innovation voran.',
    list: [
      'Enthusiasmus für KI-Innovation',
      'Kontinuierliches Lernen',
      'Kreative Lösungsansätze',
      'Engagement für Qualität'
    ]
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Expertise & Qualität',
    description: 'Wir setzen auf höchste Standards und kontinuierliche Weiterentwicklung.',
    list: [
      'Technische Exzellenz',
      'Best Practices',
      'Qualitätssicherung',
      'Weiterbildung'
    ]
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Kundenorientierung',
    description: 'Ihr Erfolg steht im Mittelpunkt unseres Handelns.',
    list: [
      'Maßgeschneiderte Lösungen',
      'Enge Zusammenarbeit',
      'Transparente Kommunikation',
      'Langfristige Partnerschaft'
    ]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Teamwork & Kultur',
    description: 'Eine offene und innovative Arbeitskultur ist die Basis unseres Erfolgs.',
    list: [
      'Offene Kommunikation',
      'Gegenseitiger Respekt',
      'Work-Life-Balance',
      'Persönliche Entwicklung'
    ]
  }
];

const principles = [
  {
    title: 'Innovationskultur',
    description: 'Wir fördern kreatives Denken und neue Ideen. Innovation ist Teil unserer DNA und treibt uns an, stets bessere Lösungen zu entwickeln.'
  },
  {
    title: 'Qualitätsanspruch',
    description: 'Höchste Qualität in allen Bereichen ist für uns selbstverständlich. Wir setzen auf bewährte Methoden und moderne Technologien.'
  },
  {
    title: 'Teamspirit',
    description: 'Erfolg ist Teamarbeit. Wir pflegen eine Kultur des gegenseitigen Respekts und der offenen Kommunikation.'
  }
];

export function WerteKulturContent() {
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
            Werte & Kultur
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-semibold mb-6 text-white leading-tight"
          >
            Was uns antreibt und wie wir arbeiten
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Unsere Werte und Kultur prägen unser tägliches Handeln und sind die Basis für langfristigen Erfolg 
            und nachhaltige Partnerschaften.
          </motion.p>
        </div>
      </section>

      {/* Values Grid */}
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
                  <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-white mb-6">
                    {value.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-3">{value.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{value.description}</p>
                  <ul className="space-y-2">
                    {value.list.map((item) => (
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

      {/* Principles Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#111] rounded-2xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-6 text-white">Unsere Prinzipien</h2>
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <div key={principle.title}>
                  <h3 className="text-blue-400 font-medium mb-2">{index + 1}. {principle.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{principle.description}</p>
                </div>
              ))}
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
              Werden Sie Teil unseres Teams
            </h2>
            <p className="text-gray-400 mb-8 text-sm">
              Suchen Sie nach einer spannenden Herausforderung in einem innovativen Umfeld?
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors duration-300"
            >
              Jetzt bewerben
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 