import React from 'react';
import { companyData } from '../data/companyInfo';

export default function TechExpertise() {
  const { techExpertise } = companyData;

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
            <span>TECHNOLOGY EXPERTISE &bull; ECOSYSTEM</span>
          </div>
          <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-semibold text-[#111827] leading-[1.22] tracking-tight">
            {techExpertise.heading}
          </h2>
          <p className="mt-2.5 text-[14px] sm:text-[15px] text-[#5B6472] leading-relaxed">
            {techExpertise.subheading}
          </p>
        </div>

        {/* 8 Categories Grid with Clean Text Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techExpertise.categories.map((cat) => (
            <div
              key={cat.name}
              className="p-5 rounded-xl bg-[#F8F9FA] border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-[#111827]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
