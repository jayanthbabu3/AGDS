import React from 'react';
import { corporatePhotography } from '../data/photography';

export default function About() {
  const values = [
    {
      num: "01",
      title: "Innovation",
      desc: "Practical technology designed to solve real business challenges."
    },
    {
      num: "02",
      title: "Reliability",
      desc: "Dependable engineering focused on quality, security and long-term performance."
    },
    {
      num: "03",
      title: "Scalability",
      desc: "Solutions designed to grow alongside changing business requirements."
    }
  ];

  return (
    <section id="about" className="py-14 sm:py-16 lg:py-[64px] bg-white border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE — VISUAL (~45% Width) */}
          <div className="lg:col-span-5 order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-gray-100">
                <img
                  src={corporatePhotography.about.url}
                  alt="Anthropic Gen Digital Systems engineering and technology team collaborating in modern office"
                  className="w-full h-[280px] sm:h-[340px] lg:h-[380px] object-cover object-center transition-all duration-300 hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Subtle Minimal Caption */}
              <div className="mt-2.5 text-center lg:text-left text-[11px] sm:text-xs font-medium text-[#5B6472] tracking-wide">
                <span>People &bull; Technology &bull; Possibility</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — CONTENT (~55% Width) */}
          <div className="lg:col-span-7 order-2 space-y-4 sm:space-y-5">
            
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center space-x-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-[#1D4ED8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
              <span>ABOUT US</span>
            </div>

            {/* Main Heading: 38-44px Desktop, 28-34px Mobile */}
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#111827] leading-[1.2] tracking-tight">
              Technology Built Around Real Business Needs
            </h2>

            {/* Two Concise Descriptive Paragraphs */}
            <div className="space-y-2.5 text-[13.5px] sm:text-[14px] lg:text-[14.5px] text-[#5B6472] leading-relaxed">
              <p>
                Anthropic Gen Digital Systems Pvt Ltd is a technology and digital solutions company focused on helping organizations build, modernize and manage dependable digital systems.
              </p>
              <p>
                We combine software engineering, cloud, data, artificial intelligence and modern digital technologies to create solutions that are practical, scalable and aligned with real business requirements.
              </p>
            </div>

            {/* 3 Key Principles - Compact, Non-Intrusive Grid */}
            <div className="pt-1.5 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {values.map((val) => (
                <div 
                  key={val.num}
                  className="border-l-2 border-gray-200 pl-3 space-y-0.5 hover:border-[#1D4ED8] transition-colors"
                >
                  <div className="flex items-center space-x-1.5">
                    <span className="font-mono text-[11px] sm:text-xs font-semibold text-[#1D4ED8]">{val.num}</span>
                    <span className="text-gray-300">&mdash;</span>
                    <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#111827]">
                      {val.title}
                    </h3>
                  </div>
                  <p className="text-[12px] text-[#5B6472] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Subtle Divider & Closing Highlight Statement */}
            <div className="pt-3 border-t border-gray-200">
              <div className="border-l-2 border-[#1D4ED8] pl-3.5 py-0.5">
                <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] font-medium text-[#1F2937] leading-relaxed not-italic">
                  “We believe technology should simplify complexity, create measurable value and enable businesses to move forward with confidence.”
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
