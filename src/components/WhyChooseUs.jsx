import React from 'react';
import { 
  Target, 
  Layers, 
  ShieldCheck, 
  Code2, 
  Handshake, 
  CheckCircle2 
} from 'lucide-react';
import { companyData } from '../data/companyInfo';
import { corporatePhotography } from '../data/photography';

export default function WhyChooseUs() {
  const { whyChooseUs } = companyData;

  const iconMap = {
    'business-focused': Target,
    'scalable-technology': Layers,
    'reliable-delivery': ShieldCheck,
    'modern-expertise': Code2,
    'long-term-partnership': Handshake,
  };

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 lg:py-22 bg-white border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header: Clean Centered Introduction with Proportional Typography */}
        <div className="max-w-[720px] mx-auto text-center mb-10 lg:mb-12 space-y-2.5">
          <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1D4ED8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
            <span>{whyChooseUs.eyebrow}</span>
          </div>

          <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-semibold text-[#111827] leading-[1.22] tracking-tight">
            {whyChooseUs.heading}
          </h2>

          <p className="text-[14px] sm:text-[15px] text-[#5B6472] leading-relaxed max-w-[680px] mx-auto">
            {whyChooseUs.supportingText}
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT SIDE — Professional Realistic Corporate Image with Controlled Height */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative h-full min-h-[360px] sm:min-h-[400px] lg:min-h-[440px] max-h-[480px] rounded-2xl overflow-hidden border border-gray-200/90 shadow-xs bg-gray-100 group">
              <img
                src={corporatePhotography.whyUs.url}
                alt="Technology engineering and consulting team collaborating around workstations in a modern office"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = corporatePhotography.about.url;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-blue-200 font-semibold mb-0.5">
                  Cross-Functional Team
                </p>
                <p className="text-xs sm:text-[13px] font-medium text-white/95 leading-snug">
                  Bengaluru Delivery Center — Collaborative architecture & sprint execution
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — 5 Clean Benefit Blocks (Refined Heights & Spacing) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5 sm:space-y-3">
            {whyChooseUs.benefits.map((benefit) => {
              const Icon = iconMap[benefit.id] || Target;

              return (
                <div
                  key={benefit.id}
                  className="group p-3.5 sm:p-4 rounded-xl border border-gray-100/90 hover:border-gray-200 bg-[#FBFBFB] hover:bg-white hover:shadow-xs transition-all duration-200 flex items-start gap-3.5"
                >
                  {/* Small minimal outline icon */}
                  <div className="w-9 h-9 rounded-lg bg-white border border-gray-200/80 text-gray-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-[#1D4ED8] transition-colors">
                    <Icon className="w-4.5 h-4.5 stroke-[1.75]" />
                  </div>

                  {/* Benefit Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#111827] mb-0.5 group-hover:text-[#1D4ED8] transition-colors leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-[13px] sm:text-[13.5px] text-[#5B6472] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Subtle Trust Indicator at the Bottom */}
            <div className="pt-3 mt-1 border-t border-gray-100 flex items-center space-x-2 text-[12px] sm:text-[13px] font-medium text-[#4B5563]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0"></span>
              <span>{whyChooseUs.trustStatement}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
