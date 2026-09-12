import React from 'react';
import { 
  Sparkles, 
  Binary, 
  Cpu, 
  Bot, 
  FileText, 
  Eye, 
  TrendingUp, 
  Cog, 
  Network, 
  BookOpenCheck,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { companyData } from '../data/companyInfo';
import { corporatePhotography } from '../data/photography';

export default function ArtificialInt({ onSelectService }) {
  const { artificialIntelligence } = companyData;

  const aiIconMap = {
    'gen-ai': Sparkles,
    'machine-learning': Binary,
    'ai-applications': Cpu,
    'ai-assistants': Bot,
    'nlp': FileText,
    'computer-vision': Eye,
    'predictive-analytics': TrendingUp,
    'ai-automation': Cog,
    'ai-agents': Network,
    'rag-solutions': BookOpenCheck,
  };

  return (
    <section id="artificial-intelligence" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#0284c7] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]"></span>
            <span>SECTION 04 &bull; {artificialIntelligence.category.toUpperCase()}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            {artificialIntelligence.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {artificialIntelligence.description}
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* 10 Services List (Left 7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
            {artificialIntelligence.services.map((service) => {
              const Icon = aiIconMap[service.id] || Cpu;
              return (
                <div
                  key={service.id}
                  onClick={() => onSelectService && onSelectService({ ...service, category: artificialIntelligence.title })}
                  className="p-5 rounded-lg bg-[#f8fafc] border border-slate-200/90 hover:border-slate-300 hover:bg-white transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded bg-white border border-slate-200 text-[#0f172a] flex items-center justify-center mb-3 group-hover:border-[#0284c7]/40 group-hover:text-[#0284c7] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-[#0284c7] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-[#0284c7]">
                    <span>Capabilities</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Real Data Science & Workspace Photography (Right 5 Cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="sticky top-28 space-y-4">
              <div className="overflow-hidden rounded-xl bg-slate-100 border border-slate-200 shadow-sm">
                <img
                  src={corporatePhotography.artificialIntelligence.url}
                  alt={corporatePhotography.artificialIntelligence.alt}
                  className="w-full h-[360px] lg:h-[420px] object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Responsible Enterprise AI Note */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center space-x-1.5 font-semibold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Enterprise Data Privacy & Non-Disclosure</span>
                </div>
                <p className="text-slate-500 leading-relaxed">
                  We deploy LLMs and models in dedicated tenant virtual private clouds (VPC). Customer training and inference data is never retained or utilized for foundation model training by third-party providers.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-slate-600">
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">Private VPC LLM</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">LangChain / LlamaIndex</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">Milvus / pgvector</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
