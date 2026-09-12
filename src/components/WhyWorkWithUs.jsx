import React from 'react';
import { 
  Target, 
  ShieldCheck, 
  Cpu, 
  Maximize2, 
  Lock, 
  MessageSquare, 
  LifeBuoy, 
  Lightbulb, 
  CheckCircle2,
  Building
} from 'lucide-react';
import { companyData } from '../data/companyInfo';
import { corporatePhotography } from '../data/photography';

export default function WhyWorkWithUs() {
  const { whyWorkWithUs } = companyData;

  const valueIcons = [
    Target,         // Business-focused solutions
    ShieldCheck,    // Reliable engineering
    Cpu,            // Modern technology
    Maximize2,      // Scalable architecture
    Lock,           // Security-conscious development
    MessageSquare,  // Transparent communication
    LifeBuoy,       // Long-term support
    Lightbulb       // Practical innovation
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#0284c7] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]"></span>
            <span>SECTION 12 &bull; VALUE PROPOSITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Why Enterprise Organizations Choose AGDS
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We operate with the agility of specialized engineering squads and the governance of an enterprise technology firm. Our commitments are grounded strictly in verifiable engineering standards and transparent client partnerships.
          </p>
        </div>

        {/* Large Realistic Corporate Photography Showcase */}
        <div className="mb-14 overflow-hidden rounded-xl bg-slate-200 border border-slate-300 shadow-sm relative">
          <img
            src={corporatePhotography.whyUs.url}
            alt={corporatePhotography.whyUs.alt}
            className="w-full h-[320px] sm:h-[400px] object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-1">
                Collaborative Integrity
              </span>
              <p className="text-base sm:text-lg font-medium leading-relaxed">
                “Reliable technology is built by accountable people who understand both the code and the business outcome it serves.”
              </p>
            </div>
          </div>
        </div>

        {/* 8 Core Differentiators Grid (Strictly NO fake stats, NO fake awards, NO fake logos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyWorkWithUs.map((item, idx) => {
            const Icon = valueIcons[idx] || CheckCircle2;
            return (
              <div 
                key={item.title}
                className="p-5 rounded-lg bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded bg-[#f1f5f9] text-[#0f172a] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-[#0284c7]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-medium text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7] mr-1.5 shrink-0" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Rigor Baseline */}
        <div className="mt-12 p-6 rounded-xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-xs text-slate-600">
            <div className="font-bold text-slate-900 text-sm">
              Our Contractual Delivery Integrity
            </div>
            <p className="text-slate-500">
              Every client engagement is supported by master services agreements (MSA), explicit intellectual property (IP) assignment clauses, bilateral non-disclosure agreements (NDA), and transparent sprint burn-down metrics.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0f172a] hover:bg-[#1e293b] rounded-md transition-colors shrink-0"
          >
            Request Engagement Terms
          </a>
        </div>

      </div>
    </section>
  );
}
