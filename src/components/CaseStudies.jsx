import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyInfo';
import { corporatePhotography } from '../data/photography';

export default function CaseStudies() {
  const { caseStudies } = companyData;

  const imageMap = {
    'healthcare-portal': corporatePhotography.caseStudies.healthcare,
    'fintech-reconciliation': corporatePhotography.caseStudies.fintech,
    'logistics-telemetry': corporatePhotography.caseStudies.logistics,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
            <span>CASE STUDIES &bull; ENGINEERING IMPLEMENTATIONS</span>
          </div>
          <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-semibold text-[#111827] leading-[1.22] tracking-tight">
            {caseStudies.heading}
          </h2>
          <p className="mt-2.5 text-[14px] sm:text-[15px] text-[#5B6472] leading-relaxed">
            {caseStudies.subheading}
          </p>
        </div>

        {/* 3 Premium Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.items.map((study) => {
            const imgUrl = imageMap[study.id] || corporatePhotography.hero.url;

            return (
              <div
                key={study.id}
                className="rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Real Photography Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <img
                      src={imgUrl}
                      alt={study.title}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#111827]/80 backdrop-blur-xs text-white px-2.5 py-1 rounded text-[11px] font-medium uppercase tracking-wider">
                      {study.industry} &bull; Architecture Spec
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#111827] leading-snug">
                      {study.title}
                    </h3>

                    {/* Problem Statement */}
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                        Challenge
                      </span>
                      <p className="text-xs text-[#5B6472] leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    {/* Engineering Solution */}
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                        Engineering Solution
                      </span>
                      <p className="text-xs text-[#5B6472] leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">
                        Technology Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {study.technology.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-[#F8F9FA] border border-gray-200 rounded text-[11px] font-medium text-[#111827]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Result Section in Footer of Card */}
                <div className="p-6 pt-0">
                  <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-900 leading-relaxed">
                    <strong className="block font-semibold text-emerald-950 mb-0.5">Verified Result:</strong>
                    {study.result}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 text-center text-xs text-gray-400">
          Representative architectural case studies based on standard enterprise delivery models.
        </div>

      </div>
    </section>
  );
}
