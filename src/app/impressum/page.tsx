'use client';

import { motion } from 'framer-motion';

export default function Impressum() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20, transition: { duration: 0.8 } },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0d]">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-12 text-white">
            Impressum
          </h1>

          <div className="space-y-8">
            <motion.div
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
            >
              <h2 className="text-2xl font-medium mb-6 text-white">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-2 text-gray-300">
                <p>Axoralutions UG</p>
                <p>Spinnereistraße 10</p>
                <p>68307 Mannheim</p>
                <p>Telefon: +49 17642624008</p>
                <p>E-Mail: dreni.alj@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
            >
              <h2 className="text-2xl font-medium mb-6 text-white">
                Vertreten durch
              </h2>
              <div className="space-y-2 text-gray-300">
                <p>Geschäftsführer: Dreni Aliji</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
            >
              <h2 className="text-2xl font-medium mb-6 text-white">
                Registereintrag
              </h2>
              <div className="space-y-2 text-gray-300">
                <p>Registergericht: Amtsgericht Mannheim</p>
                <p>Register-Nummer: [Platzhalter]</p>
                <p>Umsatzsteuer-ID: [Platzhalter]</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
            >
              <h2 className="text-2xl font-medium mb-6 text-white">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="space-y-2 text-gray-300">
                <p>Dreni Aliji</p>
                <p>Spinnereistraße 10</p>
                <p>68307 Mannheim</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 