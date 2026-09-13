import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111827] text-gray-400 border-t border-gray-800 text-xs">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        
        {/* Top Tier: Logo, Description & 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-gray-800">
          
          {/* Logo & Description: Span 2 cols */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="h-9 w-9 rounded-md bg-white p-1 flex items-center justify-center shrink-0">
                <img src="/logo.jpg" alt="AGDS Logo" className="h-full w-auto object-contain" />
              </div>
              <span className="text-[15px] font-semibold text-white tracking-tight">
                {companyData.legalName}
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-sm text-[11.5px] sm:text-xs">
              Providing enterprise digital engineering and technology consulting designed around real business requirements. Dependable architectures, verified code quality, and disciplined execution.
            </p>

            <div className="pt-0.5 flex items-center space-x-2 text-gray-400 text-[11px] sm:text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>ISO 27001:2022 & SOC 2 Audited Controls</span>
            </div>
          </div>

          {/* Col 1: Company */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-1.5 text-[11.5px] sm:text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#hero" className="hover:text-white transition-colors">Engineering Rigor</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Leadership</a></li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-1.5 text-[11.5px] sm:text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Software Engineering</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Artificial Intelligence</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cloud & DevOps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Data & Analytics</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Digital Transformation</a></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white">
              Industries
            </h4>
            <ul className="space-y-1.5 text-[11.5px] sm:text-xs">
              <li><a href="#industries" className="hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Banking & Finance</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Retail & Commerce</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Logistics & Supply</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Manufacturing</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <div className="space-y-1.5 text-gray-400 leading-relaxed text-[11.5px] sm:text-xs">
              <p>
                <strong className="text-gray-200">Bengaluru HQ:</strong><br />
                {companyData.headquarters.addressLine1}
              </p>
              <div className="pt-0.5">
                <a href={`tel:${companyData.headquarters.phone}`} className="block text-gray-300 hover:text-white">
                  {companyData.headquarters.phone}
                </a>
                <a href={`mailto:${companyData.headquarters.email}`} className="block text-[#38BDF8] hover:underline">
                  {companyData.headquarters.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Legal Links & Copyright */}
        <div className="pt-6 sm:pt-7 flex flex-col sm:flex-row items-center justify-between gap-3.5 text-[11px] text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} {companyData.legalName}. All rights reserved. CIN: {companyData.cin}.
          </div>

          <div className="flex items-center space-x-6">
            <a href="#contact" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Terms &amp; Conditions</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 ml-1" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
