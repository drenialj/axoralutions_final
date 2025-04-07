import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Chatbot from '@/components/chatbot/Chatbot';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axoralutions - KI-Lösungen für Ihr Unternehmen",
  description: "Digitale Innovation aus Mannheim. Wir entwickeln KI-Lösungen für Unternehmen, die ihre Prozesse optimieren und digitalisieren möchten.",
  icons: {
    icon: [
      {
        url: '/logo.png',
        sizes: '50x50',
        type: 'image/png',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0c0c0d] text-white min-w-[320px] overflow-x-hidden`}>
        <Navbar />
        <Chatbot />
        <main className="min-h-screen pt-16 sm:pt-20">
          {children}
        </main>
        <footer className="bg-[#101010] border-t border-white/5">
          <div className="container mx-auto py-8 sm:py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Axoralutions
                </h3>
                <p className="text-gray-400 text-sm max-w-sm">
                  Digitale Innovation aus Mannheim. Wir entwickeln KI-Lösungen für Unternehmen.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Navigation</h4>
                <ul className="space-y-1.5">
                  <li><a href="/" className="text-gray-400 hover:text-white text-sm transition-colors">Start</a></li>
                  <li><a href="/leistungen" className="text-gray-400 hover:text-white text-sm transition-colors">Leistungen</a></li>
                  <li><a href="/ueber-uns" className="text-gray-400 hover:text-white text-sm transition-colors">Über uns</a></li>
                  <li><a href="/kontakt" className="text-gray-400 hover:text-white text-sm transition-colors">Kontakt</a></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Rechtliches</h4>
                <ul className="space-y-1.5">
                  <li><a href="/impressum" className="text-gray-400 hover:text-white text-sm transition-colors">Impressum</a></li>
                  <li><a href="/datenschutz" className="text-gray-400 hover:text-white text-sm transition-colors">Datenschutz</a></li>
                  <li><a href="/agb" className="text-gray-400 hover:text-white text-sm transition-colors">AGB</a></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Kontakt</h4>
                <ul className="space-y-1.5">
                  <li className="text-gray-400 text-sm">info@axoralutions.de</li>
                  <li className="text-gray-400 text-sm">+49 176 42624008</li>
                  <li className="text-gray-400 text-sm">Mannheim, Deutschland</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
                <div className="text-gray-400 text-sm text-center sm:text-left">
                  © 2024 Axoralutions – Alle Rechte vorbehalten
                </div>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/dreni-aliji-b827a7291/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/drenalj/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
