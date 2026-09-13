import React from 'react';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Cpu, 
  Sparkles, 
  Cloud, 
  ShieldCheck, 
  BarChart3, 
  Workflow, 
  Palette, 
  Briefcase, 
  Network, 
  ArrowRight 
} from 'lucide-react';
import { companyData } from '../data/companyInfo';

export default function ServicesGrid({ onSelectService }) {
  const { services } = companyData;

  const iconMap = {
    'software-development': Code2,
    'web-development': Globe,
    'mobile-app-development': Smartphone,
    'artificial-intelligence': Cpu,
    'gen-ai-llm': Sparkles,
    'cloud-devops': Cloud,
    'cybersecurity': ShieldCheck,
    'data-analytics': BarChart3,
    'digital-transformation': Workflow,
    'uiux-product-design': Palette,
    'it-consulting': Briefcase,
    'system-integration': Network,
  };

  return (
    <section id="services" className="py-14 sm:py-16 lg:py-[64px] bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Centered Introduction */}
        <div className="max-w-[720px] mx-auto text-center mb-8 sm:mb-9 lg:mb-10 space-y-2.5">
          <div className="inline-flex items-center space-x-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-[#1D4ED8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
            <span>{services.eyebrow}</span>
          </div>

          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#111827] leading-[1.2] tracking-tight">
            {services.heading}
          </h2>

          <p className="text-[13.5px] sm:text-[14px] lg:text-[14.5px] text-[#5B6472] leading-relaxed">
            {services.supportingText}
          </p>
        </div>

        {/* 12 Individual Service Cards in a Clean 4-Column Desktop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {services.items.map((item) => {
            const Icon = iconMap[item.id] || Code2;

            return (
              <div
                key={item.id}
                onClick={() => onSelectService && onSelectService(item)}
                className="group p-4 sm:p-4.5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex flex-col justify-between cursor-pointer h-full"
              >
                <div>
                  {/* Top: Minimal Outline Icon */}
                  <div className="w-8.5 h-8.5 rounded-lg bg-[#F8F9FA] border border-gray-200/80 text-gray-700 flex items-center justify-center mb-3 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-[#1D4ED8] transition-colors">
                    <Icon className="w-4 h-4 stroke-[1.75]" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-[13.5px] sm:text-[14px] font-semibold text-[#111827] mb-1.5 group-hover:text-[#1D4ED8] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Short 1-2 Line Description */}
                  <p className="text-[11.5px] sm:text-[12px] text-[#5B6472] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom: Learn More / Arrow */}
                <div className="mt-3.5 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] sm:text-[11.5px] font-medium text-[#111827] group-hover:text-[#1D4ED8] transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
