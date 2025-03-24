'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: 1,
    title: "Analyse & Beratung",
    description: "Wir analysieren Ihre Anforderungen und beraten Sie zu den optimalen KI-Lösungen."
  },
  {
    number: 2,
    title: "Planung & Konzept",
    description: "Gemeinsam entwickeln wir eine maßgeschneiderte Strategie für Ihr Projekt."
  },
  {
    number: 3,
    title: "Entwicklung",
    description: "Unsere Experten implementieren die KI-Lösung nach modernsten Standards."
  },
  {
    number: 4,
    title: "Testing & Optimierung",
    description: "Wir testen und optimieren die Lösung bis zur Perfektion."
  },
  {
    number: 5,
    title: "Launch & Support",
    description: "Nach dem Go-live begleiten wir Sie mit kontinuierlichem Support."
  }
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-32 bg-gradient-to-b from-[#0b0b0f] via-[#111111] to-[#0b0b0f]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
        {/* Fade Edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f] via-transparent to-[#0b0b0f] pointer-events-none" />
      </div>
      
      <motion.div 
        style={{ opacity, y }}
        className="container relative"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm text-gray-300 mb-4 text-sm tracking-wider"
          >
            Von der Idee zur Umsetzung
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light mt-4 text-white"
          >
            Unser Vorgehen
          </motion.h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6 relative">
          {/* Animated Connection Line */}
          <div className="hidden md:block absolute top-[3.5rem] left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-6 p-6 rounded-xl hover:bg-white/[0.03] transition-all duration-300">
                {/* Number Circle with Glow Effect */}
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-purple-500/20 flex items-center justify-center group-hover:border-purple-500/40 transition-colors duration-300">
                    <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:text-center">
                  <h3 className="text-white text-lg font-medium mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0b0b0f] pointer-events-none" />
    </section>
  );
} 