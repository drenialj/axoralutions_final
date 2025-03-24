'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-6"
          >
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              1. März 2024
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              7 min Lesezeit
            </div>
            <div className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              Compliance
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent"
          >
            DSGVO-konforme KI-Implementierung
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Leitfaden für die datenschutzkonforme Entwicklung und Implementierung von KI-Systemen
          </motion.p>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-20">
        <div className="relative mb-12">
          <Image
            src="/blog/gdpr-ai.jpg"
            alt="DSGVO-konforme KI-Implementierung"
            width={1200}
            height={600}
            className="rounded-2xl"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p>
            Die Implementierung von KI-Systemen unter Berücksichtigung der DSGVO stellt Unternehmen 
            vor besondere Herausforderungen. Dieser Leitfaden zeigt, wie Sie KI-Projekte von Anfang 
            an datenschutzkonform gestalten können.
          </p>

          <h2>1. Grundprinzipien der DSGVO für KI-Systeme</h2>
          <p>
            Bei der Entwicklung von KI-Systemen müssen folgende DSGVO-Grundsätze beachtet werden:
          </p>
          <ul>
            <li>Rechtmäßigkeit und Transparenz der Verarbeitung</li>
            <li>Zweckbindung der Datenverarbeitung</li>
            <li>Datenminimierung</li>
            <li>Richtigkeit der Daten</li>
            <li>Speicherbegrenzung</li>
          </ul>

          <h2>2. Privacy by Design in der KI-Entwicklung</h2>
          <p>
            Privacy by Design bedeutet, Datenschutz von Anfang an mitzudenken:
          </p>
          <ul>
            <li>Frühzeitige Datenschutz-Folgenabschätzung</li>
            <li>Implementierung von Datenschutzmaßnahmen in der Architektur</li>
            <li>Dokumentation aller Entscheidungen</li>
            <li>Regelmäßige Überprüfung und Anpassung</li>
          </ul>

          <h2>3. Transparenz und Erklärbarkeit</h2>
          <p>
            KI-Systeme müssen transparent und nachvollziehbar sein:
          </p>
          <ul>
            <li>Dokumentation der Trainingsdaten und Algorithmen</li>
            <li>Erklärbare Entscheidungsprozesse</li>
            <li>Nachvollziehbare Modellausgaben</li>
            <li>Informationen über die Datenverarbeitung</li>
          </ul>

          <h2>4. Datensicherheit und Zugriffskontrollen</h2>
          <p>
            Technische und organisatorische Maßnahmen zum Schutz der Daten:
          </p>
          <ul>
            <li>Verschlüsselung sensibler Daten</li>
            <li>Rollenbasierte Zugriffskontrollen</li>
            <li>Regelmäßige Sicherheitsaudits</li>
            <li>Incident-Response-Pläne</li>
          </ul>

          <h2>5. Betroffenenrechte und Dokumentation</h2>
          <p>
            Implementierung der DSGVO-Betroffenenrechte:
          </p>
          <ul>
            <li>Recht auf Auskunft</li>
            <li>Recht auf Löschung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Widerspruchsrecht bei automatisierten Entscheidungen</li>
          </ul>

          <h2>Fazit</h2>
          <p>
            Die DSGVO-konforme Implementierung von KI-Systemen erfordert eine sorgfältige Planung 
            und kontinuierliche Überwachung. Der Schlüssel zum Erfolg liegt in der frühzeitigen 
            Berücksichtigung aller Datenschutzaspekte und der engen Zusammenarbeit zwischen 
            Entwicklern, Datenschutzbeauftragten und Fachabteilungen.
          </p>
        </div>

        {/* Back to Blog Link */}
        <div className="mt-12">
          <Link
            href="/company/blog"
            className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Blog
          </Link>
        </div>
      </article>
    </div>
  );
} 