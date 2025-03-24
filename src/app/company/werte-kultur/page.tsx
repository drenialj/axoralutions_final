'use client';

import { motion } from 'framer-motion';
import { Heart, Brain, Target, Users } from 'lucide-react';

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Leidenschaft',
    description: 'Wir brennen für Technologie und Innovation.',
    features: [
      'Enthusiasmus für Innovation',
      'Kontinuierliches Lernen',
      'Kreative Lösungsansätze',
      'Engagement für Qualität'
    ]
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Innovation',
    description: 'Wir entwickeln zukunftsweisende Lösungen.',
    features: [
      'Experimentierfreude',
      'Technologischer Fortschritt',
      'Kreative Ideen',
      'Zukunftsorientierung'
    ]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Exzellenz',
    description: 'Wir streben nach höchster Qualität.',
    features: [
      'Qualitätsorientierung',
      'Kontinuierliche Verbesserung',
      'Präzision & Detail',
      'Professionelle Standards'
    ]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Zusammenarbeit',
    description: 'Wir fördern eine offene Arbeitskultur.',
    features: [
      'Teamgeist',
      'Offene Kommunikation',
      'Gegenseitiger Respekt',
      'Gemeinsames Wachstum'
    ]
  }
];

export default function WerteKulturPage() {
  return (
    <div className="min-h-screen bg-black text-white">
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
            Werte & Kultur
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Was uns antreibt und wie wir zusammenarbeiten
          </motion.p>
        </div>
      </section>

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
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
                        {value.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-white">{value.title}</h2>
                    </div>
                    <p className="text-gray-400 mb-6">{value.description}</p>
                    <ul className="space-y-2">
                      {value.features.map((feature) => (
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
    </div>
  );
} 