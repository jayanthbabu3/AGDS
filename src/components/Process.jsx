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
    <section id="process" className="py-14 sm:py-16 lg:py-[64px] bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-9 lg:mb-10">
          <div className="inline-flex items-center space-x-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-[#1D4ED8] mb-2 sm:mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
            <span>DELIVERY LIFECYCLE &bull; HOW WE WORK</span>
          </div>
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#111827] leading-[1.2] tracking-tight">
            {process.heading}
          </h2>
          <p className="mt-2 text-[13.5px] sm:text-[14px] text-[#5B6472] leading-relaxed">
            {process.subheading}
          </p>
        </div>

        {/* Desktop Horizontal Process Timeline. The icon rail is now a pure
            connector — it used to carry its own stage badge (Discovery,
            Architecture...) sitting directly above the card's own title
            (Discover, Plan...), two different labels for the same step
            stacked on top of each other. The stage name now lives inside
            the card as its eyebrow, next to the step number, so there's one
            label per step instead of two that don't quite match. */}
        <div className="hidden lg:block relative mb-4">
          <div className="absolute top-5 left-10 right-10 h-0.5 bg-gray-200 -z-0"></div>

          <div className="grid grid-cols-5 gap-3.5 sm:gap-4 relative z-10">
            {process.steps.map((step, idx) => {
              const Icon = iconMap[step.id] || Compass;

              return (
                <div key={step.id} className="group flex flex-col">
                  {/* Connector Node */}
                  <div className="flex justify-center mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white border-2 border-gray-200 text-[#111827] flex items-center justify-center shadow-xs group-hover:border-[#1D4ED8] group-hover:bg-blue-50/60 group-hover:text-[#1D4ED8] group-hover:-translate-y-0.5 transition-all duration-200">
                      <Icon className="w-4.5 h-4.5 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Step Card */}
                  <div className="p-4 rounded-xl bg-white border border-gray-200 flex-1 flex flex-col justify-between group-hover:border-gray-300 group-hover:shadow-xs transition-all duration-200">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1D4ED8]">
                          {step.stage}
                        </span>
                        <span className="font-mono text-[10.5px] font-semibold text-[#1D4ED8] tracking-wider px-1.5 py-0.5 rounded bg-blue-50/60 border border-blue-100/80">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-[14.5px] sm:text-[15px] font-semibold text-[#111827] mb-1 group-hover:text-[#1D4ED8] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[11.5px] font-medium text-[#1D4ED8] mb-2">
                        {step.description}
                      </p>
                      <p className="text-[11.5px] sm:text-[12px] text-[#5B6472] leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center text-[10.5px] sm:text-[11px] font-medium text-gray-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
                      <span>{step.milestone}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative pl-6 border-l-2 border-gray-200 space-y-4 ml-3">
          {process.steps.map((step, idx) => {
            const Icon = iconMap[step.id] || Compass;

            return (
              <div key={step.id} className="relative">
                {/* Bullet with Icon */}
                <div className="absolute -left-[38px] top-0 w-8 h-8 rounded-lg bg-white border-2 border-gray-300 text-[#1D4ED8] flex items-center justify-center ring-4 ring-[#F8F9FA] shadow-xs">
                  <Icon className="w-3.5 h-3.5 stroke-[2]" />
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200">
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1D4ED8]">
                      {step.stage}
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-[#1D4ED8] tracking-wider px-1.5 py-0.5 rounded bg-blue-50 border border-blue-100">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-[14.5px] sm:text-[15px] font-semibold text-[#111827] mb-0.5">
                    {step.title}
                  </h3>
                  <p className="text-[11.5px] font-medium text-[#1D4ED8] mb-1.5">
                    {step.description}
                  </p>
                  <p className="text-[11.5px] sm:text-[12px] text-[#5B6472] leading-relaxed">
                    {step.details}
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center text-[10.5px] font-medium text-gray-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
                    <span>{step.milestone}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
