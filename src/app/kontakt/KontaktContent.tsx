'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Building2, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';
import { sendContactEmail } from '../actions/contact';
import { track_form_submission } from '@/utils/analytics';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'E-Mail',
    content: 'dreni.aliji@axoralutions.de',
    href: 'mailto:dreni.aliji@axoralutions.de'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Telefon',
    content: '+49 176 42624008',
    href: 'tel:+4917642624008'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Standort',
    content: 'Mannheim, Deutschland',
    href: 'https://maps.google.com'
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Unternehmen',
    content: 'Axoralutions',
    href: '#'
  }
];

export function KontaktContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const result = await sendContactEmail(formData);

      if (result.error) {
        setStatus({
          type: 'error',
          message: result.error
        });
      } else {
        setStatus({
          type: 'success',
          message: 'Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.'
        });
        // Formular zurücksetzen
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
        // Conversion-Tracking auslösen
        track_form_submission();
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 font-medium mb-4 uppercase tracking-wider text-sm"
          >
            Kontakt
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-semibold mb-6 text-white leading-tight"
          >
            Lassen Sie uns ins Gespräch kommen
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Wir freuen uns darauf, mehr über Ihr Projekt zu erfahren und gemeinsam innovative KI-Lösungen zu entwickeln.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Form */}
            <div className="p-6 bg-[#111] rounded-2xl">
              <h2 className="text-xl font-semibold text-white mb-6">Kontaktformular</h2>
              
              {/* Status Message */}
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg mb-6 flex items-center gap-2 ${
                    status.type === 'success' ? 'bg-green-950/50 text-green-400' : 'bg-red-950/50 text-red-400'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="text-sm">{status.message}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="Ihr Name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="ihre@email.de"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="Ihr Unternehmen"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="Ihre Nachricht"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-xl hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 bg-[#111] rounded-2xl">
                <h2 className="text-xl font-semibold text-white mb-6">Kontaktinformationen</h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.href}
                      className="flex items-center gap-4 text-gray-400 hover:text-gray-300 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-white">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-medium text-white">{info.title}</div>
                        <div className="text-sm">{info.content}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#111] rounded-2xl">
                <h2 className="text-xl font-semibold text-white mb-6">Terminvereinbarung</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Vereinbaren Sie ein kostenloses Erstgespräch, um Ihre Anforderungen zu besprechen 
                  und gemeinsam die beste KI-Lösung für Ihr Unternehmen zu finden.
                </p>
                <a
                  href="#"
                  className="inline-block w-full px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-xl hover:bg-blue-600 transition-colors duration-300 text-center"
                >
                  Termin vereinbaren
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 