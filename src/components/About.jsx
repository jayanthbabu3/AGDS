import React from 'react';
import { 
  Lightbulb, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Handshake, 
  ArrowUpRight 
} from 'lucide-react';
import { corporatePhotography } from '../data/photography';

export default function About() {
  const values = [
    {
      num: "01",
      title: "Innovation",
      desc: "Practical technology designed to solve real business challenges.",
      icon: Lightbulb
    },
    {
      num: "02",
      title: "Reliability",
      desc: "Dependable engineering focused on quality, security and performance.",
      icon: ShieldCheck
    },
    {
      num: "03",
      title: "Scalability",
      desc: "Solutions designed to grow alongside changing business requirements.",
      icon: Layers
    },
    {
      num: "04",
      title: "Modern Technology",
      desc: "Work with modern web, cloud, data, AI and software technologies.",
      icon: Cpu
    },
    {
      num: "05",
      title: "Long-Term Partnership",
      desc: "Build lasting partnerships through continuous support and guidance.",
      icon: Handshake
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-18 lg:py-20 bg-white border-b border-gray-200">
      <div className="max-w-[1240px] xl:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP: Section Eyebrow, Heading, and Descriptive Paragraphs */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-1.5 text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-[#1D4ED8] mb-2.5 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
            <span>ABOUT US</span>
          </div>

          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] xl:text-[38px] font-semibold text-[#111827] leading-[1.2] tracking-tight mb-3.5">
            Technology Built Around Real Business Needs
          </h2>

          <div className="space-y-2.5 text-[14px] sm:text-[14.5px] lg:text-[15px] text-[#5B6472] leading-relaxed max-w-2xl mx-auto">
            <p>
              Anthropic Gen Digital Systems Pvt Ltd is a technology and digital solutions company focused on helping organizations build, modernize and manage dependable digital systems.
            </p>
            <p>
              We combine software engineering, cloud, data, artificial intelligence and modern digital technologies to create solutions that are practical, scalable and aligned with real business requirements.
            </p>
          </div>
        </div>

        {/* WIDE CORPORATE IMAGE BANNER */}
        <div className="relative w-full h-56 sm:h-64 lg:h-72 xl:h-80 rounded-xl overflow-hidden border border-gray-200/90 shadow-2xs mb-8 sm:mb-10 group bg-gray-100">
          <img
            src={corporatePhotography.about.url}
            alt="Anthropic Gen Digital Systems engineering and applied AI team collaborating in modern office"
            className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-[1.01]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
          
          {/* Subtle Overlay Label */}
          <div className="absolute bottom-3.5 left-4 sm:bottom-4 sm:left-5 inline-flex items-center px-3 py-1.5 rounded-md bg-white/95 backdrop-blur-xs text-[11.5px] sm:text-xs font-semibold text-[#111827] shadow-xs tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mr-2 shrink-0"></span>
            <span>Technology &bull; People &bull; Progress</span>
          </div>
        </div>

        {/* 5 COMPACT EQUAL-HEIGHT VALUES CARDS (1 Row on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 items-stretch">
          {values.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.num}
                className="group p-4 sm:p-4.5 rounded-xl bg-white border border-gray-200/90 hover:border-blue-300/80 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top Meta: Minimal Icon & Small Blue Number */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-100 text-[#1D4ED8] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 stroke-[1.75]" />
                    </div>
                    <span className="font-mono text-[11px] sm:text-[12px] font-semibold text-[#1D4ED8] tracking-wider px-2 py-0.5 rounded bg-blue-50/60 border border-blue-100/80">
                      {card.num}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[15px] sm:text-[15.5px] font-semibold text-[#111827] tracking-tight group-hover:text-[#1D4ED8] transition-colors leading-snug">
                    {card.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="mt-1.5 text-[12.5px] sm:text-[13px] text-[#5B6472] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Subtle Arrow Indicator Footer */}
                <div className="pt-3 mt-3.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-medium text-gray-400">
                  <span className="group-hover:text-[#111827] transition-colors">Core Value</span>
                  <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-200/80 flex items-center justify-center text-gray-400 group-hover:text-[#1D4ED8] group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all duration-200">
                    <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT WITH VERTICAL ACCENT LINE */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-gray-100 flex justify-center">
          <div className="border-l-2 border-[#1D4ED8] pl-4 sm:pl-5 py-0.5 max-w-3xl">
            <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-medium text-[#1F2937] leading-relaxed not-italic">
              “We believe technology should simplify complexity, create measurable value and enable businesses to move forward with confidence.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
