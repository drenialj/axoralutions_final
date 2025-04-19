import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Chatbot from '@/components/chatbot/Chatbot';
import Footer from '@/components/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axoralutions - KI-Lösungen für Ihr Unternehmen",
  description: "Digitale Innovation aus Mannheim. Wir entwickeln KI-Lösungen für Unternehmen, die ihre Prozesse optimieren und digitalisieren möchten.",
  icons: [
    {
      rel: 'icon',
      url: '/logo.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/logo.png',
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17019452246"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17019452246');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-[#0c0c0d] text-white min-w-[320px] overflow-x-hidden`}>
        <Navbar />
        <Chatbot />
        <main className="min-h-screen pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
