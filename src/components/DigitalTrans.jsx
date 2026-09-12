import React from 'react';
import { 
  Compass, 
  Cpu, 
  RefreshCw, 
  FileText, 
  Workflow, 
  Network,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { companyData } from '../data/companyInfo';
import { corporatePhotography } from '../data/photography';

export default function DigitalTrans({ onSelectService }) {
  const { digitalTransformation } = companyData;

  const dtIconMap = {
    'digital-transformation': Compass,
    'business-automation': Cpu,
    'legacy-modernization': RefreshCw,
    'process-digitization': FileText,
    'enterprise-integration': Network,
    'workflow-optimization': Workflow,
  };

  return (
    <section id="digital-transformation" className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#0284c7] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]"></span>
            <span>SECTION 08 &bull; {digitalTransformation.category.toUpperCase()}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            {digitalTransformation.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {digitalTransformation.description}
          </p>
        </div>

        {/* Real Business Consultation Photo & 6 Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Real Meeting / Consulting Session (Left 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-4">
              <div className="overflow-hidden rounded-xl bg-slate-200 border border-slate-300 shadow-sm">
                <img
                  src={corporatePhotography.digitalTransformation.url}
                  alt={corporatePhotography.digitalTransformation.alt}
                  className="w-full h-[360px] lg:h-[420px] object-cover object-center"
                  loading="lazy"
                />
              </div>

              <div className="p-4 rounded-lg bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center justify-between font-semibold text-slate-800">
                  <span>Pragmatic Enterprise Modernization</span>
                  <span className="text-[11px] font-mono text-[#0284c7] font-bold">Consulting Framework</span>
                </div>
                <p className="text-slate-500 leading-relaxed">
                  We don't recommend rip-and-replace overhauls that risk business disruption. We utilize strangler-fig migration patterns to iteratively modernize legacy core services.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-slate-600">
                  <span className="px-2 py-0.5 bg-slate-100 rounded">Legacy Strangler Pattern</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded">BPMN 2.0</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded">Microservices</span>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Core Transformation Services (Right 7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {digitalTransformation.services.map((service) => {
              const Icon = dtIconMap[service.id] || Compass;
              return (
                <div
                  key={service.id}
                  onClick={() => onSelectService && onSelectService({ ...service, category: digitalTransformation.title })}
                  className="p-5 rounded-lg bg-white border border-slate-200/90 hover:border-slate-300 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded bg-[#f1f5f9] text-[#0f172a] flex items-center justify-center mb-3 group-hover:bg-[#0284c7]/10 group-hover:text-[#0284c7] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-[#0284c7] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-[#0284c7]">
                    <span>Strategic scope</span>
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
