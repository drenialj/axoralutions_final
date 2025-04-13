'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Verhindere Scrollen wenn Mobile Menü offen ist
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Leistungen', 
      href: '/leistungen', 
      hasDropdown: true,
      dropdownItems: [
        { 
          name: 'KI-Beratung', 
          href: '/leistungen/ki-beratung', 
          description: 'Strategische Beratung für erfolgreiche KI-Implementierung' 
        },
        { 
          name: 'KI-Automatisierung', 
          href: '/leistungen/ki-automatisierung', 
          description: 'Intelligente Prozessautomatisierung mit KI' 
        },
        { 
          name: 'SaaS-Lösungen', 
          href: '/leistungen/saas-loesungen', 
          description: 'Skalierbare Cloud-Software mit KI-Integration' 
        },
        { 
          name: 'Individuelle KI-Lösungen', 
          href: '/leistungen/individuelle-ki', 
          description: 'Maßgeschneiderte KI-Entwicklung für Ihre Anforderungen' 
        }
      ]
    },
    { 
      name: 'Über uns', 
      href: '/ueber-uns', 
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Unternehmen',
          href: '/ueber-uns/unternehmen',
          description: 'Lernen Sie Axora Solutions kennen'
        },
        {
          name: 'Werte & Kultur',
          href: '/ueber-uns/werte-kultur',
          description: 'Unsere Grundwerte und Arbeitsweise'
        }
      ]
    },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || mobileMenuOpen ? 'bg-black/95 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <div className="relative w-12 h-12 md:w-16 md:h-16 mr-2 md:mr-3">
                <Image
                  src="/logo.png"
                  alt="xoralutions Logo"
                  fill
                  className="object-contain brightness-125"
                  priority
                />
              </div>
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent flex items-baseline">
                <span className="font-cursive text-3xl md:text-4xl mr-0">xora</span>
                <span className="font-cursive text-3xl md:text-4xl">l</span>
                <span className="text-xl md:text-2xl">utions</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center text-gray-300 hover:text-white text-base font-medium relative group"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </Link>

                {/* Desktop Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    <div className="bg-black/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl p-2 min-w-[240px]">
                      <div className="space-y-0.5">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block p-2 rounded-lg hover:bg-white/5 transition-all duration-200 group/item"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="text-gray-200 text-sm font-medium group-hover/item:text-violet-400 transition-colors">
                              {dropdownItem.name}
                            </div>
                            <div className="text-gray-500 text-xs mt-0.5 group-hover/item:text-gray-400 transition-colors">
                              {dropdownItem.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/kontakt"
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-200"
            >
              Termin vereinbaren
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-black/95 backdrop-blur-lg overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-6">
              {navigation.map((item) => (
                <div key={item.name} className="space-y-3">
                  <div 
                    className="flex items-center justify-between"
                    onClick={() => item.hasDropdown && setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white text-lg font-medium"
                      onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 space-y-4"
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block py-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="text-white text-base font-medium">
                              {dropdownItem.name}
                            </div>
                            <div className="text-gray-400 text-sm mt-1">
                              {dropdownItem.description}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/kontakt"
                  className="block w-full text-center px-6 py-3 rounded-lg text-base font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Termin vereinbaren
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 