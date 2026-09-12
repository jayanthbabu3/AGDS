import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  Eye, 
  FileCheck2, 
  Server, 
  Network, 
  SearchAlert,
  AlertCircle
} from 'lucide-react';
import { companyData } from '../data/companyInfo';
import { corporatePhotography } from '../data/photography';

export default function Cybersecurity({ onSelectService }) {
  const { cybersecurity } = companyData;

  const cyberIconMap = {
    'app-sec': Lock,
    'cloud-sec': ShieldCheck,
    'network-sec': Network,
    'vuln-assessment': SearchAlert,
    'iam': KeyRound,
    'data-protection': Server,
    'security-monitoring': Eye,
    'compliance-support': FileCheck2,
  };

  return (
    <section id="cybersecurity" className="py-20 lg:py-28 bg-[#0b1329] text-white border-b border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#38bdf8] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
            <span>SECTION 06 &bull; {cybersecurity.category.toUpperCase()}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {cybersecurity.title}
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            {cybersecurity.description}
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* 8 Cybersecurity Services (Left 7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
            {cybersecurity.services.map((service) => {
              const Icon = cyberIconMap[service.id] || ShieldCheck;
              return (
                <div
                  key={service.id}
                  onClick={() => onSelectService && onSelectService({ ...service, category: cybersecurity.title })}
                  className="p-5 rounded-lg bg-[#111c38] border border-[#1e293b] hover:border-[#38bdf8]/40 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded bg-[#1e293b] text-[#38bdf8] flex items-center justify-center mb-3 group-hover:bg-[#38bdf8]/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-[#38bdf8] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#1e293b] flex items-center justify-between text-xs text-slate-500 group-hover:text-[#38bdf8]">
                    <span>Security protocol</span>
                    <span className="text-xs font-mono">&rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Real SOC Monitoring Photography (Right 5 Cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="sticky top-28 space-y-4">
              <div className="overflow-hidden rounded-xl bg-[#111c38] border border-[#1e293b] shadow-md">
                <img
                  src={corporatePhotography.cybersecurity.url}
                  alt={corporatePhotography.cybersecurity.alt}
                  className="w-full h-[360px] lg:h-[420px] object-cover object-center brightness-95 contrast-105"
                  loading="lazy"
                />
              </div>

              {/* Real Governance & Compliance Callout */}
              <div className="p-4 rounded-lg bg-[#111c38] border border-[#1e293b] text-xs text-slate-300 space-y-2">
                <div className="flex items-center space-x-2 font-semibold text-white">
                  <FileCheck2 className="w-4 h-4 text-emerald-400" />
                  <span>Enterprise Compliance Readiness</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Every software build and cloud topology complies with ISO/IEC 27001:2022 standards and SOC 2 Trust Services Criteria. We implement automated drift detection and regular static code vulnerability scans.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-slate-300">
                  <span className="px-2 py-0.5 bg-[#1e293b] rounded">SOC 2 Type II</span>
                  <span className="px-2 py-0.5 bg-[#1e293b] rounded">ISO 27001</span>
                  <span className="px-2 py-0.5 bg-[#1e293b] rounded">GDPR / DPDPA</span>
                  <span className="px-2 py-0.5 bg-[#1e293b] rounded">OWASP Top 10</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
