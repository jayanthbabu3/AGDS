import React from 'react';
import { 
  Code2, 
  Globe, 
  Building2, 
  CloudSun, 
  Smartphone, 
  Workflow, 
  RefreshCw, 
  Wrench, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { companyData } from '../data/companyInfo';
import { corporatePhotography } from '../data/photography';

export default function SoftwareDev({ onSelectService }) {
  const { softwareDevelopment } = companyData;

  const serviceIconMap = {
    'custom-software': Code2,
    'web-apps': Globe,
    'enterprise-apps': Building2,
    'saas-dev': CloudSun,
    'mobile-apps': Smartphone,
    'api-dev': Workflow,
    'modernization': RefreshCw,
    'maintenance': Wrench,
  };

  return (
    <section id="software-development" className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#0284c7] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]"></span>
              <span>SECTION 03 &bull; {softwareDevelopment.category.toUpperCase()}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              {softwareDevelopment.title}
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {softwareDevelopment.description}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="#contact"
              className="inline-flex items-center text-sm font-semibold text-[#0369a1] hover:text-[#0c4a6e] transition-colors"
            >
              <span>Consult with a software architect</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>

        {/* Featured Visual & Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Realistic Developer Photography Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-4">
              <div className="overflow-hidden rounded-xl bg-slate-200 border border-slate-300/80 shadow-sm">
                <img
                  src={corporatePhotography.softwareDev.url}
                  alt={corporatePhotography.softwareDev.alt}
                  className="w-full h-[360px] lg:h-[420px] object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-4 rounded-lg bg-white border border-slate-200 text-xs text-slate-600">
                <div className="font-semibold text-slate-800 mb-1">
                  Full-Lifecycle Engineering Governance
                </div>
                <p className="text-slate-500 leading-relaxed">
                  Engineers write idiomatic, statically-typed code following domain-driven design (DDD), comprehensive test coverage, and automated static code analysis.
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-mono text-slate-600">
                  <span className="px-2 py-0.5 bg-slate-100 rounded">TypeScript</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded">Go</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded">Java / Spring</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded">PostgreSQL</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded">Docker</span>
                </div>
              </div>
            </div>
          </div>

          {/* 8 Services Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {softwareDevelopment.services.map((service) => {
              const Icon = serviceIconMap[service.id] || Code2;
              return (
                <div
                  key={service.id}
                  onClick={() => onSelectService && onSelectService({ ...service, category: softwareDevelopment.title })}
                  className="p-5 rounded-lg bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded bg-[#f1f5f9] text-[#0f172a] flex items-center justify-center mb-3 group-hover:bg-[#0284c7]/10 group-hover:text-[#0284c7] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1.5 group-hover:text-[#0284c7] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-[#0284c7]">
                    <span>View deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
