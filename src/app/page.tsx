'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProcessSection from "@/components/sections/ProcessSection";
import Chatbot from "@/components/chatbot/Chatbot";
import { AutomationIcon, ConsultingIcon, SaaSIcon } from '@/components/icons/ServiceIcons';
import { GPTIcon, RPAIcon, PowerPlatformIcon, OCRIcon, DataAnalysisIcon, APIIcon } from '@/components/icons/TechnologyIcons';

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const words = ['AI-SOLUTIONS', 'AUTOMATISIERUNG', 'INNOVATION'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 5000);
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
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0F]"
      >
        {/* Animated Background */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </motion.div>

        <div className="container mx-auto px-4 py-12 relative">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Illustration - Now on the left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-full lg:w-1/2 flex justify-center items-center"
            >
              <motion.div
                className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-square flex items-center justify-center p-4 lg:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-fuchsia-500/5 to-transparent rounded-3xl"></div>
                <motion.img
                  src="/images/A_digital_illustration_in_a_flat_and_modern_style_.png"
                  alt="Roboter schüttelt Geschäftsfrau die Hand – symbolisiert KI-Kooperation"
                  className="w-full h-full object-contain relative z-10"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Text Content - Now on the right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm text-gray-300 mb-6 text-sm tracking-wider"
              >
                Digitale Innovation aus Mannheim
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 leading-tight"
              >
                <span className="block text-white mb-2">Wir entwickeln</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed"
              >
                Effiziente KI-Lösungen für reale Herausforderungen – von der Idee bis zur Umsetzung.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={springTransition}
                  href="/kontakt" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium hover:from-purple-500 hover:to-indigo-500 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-center"
                >
                  Projekt starten
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={springTransition}
                  href="#leistungen" 
                  className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px", amount: 0.3 }}
        variants={sectionVariants}
        className="py-16 sm:py-24 lg:py-32 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#0D0D12] to-[#0B0B0F] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
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
                  className="text-gray-400 text-sm sm:text-base"
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
        className="py-16 sm:py-24 lg:py-32 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#0D0D12] to-[#0B0B0F] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {[
              {
                title: 'KI-Automatisierung',
                description: 'Steigern Sie Ihre Effizienz durch intelligente Prozessautomatisierung. Wir entwickeln maßgeschneiderte KI-Lösungen für Dokumentenerkennung, Datenverarbeitung und Kundenservice.',
                icon: <AutomationIcon />,
                gradient: 'from-purple-600/20 to-indigo-600/20',
                benefits: ['Reduzierte Prozesskosten', 'Höhere Genauigkeit', 'Schnellere Bearbeitung']
              },
              {
                title: 'KI-Beratung',
                description: 'Entwickeln Sie mit uns Ihre KI-Strategie. Von der Potentialanalyse bis zur Implementierung begleiten wir Sie auf dem Weg zur digitalen Transformation.',
                icon: <ConsultingIcon />,
                gradient: 'from-indigo-600/20 to-fuchsia-600/20',
                benefits: ['Klare Roadmap', 'Messbarer ROI', 'Praxiserprobte Lösungen']
              },
              {
                title: 'SaaS-Lösungen',
                description: 'Nutzen Sie die Vorteile cloudbasierter KI-Software. Unsere skalierbaren SaaS-Lösungen passen sich Ihren Anforderungen an und wachsen mit Ihrem Unternehmen.',
                icon: <SaaSIcon />,
                gradient: 'from-fuchsia-600/20 to-purple-600/20',
                benefits: ['Flexible Skalierung', 'Modernste Technologie', 'Kontinuierliche Updates']
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
                    className="mb-4 sm:mb-6 text-purple-400 flex justify-center sm:justify-start"
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-lg sm:text-xl lg:text-2xl font-medium mb-3 sm:mb-4 text-white text-center sm:text-left"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors mb-4 sm:mb-6 text-center sm:text-left"
                  >
                    {service.description}
                  </motion.p>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm sm:text-base text-gray-300 justify-center sm:justify-start">
                        <svg
                          className="w-4 h-4 mr-2 text-purple-400 flex-shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
        className="py-16 sm:py-24 lg:py-32 relative bg-[#0B0B0F]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
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
              className="text-2xl sm:text-3xl lg:text-5xl font-light mt-4 text-white"
            >
              Unsere Technologien
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base"
            >
              Wir setzen auf modernste Technologien und Frameworks, um innovative und skalierbare Lösungen zu entwickeln.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
          >
            {[
              { name: 'GPT-Modelle', icon: <GPTIcon />, description: 'State-of-the-Art KI für natürliche Sprachverarbeitung' },
              { name: 'RPA', icon: <RPAIcon />, description: 'Automatisierung von Geschäftsprozessen' },
              { name: 'Power Platform', icon: <PowerPlatformIcon />, description: 'Low-Code Entwicklung & Automatisierung' },
              { name: 'OCR', icon: <OCRIcon />, description: 'Intelligente Dokumentenerkennung' },
              { name: 'Datenanalyse', icon: <DataAnalysisIcon />, description: 'Fortschrittliche Datenauswertung' },
              { name: 'REST-APIs', icon: <APIIcon />, description: 'Moderne Schnittstellen-Architektur' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={springTransition}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-3 transform group-hover:scale-110 transition-transform flex justify-center"
                  >
                    {tech.icon}
                  </motion.div>
                  <motion.h3 
                    className="font-medium text-sm text-gray-300 group-hover:text-white transition-colors mb-2"
                  >
                    {tech.name}
                  </motion.h3>
                  <motion.p
                    className="text-xs text-gray-400 group-hover:text-gray-300"
                  >
                    {tech.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Trust & References Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px", amount: 0.3 }}
        variants={sectionVariants}
        className="py-16 sm:py-24 lg:py-32 relative bg-[#0B0B0F]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-indigo-400 text-sm font-medium tracking-wider uppercase"
            >
              Referenzen
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-5xl font-light mt-4 text-white"
            >
              Vertrauen unserer Kunden
            </motion.h2>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                quote: "Die KI-Lösung von Axora hat unsere Dokumentenverarbeitung revolutioniert. Wir sparen täglich wertvolle Zeit.",
                position: "CTO, TechCorp GmbH"
              },
              {
                quote: "Professionelle Beratung und erstklassige Implementierung. Das Team hat unsere Erwartungen übertroffen.",
                position: "Head of Innovation, InnovateTech"
              },
              {
                quote: "Die automatisierten Prozesse haben unsere Effizienz um 80% gesteigert. Eine Investition, die sich wirklich gelohnt hat.",
                position: "CEO, DataFlow Solutions"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={springTransition}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <svg
                    className="w-8 h-8 text-purple-500/20"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-2.2 0-4 1.8-4 4v12h6v-12h-4c0-1.1 0.9-2 2-2v-2zm12 0c-2.2 0-4 1.8-4 4v12h6v-12h-4c0-1.1 0.9-2 2-2v-2z" />
                  </svg>
                </div>
                <div className="relative">
                  <p className="text-sm text-gray-300 mb-4 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div>
                      <p className="text-xs text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
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
        className="py-16 sm:py-24 lg:py-32 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#0D0D12] to-[#0B0B0F] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            variants={fadeInUp}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl lg:text-5xl font-light mb-4 sm:mb-6 lg:mb-8 text-white px-2"
            >
              Bereit für den nächsten Schritt?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Lassen Sie uns gemeinsam Ihr Projekt besprechen und die perfekte KI-Lösung für Ihr Unternehmen entwickeln.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={springTransition}
                href="/kontakt"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium hover:from-purple-500 hover:to-indigo-500 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
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
                className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                aria-label="Chat starten"
              >
                <span>Chat starten</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <ProcessSection />

      <Chatbot />
    </>
  );
}
