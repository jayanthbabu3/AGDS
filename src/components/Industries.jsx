import React from 'react';
import { ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyInfo';
import { corporatePhotography } from '../data/photography';

export default function Industries() {
  const { industries } = companyData;

  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
            <span>INDUSTRY SECTORS &bull; DOMAIN EXPERTISE</span>
          </div>
          <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-semibold text-[#111827] leading-[1.22] tracking-tight">
            {industries.heading}
          </h2>
          <p className="mt-2.5 text-[14px] sm:text-[15px] text-[#5B6472] leading-relaxed">
            Domain constraints require purpose-built software architectures. We combine technical rigor with deep regulatory and workflow awareness across twelve vital industries.
          </p>
        </div>

        {/* 12 Industry Grid with Subtle Real Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.items.map((ind) => {
            const photoUrl = corporatePhotography.industries[ind.id];

            return (
              <div
                key={ind.id}
                className="group rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Real Photography Vignette */}
                  <div className="relative h-36 w-full overflow-hidden bg-gray-100">
                    <img
                      src={photoUrl}
                      alt={`${ind.name} enterprise technology`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = corporatePhotography.industries.retail;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-base font-semibold tracking-tight text-white leading-tight">
                        {ind.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-4">
                    <p className="text-xs text-[#5B6472] leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-gray-100 mt-2">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-xs font-semibold text-[#111827] group-hover:text-[#1D4ED8] transition-colors"
                  >
                    <span>Domain solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
