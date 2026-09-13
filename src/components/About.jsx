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
    <section id="about" className="py-14 sm:py-16 lg:py-[60px] bg-white border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP: Two-Column Aligned Executive Block (Story & Uncropped Team Visual) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-6 sm:mb-7">
          
          {/* Left Column: Eyebrow, Heading & Introduction Copy */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center space-x-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-[#1D4ED8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
              <span>ABOUT US</span>
            </div>

            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#111827] leading-[1.2] tracking-tight">
              Technology Built Around Real Business Needs
            </h2>

            <div className="space-y-2 text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#5B6472] leading-relaxed">
              <p>
                Anthropic Gen Digital Systems Pvt Ltd is a technology and digital solutions company focused on helping organizations build, modernize and manage dependable digital systems.
              </p>
              <p>
                We combine software engineering, cloud, data, artificial intelligence and modern digital technologies to create solutions that are practical, scalable and aligned with real business requirements.
              </p>
            </div>
          </div>

          {/* Right Column: Corporate Team Photo with Proportional Framing */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[200px] sm:h-[220px] lg:h-[230px] rounded-xl overflow-hidden border border-gray-200/90 shadow-2xs bg-gray-100 group">
              <img
                src={corporatePhotography.about.url}
                alt="Anthropic Gen Digital Systems engineering and applied AI team collaborating in modern office"
                className="w-full h-full object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Subtle Overlay Label */}
              <div className="absolute bottom-2.5 left-3 inline-flex items-center px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[10.5px] sm:text-[11px] font-semibold text-[#111827] shadow-xs tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mr-1.5 shrink-0"></span>
                <span>Technology &bull; People &bull; Progress</span>
              </div>
            </div>
          </div>

        </div>

        {/* 5 COMPACT EQUAL-HEIGHT VALUES CARDS (1 Row on Desktop). Two columns
            from the smallest width up — five cards fully stacked (grid-cols-1)
            meant five screens of scrolling for a handful of one-liners, and
            the arrow footer was purely decorative, so it drops out below
            `sm` rather than eating a row of height in every single card. */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 items-stretch">
          {values.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.num}
                className="group p-3 sm:p-4 rounded-xl bg-white border border-gray-200/90 hover:border-blue-300/80 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top Meta: Minimal Icon & Small Blue Number */}
                  <div className="flex items-center justify-between mb-2 sm:mb-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-50/80 border border-blue-100 text-[#1D4ED8] flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.75]" />
                    </div>
                    <span className="font-mono text-[10px] sm:text-[12px] font-semibold text-[#1D4ED8] tracking-wider px-1.5 sm:px-2 py-0.5 rounded bg-blue-50/60 border border-blue-100/80">
                      {card.num}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[13px] sm:text-[14.5px] font-semibold text-[#111827] tracking-tight group-hover:text-[#1D4ED8] transition-colors leading-snug">
                    {card.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="mt-1.5 text-[11px] sm:text-[12px] text-[#5B6472] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Subtle Arrow Indicator Footer — sm and up only */}
                <div className="hidden sm:flex pt-2.5 mt-3 border-t border-gray-100 items-center justify-end">
                  <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-200/80 flex items-center justify-center text-gray-400 group-hover:text-[#1D4ED8] group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all duration-200">
                    <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SLIM UNDERSTATED BOTTOM STATEMENT (Full-Width Aligned Banner) */}
        <div className="mt-5 sm:mt-6 p-3.5 sm:p-4 rounded-xl bg-gray-50/80 border border-gray-200/80">
          <div className="border-l-2 border-[#1D4ED8] pl-3.5 sm:pl-4 py-0.5">
            <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] font-medium text-[#1F2937] leading-relaxed not-italic">
              “We believe technology should simplify complexity, create measurable value and enable businesses to move forward with confidence.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
