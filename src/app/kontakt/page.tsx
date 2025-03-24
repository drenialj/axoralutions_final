'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Building2, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Hier kommt die Logik für das Senden des Formulars
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'E-Mail',
      content: 'dreni.alj@gmail.com',
      href: 'mailto:dreni.alj@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefon',
      content: '+49 17642624008',
      href: 'tel:+4917642624008'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adresse',
      content: 'Spinnereistraße 10, 68307 Mannheim',
      href: 'https://maps.google.com'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Verfügbarkeit',
      content: 'Mo-Fr: 9:00 - 18:00 Uhr',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent"
          >
            Kontaktieren Sie uns
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Lassen Sie uns gemeinsam Ihre KI-Projekte verwirklichen
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6">Senden Sie uns eine Nachricht</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Ihr Name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        E-Mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="ihre@email.de"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Unternehmen
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Ihr Unternehmen"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Nachricht
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Ihre Nachricht"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
                    >
                      Nachricht senden
                      <Send className="w-4 h-4 ml-2" />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="relative p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold">Kontaktinformationen</h2>
                  </div>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-start gap-4 group"
                      >
                        <div className="p-2 rounded-lg bg-white/5 text-purple-400 group-hover:text-purple-300 transition-colors">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-white group-hover:text-purple-300 transition-colors">
                            {info.title}
                          </h3>
                          <p className="text-gray-400">{info.content}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map or Additional Info */}
              <div className="relative p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">Besuchen Sie uns</h3>
                  <div className="aspect-video bg-white/5 rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.827456789012!2d8.471944!3d49.478889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c9c4f73a5fd1%3A0x377d295e2542362!2sSpinnereistra%C3%9Fe%2010%2C%2068307%20Mannheim!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="mt-4 text-sm text-gray-400">
                    <p>Spinnereistraße 10</p>
                    <p>68307 Mannheim</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 