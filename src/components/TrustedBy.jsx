import React from 'react';
import { SiAccenture, SiInfosys, SiTcs, SiWipro, SiHcl, SiSap } from 'react-icons/si';

// Placeholder brand logos for local/demo purposes only — swap for real client
// logos (with authorization) before this site goes live.
const CLIENTS = [
  { name: 'Accenture', slug: 'accenture', icon: SiAccenture, color: '#A100FF' },
  { name: 'Infosys', slug: 'infosys', icon: SiInfosys, color: '#007CC3' },
  { name: 'TCS', slug: 'tcs', icon: SiTcs, color: '#EE3984' },
  { name: 'Wipro', slug: 'wipro', icon: SiWipro, color: '#341C53' },
  { name: 'HCLTech', slug: 'hcltech', icon: SiHcl, color: '#006BB6' },
  { name: 'SAP', slug: 'sap', icon: SiSap, color: '#0FAAFF' }
];

export default function TrustedBy() {
  // Duplicate array for seamless infinite looping
  const marqueeItems = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="w-full border-t border-line/70 pt-12 pb-6 md:pt-16 md:pb-8 bg-white">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl border-b border-line pb-6">
          <div className="inline-flex items-center space-x-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-[#1D4ED8] mb-2 sm:mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
            <span>OUR PARTNERS</span>
          </div>
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-ink leading-[1.2] tracking-tight">
            Clients we've delivered for
          </h2>
          <p className="mt-2 text-[13.5px] sm:text-[14px] text-body leading-relaxed">
            The engagements engineering leaders can't afford to get wrong.
          </p>
        </div>

        {/* Infinite Marquee Track */}
        <div
          className="marquee mt-10 w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)'
          }}
        >
          <div className="marquee-track flex w-max items-center gap-5 py-2 pr-5">
            {marqueeItems.map((client, idx) => (
              <div
                key={`${client.slug}-${idx}`}
                className="group relative flex h-28 w-48 shrink-0 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-line bg-raised transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-lg"
                style={{ '--brand': client.color }}
              >
                {/* Brand Color Ambient Gradient — reveals on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.14]"
                  style={{
                    backgroundImage: 'linear-gradient(155deg, var(--brand) 0%, transparent 70%)'
                  }}
                />

                {/* Brand Logo & Name */}
                <client.icon
                  size={34}
                  aria-hidden="true"
                  className="relative transition-transform duration-300"
                  style={{ color: 'var(--brand)' }}
                />
                <span className="relative text-[0.95rem] font-semibold tracking-[-0.01em] text-body transition-colors duration-300 group-hover:text-ink">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

