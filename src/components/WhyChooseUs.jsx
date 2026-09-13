import React from 'react';
import { 
  Target, 
  Layers, 
  ShieldCheck, 
  Code2, 
  Handshake 
} from 'lucide-react';
import { corporatePhotography } from '../data/photography';

export default function WhyChooseUs() {
  const benefits = [
    {
      num: '01',
      title: 'Business-Focused Approach',
      desc: 'Engineering decisions anchored directly in measurable business ROI, operational efficiency, and commercial outcomes.',
      icon: Target
    },
    {
      num: '02',
      title: 'Scalable Technology',
      desc: 'Architectures engineered to handle exponential workload growth, multi-tenant resilience, and seamless cloud scale.',
      icon: Layers
    },
    {
      num: '03',
      title: 'Reliable Delivery',
      desc: 'Disciplined sprint cadence, transparent milestone governance, zero-downtime deployments, and audited SLAs.',
      icon: ShieldCheck
    },
    {
      num: '04',
      title: 'Modern Technology Expertise',
      desc: 'Deep engineering depth across applied AI, cloud-native microservices, secure data pipelines, and modern web platforms.',
      icon: Code2
    },
    {
      num: '05',
      title: 'Long-Term Partnership',
      desc: 'Continuous support, proactive telemetry monitoring, and architectural evolution long after initial production deployment.',
      icon: Handshake
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-[1240px] xl:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: Large Realistic Corporate Photograph (~45% width) */}
          <div className="lg:col-span-5 order-1">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm bg-gray-100 group">
              <img
                src={corporatePhotography.whyUs.url}
                alt="Anthropic Gen Digital Systems executive engineering consulting team collaborating in modern office"
                className="w-full h-[380px] sm:h-[460px] lg:h-[540px] xl:h-[560px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />

              {/* Minimal Bottom Caption Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-900/85 via-gray-900/40 to-transparent p-4 sm:p-5 pt-10 text-white">
                <p className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-wider text-blue-300">
                  Executive Technology Advisory
                </p>
                <p className="text-xs sm:text-[13px] text-gray-200 mt-0.5 font-medium leading-snug">
                  Bengaluru Delivery Center &bull; High-performance sprint architecture
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Executive Header & 5 Compact Benefit Rows (~55% width) */}
          <div className="lg:col-span-7 order-2 flex flex-col justify-center">
            
            {/* Header Content */}
            <div className="space-y-2.5">
              <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1D4ED8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
                <span>WHY CHOOSE US</span>
              </div>

              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] xl:text-[38px] font-semibold text-[#111827] leading-[1.18] tracking-tight">
                Technology Solutions Built to Deliver Lasting Value
              </h2>

              <p className="text-[14px] sm:text-[15px] text-[#5B6472] leading-relaxed max-w-xl">
                We combine technical rigor, cloud-native architecture, and disciplined engineering execution to help enterprises build dependable digital systems that stand the test of time.
              </p>
            </div>

            {/* 5 Compact Horizontal Benefit Rows with Subtle Dividers */}
            <div className="divide-y divide-gray-200/80 border-y border-gray-200/80 mt-6 sm:mt-7">
              {benefits.map((item) => {
                const IconComponent = item.icon;

                return (
                  <div
                    key={item.num}
                    className="group py-3.5 sm:py-4 px-2 sm:px-3 -mx-2 sm:-mx-3 rounded-lg hover:bg-[#F9FAFB] transition-colors duration-150 flex items-start gap-3.5 sm:gap-4 cursor-default"
                  >
                    {/* Minimal Outline Icon */}
                    <div className="w-8 h-8 rounded-md bg-white border border-gray-200/90 flex items-center justify-center shrink-0 mt-0.5 text-[#5B6472] group-hover:text-[#1D4ED8] group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-colors duration-150 shadow-2xs">
                      <IconComponent className="w-4 h-4 stroke-[1.75] transition-transform duration-150 group-hover:translate-x-0.5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline space-x-2">
                        <span className="font-mono text-xs font-semibold text-[#1D4ED8] tracking-wide">
                          {item.num}
                        </span>
                        <span className="text-gray-300 text-xs">&mdash;</span>
                        <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#111827] tracking-tight group-hover:text-[#1D4ED8] transition-colors leading-snug">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[13px] sm:text-[13.5px] text-[#5B6472] leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

