import React from 'react';
import {
  Buildings,
  Hexagon,
  Heartbeat,
  CloudCheck,
  Stack,
  Sparkle,
  ChartLineUp,
  Database
} from '@phosphor-icons/react';

// Exact 8 Client brands from reference website
const CLIENTS = [
  { name: 'FinVox', slug: 'finvox', icon: Buildings, color: '#2563eb' },
  { name: 'Hyperscale', slug: 'hyperscale', icon: Hexagon, color: '#7c3aed' },
  { name: 'Nexus Health', slug: 'nexus-health', icon: Heartbeat, color: '#e11d48' },
  { name: 'Terra Cloud', slug: 'terra-cloud', icon: CloudCheck, color: '#059669' },
  { name: 'Datalink AI', slug: 'datalink-ai', icon: Stack, color: '#ea580c' },
  { name: 'Quantum Ventures', slug: 'quantum-ventures', icon: Sparkle, color: '#4f46e5' },
  { name: 'Vertex', slug: 'vertex', icon: ChartLineUp, color: '#0d9488' },
  { name: 'Omicron Data', slug: 'omicron-data', icon: Database, color: '#d97706' }
];

export default function TrustedBy() {
  // Duplicate array for seamless infinite looping
  const marqueeItems = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="w-full border-t border-line/70 pt-12 pb-6 md:pt-16 md:pb-8 bg-white">
      <div className="mx-auto w-full max-w-[1240px] xl:max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Header: Title on top, Narrative text directly below */}
        <div className="border-b border-line pb-6">
          <h2 className="display text-[clamp(1.75rem,2.8vw,2.3rem)] text-ink tracking-tight">
            Clients we've delivered for
          </h2>
          <p className="mt-2.5 max-w-2xl text-[14px] sm:text-[15px] leading-relaxed text-body">
            Founders and engineering leaders across fintech, health and B2B SaaS bring us the engagement they can't afford to get wrong.
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
          <div className="marquee-track flex w-max items-center gap-4 py-1 pr-4">
            {marqueeItems.map((client, idx) => (
              <div
                key={`${client.slug}-${idx}`}
                className="group relative flex h-24 w-44 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line bg-raised transition-transform duration-300 hover:-translate-y-0.5 shadow-sm"
                style={{ '--brand': client.color }}
              >
                {/* Brand Color Ambient Gradient */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.16]"
                  style={{
                    backgroundImage: 'linear-gradient(155deg, var(--brand) 0%, transparent 75%)'
                  }}
                />

                {/* Brand Icon & Name */}
                <div className="relative flex flex-col items-center gap-2">
                  <client.icon
                    weight="duotone"
                    className="size-6"
                    style={{ color: 'var(--brand)' }}
                  />
                  <span className="text-[1rem] font-bold tracking-[-0.01em] text-ink">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

