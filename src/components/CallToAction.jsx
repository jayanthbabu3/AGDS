import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { companyData } from '../data/companyInfo';
import { corporatePhotography } from '../data/photography';

export default function CallToAction() {
  const { cta } = companyData;

  return (
    <section className="relative py-20 lg:py-24 bg-[#111827] text-white overflow-hidden">
      {/* Subtle realistic architectural backdrop with dark overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={corporatePhotography.cta.url}
          alt="Modern corporate technology architecture"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-blue-300">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DIRECT ARCHITECTURAL CONSULTATION</span>
          </div>

          <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-semibold text-white leading-[1.22] tracking-tight">
            {cta.heading}
          </h2>

          <p className="text-[14px] sm:text-[15px] text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {cta.supportingText}
          </p>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-[#111827] bg-white hover:bg-gray-100 rounded-md transition-colors shadow-sm"
            >
              <span>{cta.buttonText}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
