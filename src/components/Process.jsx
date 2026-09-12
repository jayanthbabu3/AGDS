import React from 'react';
import { 
  Compass, 
  Layers, 
  Code2, 
  Rocket, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';
import { companyData } from '../data/companyInfo';

export default function Process() {
  const { process } = companyData;

  const iconMap = {
    discover: Compass,
    plan: Layers,
    build: Code2,
    deploy: Rocket,
    scale: TrendingUp,
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
            <span>DELIVERY LIFECYCLE &bull; HOW WE WORK</span>
          </div>
          <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-semibold text-[#111827] leading-[1.22] tracking-tight">
            {process.heading}
          </h2>
          <p className="mt-2.5 text-[14px] sm:text-[15px] text-[#5B6472] leading-relaxed">
            {process.subheading}
          </p>
        </div>

        {/* Desktop Horizontal Process Timeline (Icons + Stage Badges, No Numbers) */}
        <div className="hidden lg:block relative mb-6">
          {/* Subtle Connecting Bar */}
          <div className="absolute top-6 left-12 right-12 h-0.5 bg-gray-200 -z-0"></div>

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {process.steps.map((step) => {
              const Icon = iconMap[step.id] || Compass;

              return (
                <div key={step.id} className="group flex flex-col">
                  {/* Step Stage & Icon Node */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border-2 border-gray-200 text-[#111827] flex items-center justify-center shadow-xs group-hover:border-[#1D4ED8] group-hover:bg-blue-50/60 group-hover:text-[#1D4ED8] group-hover:-translate-y-0.5 transition-all duration-200">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="inline-block mt-2.5 px-2.5 py-0.5 rounded-full bg-blue-50/80 border border-blue-100 text-[11px] font-semibold uppercase tracking-wider text-[#1D4ED8]">
                      {step.stage}
                    </span>
                  </div>

                  {/* Step Card */}
                  <div className="p-5 rounded-xl bg-white border border-gray-200 flex-1 flex flex-col justify-between group-hover:border-gray-300 group-hover:shadow-sm transition-all duration-200">
                    <div>
                      <h3 className="text-base font-semibold text-[#111827] mb-1.5 group-hover:text-[#1D4ED8] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs font-medium text-[#1D4ED8] mb-2.5">
                        {step.description}
                      </p>
                      <p className="text-xs text-[#5B6472] leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-[11px] font-medium text-gray-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
                      <span>Milestone Verified</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (Icons instead of Numbers) */}
        <div className="lg:hidden relative pl-6 border-l-2 border-gray-200 space-y-6 ml-3">
          {process.steps.map((step) => {
            const Icon = iconMap[step.id] || Compass;

            return (
              <div key={step.id} className="relative">
                {/* Bullet with Icon */}
                <div className="absolute -left-[38px] top-0 w-9 h-9 rounded-lg bg-white border-2 border-gray-300 text-[#1D4ED8] flex items-center justify-center ring-4 ring-[#F8F9FA] shadow-xs">
                  <Icon className="w-4 h-4 stroke-[2]" />
                </div>

                <div className="p-5 rounded-xl bg-white border border-gray-200">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-0.5 rounded-md bg-blue-50 text-[10px] font-semibold uppercase tracking-wider text-[#1D4ED8]">
                      {step.stage}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#111827] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium text-[#1D4ED8] mb-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-[#5B6472] leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
