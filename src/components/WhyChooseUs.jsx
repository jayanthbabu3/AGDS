import React from 'react';
import { 
  Target, 
  Layers, 
  ShieldCheck, 
  Code2, 
  Handshake,
  ArrowUpRight
} from 'lucide-react';
import { corporatePhotography } from '../data/photography';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 lg:py-[68px] bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-[1240px] xl:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-9 lg:mb-10">
          <div className="inline-flex items-center space-x-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-[#1D4ED8] mb-2.5 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
            <span>WHY CHOOSE US</span>
          </div>
          <h2 className="text-[28px] sm:text-[32px] lg:text-[35px] xl:text-[36px] font-semibold text-[#111827] leading-[1.18] tracking-tight">
            Technology Solutions Built to Deliver Lasting Value
          </h2>
          <p className="mt-3 sm:mt-3.5 text-[14px] sm:text-[14.5px] lg:text-[15px] text-[#5B6472] leading-relaxed max-w-2xl mx-auto">
            We combine practical technology expertise, business understanding, and reliable delivery to build solutions aligned with real business goals.
          </p>
        </div>

        {/* ASYMMETRIC BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
          
          {/* LARGE FEATURE CARD: 01 — Business-Focused Approach (Spans 5 cols on lg) */}
          <div className="md:col-span-2 lg:col-span-5 bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-5 lg:p-5 shadow-2xs hover:border-blue-300/80 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group">
            <div>
              {/* Proportional Corporate Image inside the feature card */}
              <div className="relative w-full h-36 sm:h-40 lg:h-38 rounded-xl overflow-hidden mb-3.5 sm:mb-4 border border-gray-100 bg-gray-100">
                <img
                  src={corporatePhotography.whyUs.url}
                  alt="Anthropic Gen Digital Systems engineering leadership team"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-white/95 backdrop-blur-xs text-[10.5px] sm:text-[11px] font-semibold text-[#111827] shadow-xs">
                  Strategic Advisory &bull; Bengaluru Center
                </span>
              </div>

              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-100 text-[#1D4ED8] flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 stroke-[1.75]" />
                </div>
                <span className="font-mono text-[11px] sm:text-[12px] font-semibold text-[#1D4ED8] tracking-wider px-2 py-0.5 rounded bg-blue-50/60 border border-blue-100/80">
                  01
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#111827] tracking-tight group-hover:text-[#1D4ED8] transition-colors leading-snug">
                Business-Focused Approach
              </h3>
              <p className="mt-1.5 text-[13px] sm:text-[13.5px] text-[#5B6472] leading-relaxed">
                We engineer digital solutions anchored directly in measurable business ROI, operational efficiency, and commercial outcomes rather than technology for its own sake.
              </p>
            </div>

            {/* Bottom Footer with Indicator */}
            <div className="pt-3 sm:pt-3.5 mt-3 sm:mt-3.5 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-[12px] font-medium text-[#5B6472]">
              <span className="group-hover:text-[#111827] transition-colors">Outcome-Driven Architecture</span>
              <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-200/80 flex items-center justify-center text-gray-400 group-hover:text-[#1D4ED8] group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all duration-200">
                <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* RIGHT 4 MEDIUM CARDS: 2x2 Bento Subgrid (Spans 7 cols on lg) */}
          <div className="md:col-span-2 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            
            {/* 02 — Scalable Technology */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-5 lg:p-5 shadow-2xs hover:border-blue-300/80 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50/80 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <span className="font-mono text-[11px] sm:text-[12px] font-semibold text-emerald-600 tracking-wider px-2 py-0.5 rounded bg-emerald-50/60 border border-emerald-100/80">
                    02
                  </span>
                </div>
                <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#111827] tracking-tight group-hover:text-[#1D4ED8] transition-colors leading-snug">
                  Scalable Technology
                </h3>
                <p className="mt-1.5 text-[13px] sm:text-[13.5px] text-[#5B6472] leading-relaxed">
                  Modern modular architectures engineered for exponential traffic growth, multi-tenant resilience, and seamless cloud elasticity.
                </p>
              </div>

              <div className="pt-3 sm:pt-3.5 mt-3 sm:mt-3.5 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-[12px] font-medium text-[#5B6472]">
                <span className="group-hover:text-[#111827] transition-colors">Elastic Infrastructure</span>
                <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-200/80 flex items-center justify-center text-gray-400 group-hover:text-[#1D4ED8] group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all duration-200">
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>

            {/* 03 — Reliable Delivery */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-5 lg:p-5 shadow-2xs hover:border-blue-300/80 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50/80 border border-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <span className="font-mono text-[11px] sm:text-[12px] font-semibold text-amber-600 tracking-wider px-2 py-0.5 rounded bg-amber-50/60 border border-amber-100/80">
                    03
                  </span>
                </div>
                <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#111827] tracking-tight group-hover:text-[#1D4ED8] transition-colors leading-snug">
                  Reliable Delivery
                </h3>
                <p className="mt-1.5 text-[13px] sm:text-[13.5px] text-[#5B6472] leading-relaxed">
                  Disciplined sprint cadences, predictable milestone timelines, zero-downtime deployments, and audited enterprise SLAs.
                </p>
              </div>

              <div className="pt-3 sm:pt-3.5 mt-3 sm:mt-3.5 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-[12px] font-medium text-[#5B6472]">
                <span className="group-hover:text-[#111827] transition-colors">Audited SLAs</span>
                <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-200/80 flex items-center justify-center text-gray-400 group-hover:text-[#1D4ED8] group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all duration-200">
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>

            {/* 04 — Modern Technology Expertise */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-5 lg:p-5 shadow-2xs hover:border-blue-300/80 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50/80 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <Code2 className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <span className="font-mono text-[11px] sm:text-[12px] font-semibold text-purple-600 tracking-wider px-2 py-0.5 rounded bg-purple-50/60 border border-purple-100/80">
                    04
                  </span>
                </div>
                <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#111827] tracking-tight group-hover:text-[#1D4ED8] transition-colors leading-snug">
                  Modern Technology Expertise
                </h3>
                <p className="mt-1.5 text-[13px] sm:text-[13.5px] text-[#5B6472] leading-relaxed">
                  Specialized depth across applied AI, multi-cloud platforms, distributed backend systems, and modern web applications.
                </p>
              </div>

              <div className="pt-3 sm:pt-3.5 mt-3 sm:mt-3.5 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-[12px] font-medium text-[#5B6472]">
                <span className="group-hover:text-[#111827] transition-colors">Applied AI & Cloud</span>
                <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-200/80 flex items-center justify-center text-gray-400 group-hover:text-[#1D4ED8] group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all duration-200">
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>

            {/* 05 — Long-Term Partnership */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-5 lg:p-5 shadow-2xs hover:border-blue-300/80 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50/80 border border-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Handshake className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <span className="font-mono text-[11px] sm:text-[12px] font-semibold text-sky-600 tracking-wider px-2 py-0.5 rounded bg-sky-50/60 border border-sky-100/80">
                    05
                  </span>
                </div>
                <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#111827] tracking-tight group-hover:text-[#1D4ED8] transition-colors leading-snug">
                  Long-Term Partnership
                </h3>
                <p className="mt-1.5 text-[13px] sm:text-[13.5px] text-[#5B6472] leading-relaxed">
                  Continuous engineering support, telemetry monitoring, and architectural guidance to support long-term business evolution.
                </p>
              </div>

              <div className="pt-3 sm:pt-3.5 mt-3 sm:mt-3.5 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-[12px] font-medium text-[#5B6472]">
                <span className="group-hover:text-[#111827] transition-colors">Continuous Evolution</span>
                <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-200/80 flex items-center justify-center text-gray-400 group-hover:text-[#1D4ED8] group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all duration-200">
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

