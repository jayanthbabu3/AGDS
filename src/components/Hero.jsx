import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowDownLeft,
  ArrowUpRight,
  Cpu,
  RocketLaunch,
  Briefcase,
  CloudArrowUp,
  UsersFour,
  ChatsCircle
} from '@phosphor-icons/react';

// Balanced orbit radius so node cards remain cleanly within boundaries
const ORBIT_RADIUS = 38;
function getOrbitPos(deg, radius) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return {
    x: 50 + radius * Math.cos(rad),
    y: 50 + radius * Math.sin(rad)
  };
}

// 6 Orbital nodes around AGDS core. `short` is what mobile cards show —
// only "Product Development" needed a shorter form; the rest already fit.
const ORBITAL_NODES = [
  { icon: Cpu, title: 'AI Services', short: 'AI Services', sub: 'Build with intelligence' },
  { icon: RocketLaunch, title: 'Product Development', short: 'Product Dev', sub: 'Scalable digital products' },
  { icon: Briefcase, title: 'Freelancing', short: 'Freelancing', sub: 'On-demand expertise' },
  { icon: CloudArrowUp, title: 'Cloud & DevOps', short: 'Cloud & DevOps', sub: 'Build. Deploy. Scale.' },
  { icon: UsersFour, title: 'Dedicated Teams', short: 'Dedicated Teams', sub: 'Your extended engineering team' },
  { icon: ChatsCircle, title: 'Consulting', short: 'Consulting', sub: 'From idea to impact' }
].map((item, idx) => ({
  ...item,
  ...getOrbitPos(idx * 60, ORBIT_RADIUS)
}));

// Dot positions on the orbit ring
const ORBIT_DOTS = ORBITAL_NODES.map((_, idx) => getOrbitPos(30 + idx * 60, ORBIT_RADIUS));

// Floating background decorative cells
const FLOAT_CELLS = [
  { top: '12%', left: '4%', size: 12, tone: 'bg-accent/25' },
  { top: '24%', left: '9%', size: 8, tone: 'bg-ink/10' },
  { top: '58%', left: '3%', size: 11, tone: 'bg-accent/20' },
  { top: '76%', left: '10%', size: 14, tone: 'bg-accent/15' },
  { top: '10%', left: '46%', size: 9, tone: 'bg-ink/8' },
  { top: '82%', left: '40%', size: 12, tone: 'bg-accent/20' }
];

// Stats counter component
function StatCounter({ value, suffix, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const inc = value / totalSteps;

    const timer = setInterval(() => {
      start += inc;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="text-[1.65rem] sm:text-[1.9rem] lg:text-[2.1rem] leading-none font-semibold text-ink tabular-nums tracking-tight">
        <span>{count}</span>
        <span className="text-accent">{suffix}</span>
      </dd>
      <p className="mt-1.5 text-[11px] sm:text-xs leading-snug text-muted font-normal">{label}</p>
    </div>
  );
}

// Orbital interactive visual graphic - neatly fitted and proportionally scaled
function OrbitalGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[21rem] sm:max-w-[25rem] lg:max-w-[27rem] xl:max-w-[30rem] py-1">
      {/* Hand Annotation - Top Right */}
      <p className="hand absolute -top-1 right-0 hidden -rotate-6 text-[1.15rem] sm:text-[1.25rem] xl:text-[1.35rem] leading-[1.05] text-accent md:block select-none pointer-events-none">
        Ideas engineered<br />for what's next
        <ArrowDownLeft weight="bold" className="mt-0.5 ml-auto size-4 sm:size-4.5 text-accent/70" />
      </p>

      {/* Hand Annotation - Bottom Left */}
      <p className="hand absolute -bottom-2 -left-1 hidden rotate-3 text-[1.15rem] sm:text-[1.25rem] xl:text-[1.35rem] leading-[1.05] text-accent md:block select-none pointer-events-none">
        <ArrowUpRight weight="bold" className="mb-0.5 size-4 sm:size-4.5 text-accent/70" />
        People<br />Process<br />Possibility
      </p>

      {/* SVG Orbit Ring & Pulsing Dots */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full pointer-events-none" aria-hidden="true">
        <circle
          cx="50"
          cy="50"
          r={ORBIT_RADIUS}
          fill="none"
          stroke="var(--color-accent)"
          strokeOpacity="0.25"
          strokeWidth="0.5"
          strokeDasharray="2.2 3"
        />
        {ORBIT_DOTS.map((dot, idx) => (
          <circle
            key={idx}
            className="orbit-dot"
            cx={dot.x}
            cy={dot.y}
            r="1.1"
            fill="var(--color-accent)"
            style={{
              transformOrigin: `${dot.x}px ${dot.y}px`,
              animationDelay: `${idx * 0.4}s`
            }}
          />
        ))}
      </svg>

      {/* Radial soft accent backdrop glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(closest-side, color-mix(in oklab, var(--color-accent) 14%, transparent), transparent)'
        }}
      />

      {/* Center Core Badge: AGDS */}
      <div className="absolute top-1/2 left-1/2 flex size-[44%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-full border border-line bg-raised text-center shadow-xs select-none">
        <img src="/agds-mark.png" alt="AGDS" className="size-9 sm:size-11 object-contain" />
        <div>
          <p className="display text-[1rem] sm:text-[1.18rem] leading-none text-ink font-semibold">
            AGDS
          </p>
          <p className="label mt-1 hidden text-[0.58rem] leading-tight text-muted sm:block">
            Software Engineering<br />& Applied AI
          </p>
        </div>
      </div>

      {/* 6 Drifting Orbital Node Cards. Below `sm` there isn't room for a
          two-line title plus a wrapped subtitle without cards colliding, so
          the subtitle drops out and the card itself shrinks; sm and up keep
          the full label. */}
      {ORBITAL_NODES.map((node, idx) => (
        <div
          key={node.title}
          className="group absolute w-[6.2rem] sm:w-[8.8rem] lg:w-[8.6rem] xl:w-[9.6rem]"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div
            className="node-float flex flex-col items-center text-center"
            style={{ animationDelay: `${idx * 0.6}s` }}
          >
            <span
              className="z-10 grid size-8 sm:size-10 shrink-0 place-items-center rounded-full border border-line text-accent transition-colors duration-300 group-hover:border-accent/50 shadow-xs"
              style={{
                backgroundImage: 'linear-gradient(160deg, color-mix(in oklab, var(--color-accent) 16%, white) 0%, color-mix(in oklab, var(--color-accent) 6%, white) 100%)'
              }}
            >
              <node.icon weight="duotone" className="size-3.5 sm:size-4.5" />
            </span>
            <div className="card -mt-2 sm:-mt-2.5 w-full pt-3 pb-2 sm:pt-4 sm:pb-2.5 px-1 shadow-xs">
              <p className="text-[0.66rem] sm:text-[0.78rem] xl:text-[0.82rem] leading-tight font-semibold text-ink">
                <span className="sm:hidden">{node.short}</span>
                <span className="hidden sm:inline">{node.title}</span>
              </p>
              <p className="hidden sm:block mt-0.5 px-1 text-[0.66rem] xl:text-[0.7rem] leading-tight text-muted">
                {node.sub}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const stats = [
    { value: 100, suffix: '+', label: 'Projects delivered' },
    { value: 95, suffix: '%', label: 'Client retention' },
    { value: 40, suffix: '+', label: 'Senior engineers' }
  ];

  return (
    <header className="hero-field relative flex items-center overflow-hidden py-8 sm:py-10 lg:py-12 xl:py-14 min-h-[calc(100vh-5rem)]">
      {/* Background Mesh Grid */}
      <div aria-hidden="true" className="hero-mesh absolute inset-0 pointer-events-none" />

      {/* Floating Ambient Cells */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        {FLOAT_CELLS.map((cell, idx) => (
          <span
            key={idx}
            className={`float-cell ${cell.tone}`}
            style={{
              top: cell.top,
              left: cell.left,
              width: `${cell.size}px`,
              height: `${cell.size}px`,
              animationDelay: `${idx * 0.9}s`
            }}
          />
        ))}
      </div>

      {/* Subtle Noise Texture Overlay */}
      <div aria-hidden="true" className="grain absolute inset-0 pointer-events-none" />

      {/* Main Responsive Grid Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 xl:col-span-6 max-w-xl">
            {/* Eyebrow */}
            <p className="label inline-flex items-center gap-2 text-accent text-[11px] sm:text-xs">
              <span className="inline-block h-px w-6 bg-accent/60" />
              Taking new engagements for 2026
            </p>

            {/* Controlled Heading */}
            <h1 className="display mt-3 sm:mt-4 text-[26px] sm:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.12] text-ink text-balance tracking-tight">
              We build software<br className="hidden sm:inline" /> that moves you forward.
            </h1>

            {/* Subtext */}
            <p className="mt-3.5 sm:mt-4 max-w-[44ch] text-[13.5px] sm:text-[15px] lg:text-[15.5px] leading-relaxed text-body">
              From strategy and architecture to applied AI, product design and dedicated engineering squads — one senior team, from first sketch to production.
            </p>

            {/* CTA Action Buttons */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 ease-out active:scale-[0.98] px-6 py-3 sm:px-6.5 sm:py-3.5 text-xs sm:text-sm bg-accent text-white hover:bg-accent-dim shadow-[0_10px_25px_-10px_color-mix(in_oklab,var(--color-accent)_60%,transparent)]"
              >
                <span>Start a project</span>
                <ArrowRight weight="bold" className="size-3.5 sm:size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 ease-out active:scale-[0.98] px-6 py-3 sm:px-6.5 sm:py-3.5 text-xs sm:text-sm border border-line bg-raised text-ink hover:border-accent hover:text-accent"
              >
                <span>Explore services</span>
                <ArrowRight weight="bold" className="size-3.5 sm:size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Stats Bar */}
            <dl className="mt-7 sm:mt-8 pt-5 sm:pt-6 border-t border-line grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </dl>
          </div>

          {/* Right Column: Orbital Interactive Graphic */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <OrbitalGraphic />
          </div>

        </div>
      </div>
    </header>
  );
}


