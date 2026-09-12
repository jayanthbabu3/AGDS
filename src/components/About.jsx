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
    <section id="about" className="py-20 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE — VISUAL (~45% Width) */}
          <div className="lg:col-span-5 order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-gray-100">
                <img
                  src={corporatePhotography.about.url}
                  alt="Anthropic Gen Digital Systems engineering and technology team collaborating in modern office"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover object-center transition-all duration-300 hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Subtle Minimal Caption */}
              <div className="mt-3 text-center lg:text-left text-xs font-medium text-[#5B6472] tracking-wide">
                <span>People &bull; Technology &bull; Possibility</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — CONTENT (~55% Width) */}
          <div className="lg:col-span-7 order-2 space-y-6">
            
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1D4ED8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
              <span>ABOUT US</span>
            </div>

            {/* Main Heading: 38-44px Desktop, 28-34px Mobile */}
            <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-semibold text-[#111827] leading-[1.22] tracking-tight">
              Technology Built Around Real Business Needs
            </h2>

            {/* Two Concise Descriptive Paragraphs */}
            <div className="space-y-3.5 text-[15px] sm:text-[16px] lg:text-[17px] text-[#5B6472] leading-[1.6]">
              <p>
                Anthropic Gen Digital Systems Pvt Ltd is a technology and digital solutions company focused on helping organizations build, modernize and manage dependable digital systems.
              </p>
              <p>
                We combine software engineering, cloud, data, artificial intelligence and modern digital technologies to create solutions that are practical, scalable and aligned with real business requirements.
              </p>
            </div>

            {/* 3 Key Principles - Compact, Non-Intrusive Grid */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {values.map((val) => (
                <div 
                  key={val.num}
                  className="border-l-2 border-gray-200 pl-3.5 space-y-1 hover:border-[#1D4ED8] transition-colors"
                >
                  <div className="flex items-center space-x-1.5">
                    <span className="font-mono text-xs font-semibold text-[#1D4ED8]">{val.num}</span>
                    <span className="text-gray-300">&mdash;</span>
                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#111827]">
                      {val.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#5B6472] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Subtle Divider & Closing Highlight Statement */}
            <div className="pt-4 border-t border-gray-200">
              <div className="border-l-2 border-[#1D4ED8] pl-4 py-1">
                <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] font-medium text-[#1F2937] leading-relaxed not-italic">
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
