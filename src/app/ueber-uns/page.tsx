'use client';

import { motion } from 'framer-motion';
import ParallaxSection from '@/components/animations/ParallaxSection';

export default function AboutUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-fuchsia-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-purple-500/5 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Über Axoralutions
              </span>
              <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Digitale Innovation aus Mannheim
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seit 2024 entwickeln wir innovative KI-Lösungen für Unternehmen, die ihre Prozesse optimieren und digitalisieren möchten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <ParallaxSection>
        <section className="py-20 bg-gradient-to-b from-indigo-950/50 to-purple-950/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                {...fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                  Unsere Vision
                </h2>
                <p className="text-gray-300">
                  Wir streben danach, die führende Kraft in der digitalen Transformation zu sein, indem wir innovative KI-Lösungen entwickeln, die Unternehmen helfen, ihre Prozesse zu optimieren und neue Möglichkeiten zu erschließen.
                </p>
              </motion.div>

              <motion.div
                {...fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Unsere Mission
                </h2>
                <p className="text-gray-300">
                  Wir machen KI-Technologien für Unternehmen aller Größen zugänglich und helfen ihnen, ihre digitalen Herausforderungen zu meistern. Durch maßgeschneiderte Lösungen und persönliche Betreuung unterstützen wir unsere Kunden auf ihrem Weg in die digitale Zukunft.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Gründer & Team */}
      <ParallaxSection>
        <section className="py-20 bg-gradient-to-b from-purple-950/50 to-fuchsia-950/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              {...fadeInUp}
              className="text-center mb-16"
            >
              <span className="text-fuchsia-400 text-sm font-semibold tracking-wider uppercase">Unser Team</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Der Mensch hinter Axoralutions
              </h2>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-600 flex items-center justify-center text-4xl">
                    DA
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Dreni Aliji
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Als Gründer von Axoralutions bringe ich meine Leidenschaft für KI und digitale Innovation in jedes Projekt ein. Mit jahrelanger Erfahrung in der Entwicklung von KI-Lösungen helfe ich Unternehmen, ihre digitalen Herausforderungen zu meistern.
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://linkedin.com/in/dreni-aliji"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/dreni-aliji"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>

      {/* Kultur & Werte */}
      <ParallaxSection>
        <section className="py-20 bg-gradient-to-b from-fuchsia-950/50 to-indigo-950/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              {...fadeInUp}
              className="text-center mb-16"
            >
              <span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase">Unsere Kultur</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Unsere Werte
              </h2>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: 'Innovation',
                  description: 'Wir denken außerhalb der Box und entwickeln zukunftsweisende Lösungen.',
                  icon: '💡'
                },
                {
                  title: 'Partnerschaft',
                  description: 'Wir arbeiten eng mit unseren Kunden zusammen und verstehen uns als verlässlicher Partner.',
                  icon: '🤝'
                },
                {
                  title: 'Qualität',
                  description: 'Wir setzen höchste Standards in der Entwicklung und Implementierung unserer Lösungen.',
                  icon: '⭐'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </ParallaxSection>

      {/* USP Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-950/50 to-purple-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Was uns ausmacht</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Unsere Unique Selling Points
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'Technische Expertise',
                description: 'Tiefes Verständnis der neuesten KI-Technologien und deren praktischer Anwendung.',
                icon: '🔬'
              },
              {
                title: 'Maßgeschneiderte Lösungen',
                description: 'Entwicklung individueller Lösungen, die genau auf die Bedürfnisse unserer Kunden zugeschnitten sind.',
                icon: '✂️'
              },
              {
                title: 'Schnelle Umsetzung',
                description: 'Agile Entwicklung und schnelle Implementierung von KI-Lösungen.',
                icon: '⚡'
              },
              {
                title: 'Persönliche Betreuung',
                description: 'Direkter Kontakt und intensive Zusammenarbeit mit unseren Kunden.',
                icon: '👥'
              }
            ].map((usp, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
              >
                <div className="text-4xl mb-4">{usp.icon}</div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {usp.title}
                </h3>
                <p className="text-gray-300">
                  {usp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
} 