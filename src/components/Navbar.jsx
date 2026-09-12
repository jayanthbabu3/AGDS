import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Shield, Terminal, Cpu, Cloud, Database, Layers, Palette, PhoneCall } from 'lucide-react';
import { companyData } from '../data/companyInfo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceNavItems = [
    { name: 'Software Development', href: '#software-development', desc: 'Custom, web, mobile & enterprise apps', icon: Terminal },
    { name: 'Artificial Intelligence', href: '#artificial-intelligence', desc: 'Grounded ML, RAG & enterprise automation', icon: Cpu },
    { name: 'Cloud & DevOps', href: '#cloud-devops', desc: 'AWS, Azure, GCP & automated CI/CD', icon: Cloud },
    { name: 'Cybersecurity', href: '#cybersecurity', desc: 'Application, network & SOC compliance', icon: Shield },
    { name: 'Data & Analytics', href: '#data-analytics', desc: 'ETL pipelines, BI & predictive systems', icon: Database },
    { name: 'Digital Transformation', href: '#digital-transformation', desc: 'Legacy modernization & business workflows', icon: Layers },
    { name: 'UI/UX & Product Design', href: '#uiux-design', desc: 'Human-centered interfaces & design systems', icon: Palette },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90' 
        : 'bg-white border-b border-slate-200/70'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded bg-[#0f172a] text-white flex items-center justify-center font-bold tracking-tight text-base shadow-sm border border-slate-700/50 group-hover:bg-[#1e293b] transition-colors">
              <span className="text-white font-semibold">AG</span>
              <span className="text-[#38bdf8] text-xs font-bold">DS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] font-bold tracking-tight text-slate-900 leading-tight">
                Anthropic Gen Digital Systems
              </span>
              <span className="text-[11px] font-medium tracking-wider text-slate-500 uppercase">
                Pvt Ltd &bull; Enterprise Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <a 
              href="#about" 
              className="px-3 py-2 text-[14px] font-medium text-slate-700 hover:text-[#0369a1] hover:bg-slate-50 rounded-md transition-colors"
            >
              About Us
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                className="flex items-center space-x-1 px-3 py-2 text-[14px] font-medium text-slate-700 hover:text-[#0369a1] hover:bg-slate-50 rounded-md transition-colors"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-80 bg-white border border-slate-200 rounded-lg shadow-xl py-2 z-50">
                  <div className="px-3 py-1.5 border-b border-slate-100 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                    Practice Areas
                  </div>
                  {serviceNavItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-start px-3 py-2.5 hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-1.5 rounded bg-slate-100 text-slate-600 group-hover:bg-[#0284c7]/10 group-hover:text-[#0284c7] transition-colors mt-0.5 mr-3">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-800 group-hover:text-[#0284c7] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <a 
              href="#industries" 
              className="px-3 py-2 text-[14px] font-medium text-slate-700 hover:text-[#0369a1] hover:bg-slate-50 rounded-md transition-colors"
            >
              Industries
            </a>
            <a 
              href="#process" 
              className="px-3 py-2 text-[14px] font-medium text-slate-700 hover:text-[#0369a1] hover:bg-slate-50 rounded-md transition-colors"
            >
              Our Process
            </a>
            <a 
              href="#why-us" 
              className="px-3 py-2 text-[14px] font-medium text-slate-700 hover:text-[#0369a1] hover:bg-slate-50 rounded-md transition-colors"
            >
              Why AGDS
            </a>
            <a 
              href="#contact" 
              className="px-3 py-2 text-[14px] font-medium text-slate-700 hover:text-[#0369a1] hover:bg-slate-50 rounded-md transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-[#0f172a] hover:bg-[#1e293b] rounded-md transition-all shadow-sm focus:ring-2 focus:ring-slate-400 focus:outline-none"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <div className="py-2 border-b border-slate-100">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded"
            >
              About Us
            </a>
            <div className="px-3 py-2 font-semibold text-xs text-slate-400 uppercase tracking-wider">
              Engineering Services
            </div>
            <div className="pl-3 space-y-1">
              {serviceNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-sm text-slate-600 hover:text-[#0284c7]"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a 
              href="#industries" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded mt-2"
            >
              Industries
            </a>
            <a 
              href="#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded"
            >
              Our Process
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded"
            >
              Why AGDS
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded"
            >
              Contact
            </a>
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-[#0f172a] rounded-md"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              <span>Talk to Our Team</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
