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
              15. März 2024
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              5 min Lesezeit
            </div>
            <div className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              KI & Innovation
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent"
          >
            Die Zukunft der KI in der Geschäftswelt
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Wie künstliche Intelligenz Unternehmen transformiert und neue Möglichkeiten schafft
          </motion.p>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-20">
        <div className="relative mb-12">
          <Image
            src="/blog/ai-future.jpg"
            alt="Die Zukunft der KI in der Geschäftswelt"
            width={1200}
            height={600}
            className="rounded-2xl"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p>
            Die künstliche Intelligenz (KI) revolutioniert die Art und Weise, wie Unternehmen arbeiten und Wert schaffen. 
            In diesem Artikel werfen wir einen Blick auf die wichtigsten Entwicklungen und Chancen, die KI für die 
            Geschäftswelt bietet.
          </p>

          <h2>1. Automatisierung und Effizienzsteigerung</h2>
          <p>
            KI-gestützte Automatisierung ermöglicht es Unternehmen, repetitive Aufgaben effizienter zu erledigen und 
            menschliche Ressourcen für strategischere Aufgaben freizusetzen. Von der Dokumentenverarbeitung bis hin 
            zur Kundenbetreuung - KI-Systeme übernehmen zunehmend Routineaufgaben.
          </p>

          <h2>2. Datenbasierte Entscheidungsfindung</h2>
          <p>
            Durch die Analyse großer Datenmengen können KI-Systeme Muster erkennen und wertvolle Einblicke liefern, 
            die Unternehmen bei der Entscheidungsfindung unterstützen. Dies führt zu besseren, datengestützten 
            Geschäftsentscheidungen.
          </p>

          <h2>3. Personalisierung und Kundenerlebnis</h2>
          <p>
            KI ermöglicht es Unternehmen, ihre Produkte und Dienstleistungen stärker auf die individuellen Bedürfnisse 
            ihrer Kunden abzustimmen. Durch die Analyse von Kundendaten können personalisierte Angebote und 
            maßgeschneiderte Lösungen entwickelt werden.
          </p>

          <h2>4. Innovation und neue Geschäftsmodelle</h2>
          <p>
            Die Integration von KI eröffnet Unternehmen neue Möglichkeiten für Innovation und die Entwicklung 
            disruptiver Geschäftsmodelle. Von KI-gestützten Produktentwicklungen bis hin zu neuen 
            Dienstleistungsangeboten - die Möglichkeiten sind vielfältig.
          </p>

          <h2>Herausforderungen und Chancen</h2>
          <p>
            Während die Vorteile der KI-Integration offensichtlich sind, gibt es auch Herausforderungen, die es zu 
            meistern gilt. Dazu gehören:
          </p>
          <ul>
            <li>Datenschutz und ethische Überlegungen</li>
            <li>Integration in bestehende Systeme</li>
            <li>Qualifizierung der Mitarbeiter</li>
            <li>Kosten und ROI-Betrachtungen</li>
          </ul>

          <h2>Fazit</h2>
          <p>
            Die Zukunft der KI in der Geschäftswelt ist vielversprechend. Unternehmen, die die Chancen der KI 
            frühzeitig erkennen und strategisch nutzen, werden sich einen entscheidenden Wettbewerbsvorteil 
            verschaffen. Der Schlüssel zum Erfolg liegt in der richtigen Balance zwischen Innovation und 
            verantwortungsvoller Implementierung.
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