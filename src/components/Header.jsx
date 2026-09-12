import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyInfo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-xs border-b border-gray-200' 
        : 'bg-white border-b border-gray-200/80'
    }`}>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <img
              src="/logo.jpg"
              alt="Anthropic Gen Digital Systems Logo"
              className="h-11 w-auto object-contain mix-blend-multiply"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#111827] leading-tight group-hover:text-[#1D4ED8] transition-colors">
                Anthropic Gen Digital Systems
              </span>
              <span className="text-[11px] font-medium tracking-wider text-[#5B6472] uppercase">
                Pvt Ltd &bull; Digital Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {companyData.header.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#111827] hover:text-[#1D4ED8] hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-[#111827] hover:bg-[#1F2937] rounded-md transition-colors shadow-xs"
            >
              <span>{companyData.header.ctaText}</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <div className="py-2 border-b border-gray-100 space-y-1">
            {companyData.header.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-[#111827] rounded-md"
            >
              <span>{companyData.header.ctaText}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
