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

  // One accent color per service category, so the grid is scannable at a glance
  const accentMap = {
    'software-development': '#2563EB',
    'web-development': '#0EA5E9',
    'mobile-app-development': '#7C3AED',
    'artificial-intelligence': '#DB2777',
    'gen-ai-llm': '#9333EA',
    'cloud-devops': '#0D9488',
    'cybersecurity': '#DC2626',
    'data-analytics': '#D97706',
    'digital-transformation': '#4338CA',
    'uiux-product-design': '#E11D48',
    'it-consulting': '#059669',
    'system-integration': '#0891B2',
  };

  return (
    <section id="services" className="py-14 sm:py-16 lg:py-[64px] bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-9 lg:mb-10">
          <div className="inline-flex items-center space-x-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-[#1D4ED8] mb-2 sm:mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
            <span>{services.eyebrow}</span>
          </div>

          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#111827] leading-[1.2] tracking-tight">
            {services.heading}
          </h2>

          <p className="mt-2 text-[13.5px] sm:text-[14px] text-[#5B6472] leading-relaxed">
            {services.supportingText}
          </p>
        </div>

        {/* 12 Individual Service Cards in a Clean 4-Column Desktop Grid.
            Two columns from the smallest width up — twelve cards fully
            stacked (grid-cols-1) meant twelve screens of scrolling before
            reaching the next section. */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {services.items.map((item) => {
            const Icon = iconMap[item.id] || Code2;
            const accent = accentMap[item.id] || '#1D4ED8';

            return (
              <div
                key={item.id}
                onClick={() => onSelectService && onSelectService(item)}
                style={{ '--accent': accent }}
                className="group p-3 sm:p-4.5 rounded-xl bg-white border border-gray-200 hover:border-[color:var(--accent)]/30 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex flex-col justify-between cursor-pointer h-full"
              >
                <div>
                  {/* Top: Category-Colored Icon Chip */}
                  <div
                    className="w-7 h-7 sm:w-8.5 sm:h-8.5 rounded-lg flex items-center justify-center mb-2 sm:mb-3 transition-colors"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--accent) 12%, white)',
                      border: '1px solid color-mix(in srgb, var(--accent) 25%, white)',
                      color: 'var(--accent)'
                    }}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.75]" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-[12.5px] sm:text-[14px] font-semibold text-[#111827] mb-1 sm:mb-1.5 transition-colors leading-snug group-hover:text-[color:var(--accent)]">
                    {item.title}
                  </h3>

                  {/* Short 1-2 Line Description */}
                  <p className="text-[10.5px] sm:text-[12px] text-[#5B6472] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom: Learn More / Arrow */}
                <div className="mt-2.5 sm:mt-3.5 pt-2 sm:pt-2.5 border-t border-gray-100 flex items-center justify-between text-[10px] sm:text-[11.5px] font-medium text-[#111827] transition-colors group-hover:text-[color:var(--accent)]">
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
