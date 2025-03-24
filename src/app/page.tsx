'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProcessSection from "@/components/sections/ProcessSection";

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const words = ['AI-SOLUTIONS', 'AUTOMATISIERUNG', 'INNOVATION'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20, transition: { duration: 0.5, ease: "easeOut" } },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 10
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0c0c0d] to-[#101010]"
      >
        {/* Animated Background */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </motion.div>

        {/* Mouse Tracking Effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm text-gray-300 mb-8 text-sm tracking-wider"
            >
              Digitale Innovation aus Mannheim
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight mb-6 leading-tight"
            >
              <span className="block text-white mb-4">Wir entwickeln</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`block bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent ${
                    words[currentWordIndex] === 'AI-SOLUTIONS' ? 'text-3xl sm:text-4xl md:text-6xl' : ''
                  }`}
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Von der Strategie zur Umsetzung. 
              Wir machen KI greifbar und nutzbar für Ihr Unternehmen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={springTransition}
                href="/kontakt" 
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium hover:from-purple-500 hover:to-indigo-500 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                aria-label="Projekt starten"
              >
                <span className="relative z-10">Projekt starten</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={springTransition}
                href="#leistungen" 
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
                aria-label="Mehr über unsere Leistungen erfahren"
              >
                <span>Mehr erfahren</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px", amount: 0.3 }}
        variants={sectionVariants}
        className="py-20 bg-gradient-to-b from-[#101010] to-[#0c0c0d]"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"
          >
            {[
              { number: '95%', label: 'Erfolgsrate' },
              { number: '120+', label: 'Automatisierte Prozesse' },
              { number: '15+', label: 'Erfolgreiche Projekte' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-gray-400 text-sm"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.2 }}
        variants={sectionVariants}
        id="leistungen" 
        className="py-12 sm:py-20 bg-gradient-to-b from-[#0c0c0d] to-[#101010] min-h-[50vh] sm:min-h-0"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-8 sm:mb-16"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-purple-400 text-sm font-medium tracking-wider uppercase block"
            >
              Unsere Services
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-5xl font-light mt-4 text-white px-2"
            >
              Unsere Leistungen
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {[
              {
                title: 'KI-Automatisierungen',
                description: 'Wir automatisieren wiederkehrende Aufgaben wie Dokumentenerkennung, Datenerfassung oder Kundenanfragen mit KI – effizient und fehlerfrei.',
                gradient: 'from-purple-600/20 to-indigo-600/20',
                icon: '⚡'
              },
              {
                title: 'KI-Beratung',
                description: 'Wir begleiten Unternehmen von der Idee über die Planung bis zur Umsetzung intelligenter Systeme und helfen, echte Use Cases zu identifizieren.',
                gradient: 'from-indigo-600/20 to-fuchsia-600/20',
                icon: '🎯'
              },
              {
                title: 'SaaS-Lösungen',
                description: 'Wir entwickeln maßgeschneiderte Software-as-a-Service-Lösungen mit KI-Kern – individuell, skalierbar und cloudbasiert.',
                gradient: 'from-fuchsia-600/20 to-purple-600/20',
                icon: '🚀'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={springTransition}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300"
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}
                />
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl sm:text-4xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform"
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4 text-white"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors"
                  >
                    {service.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px", amount: 0.3 }}
        variants={sectionVariants}
        className="py-20 bg-gradient-to-b from-[#101010] to-[#0c0c0d]"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-indigo-400 text-sm font-medium tracking-wider uppercase"
            >
              Tools & Frameworks
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-light mt-4 text-white"
            >
              Unsere Technologien
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8"
          >
            {[
              { name: 'GPT-Modelle', icon: '🤖', color: 'from-purple-500 to-indigo-600' },
              { name: 'RPA', icon: '⚙️', color: 'from-indigo-500 to-fuchsia-600' },
              { name: 'Power Platform', icon: '⚡', color: 'from-fuchsia-500 to-purple-600' },
              { name: 'OCR', icon: '📝', color: 'from-purple-500 to-indigo-600' },
              { name: 'Datenanalyse', icon: '📊', color: 'from-indigo-500 to-fuchsia-600' },
              { name: 'REST-APIs', icon: '🔌', color: 'from-fuchsia-500 to-purple-600' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={springTransition}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500`}
                />
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform"
                  >
                    {tech.icon}
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="font-medium text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors"
                  >
                    {tech.name}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px", amount: 0.3 }}
        variants={sectionVariants}
        className="py-20 bg-gradient-to-b from-[#0c0c0d] to-[#101010]"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeInUp}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8 text-white"
            >
              Bereit für den nächsten Schritt?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Lassen Sie uns gemeinsam Ihr Projekt besprechen und die perfekte KI-Lösung für Ihr Unternehmen entwickeln.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={springTransition}
                href="/kontakt"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium hover:from-purple-500 hover:to-indigo-500 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                aria-label="Termin vereinbaren"
              >
                <span className="relative z-10">Termin vereinbaren</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={springTransition}
                href="/kontakt"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
                aria-label="Chat starten"
              >
                <span>Chat starten</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
    </div>
      </motion.section>

      <ProcessSection />
    </>
  );
}
