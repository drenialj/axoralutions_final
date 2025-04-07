'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

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
          description: 'Strategische Beratung für KI-Implementierungen' 
        },
        { 
          name: 'Custom AI Solutions', 
          href: '/leistungen/custom-ai', 
          description: 'Maßgeschneiderte KI-Lösungen' 
        },
        { 
          name: 'Prozessautomatisierung', 
          href: '/leistungen/automatisierung', 
          description: 'Intelligente Automatisierung mit KI' 
        },
        { 
          name: 'SaaS & IT-Entwicklung', 
          href: '/leistungen/saas-entwicklung', 
          description: 'Cloud-basierte Softwarelösungen' 
        }
      ]
    },
    { 
      name: 'Company', 
      href: '/company', 
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Über uns',
          href: '/company/ueber-uns',
          description: 'Lernen Sie Axoralutions kennen'
        },
        {
          name: 'Werte & Kultur',
          href: '/company/werte-kultur',
          description: 'Unsere Grundwerte und Arbeitsweise'
        }
      ]
    },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/50 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-16 h-16 mr-3">
                <Image
                  src="/logo.png"
                  alt="Axoralutions Logo"
                  width={64}
                  height={64}
                  className="object-contain brightness-125"
                  priority
                />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent flex items-baseline">
                <span className="font-cursive text-4xl mr-0">xora</span>
                <span className="font-cursive text-4xl">l</span>
                <span className="text-2xl">utions</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
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

                {/* Dropdown Panel */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="bg-black/95 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl p-2 min-w-[240px]">
                      <div className="space-y-0.5">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block p-2 rounded-lg hover:bg-white/5 transition-all duration-200 group/item"
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

          {/* CTA Button */}
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
            className="md:hidden p-2 text-gray-300 hover:text-white"
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
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg">
          <div className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <div key={item.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white text-sm font-medium"
                    onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className="p-1"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  )}
                </div>
                
                {/* Mobile Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="pl-4 space-y-3 pt-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="text-white text-sm font-medium">
                          {dropdownItem.name}
                        </div>
                        <div className="text-gray-400 text-xs mt-0.5">
                          {dropdownItem.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/kontakt"
              className="block w-full text-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Termin vereinbaren
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 