import React from 'react';
import {
  Layout,
  Server,
  Smartphone,
  Database,
  Cloud,
  Cpu,
  GitBranch,
  ShieldCheck,
  Layers,
  Code2
} from 'lucide-react';
import { companyData } from '../data/companyInfo';

// Category metadata: icons and theme colors
const CATEGORY_META = {
  'Frontend': {
    icon: Layout,
    iconBg: 'bg-blue-50 border-blue-200 text-blue-600',
    hoverBorder: 'hover:border-blue-300',
    tagBg: 'hover:bg-blue-50/70 hover:border-blue-200'
  },
  'Backend': {
    icon: Server,
    iconBg: 'bg-emerald-50 border-emerald-200 text-emerald-600',
    hoverBorder: 'hover:border-emerald-300',
    tagBg: 'hover:bg-emerald-50/70 hover:border-emerald-200'
  },
  'Mobile': {
    icon: Smartphone,
    iconBg: 'bg-purple-50 border-purple-200 text-purple-600',
    hoverBorder: 'hover:border-purple-300',
    tagBg: 'hover:bg-purple-50/70 hover:border-purple-200'
  },
  'Databases': {
    icon: Database,
    iconBg: 'bg-amber-50 border-amber-200 text-amber-600',
    hoverBorder: 'hover:border-amber-300',
    tagBg: 'hover:bg-amber-50/70 hover:border-amber-200'
  },
  'Cloud': {
    icon: Cloud,
    iconBg: 'bg-sky-50 border-sky-200 text-sky-600',
    hoverBorder: 'hover:border-sky-300',
    tagBg: 'hover:bg-sky-50/70 hover:border-sky-200'
  },
  'AI & Machine Learning': {
    icon: Cpu,
    iconBg: 'bg-indigo-50 border-indigo-200 text-indigo-600',
    hoverBorder: 'hover:border-indigo-300',
    tagBg: 'hover:bg-indigo-50/70 hover:border-indigo-200'
  },
  'DevOps': {
    icon: GitBranch,
    iconBg: 'bg-orange-50 border-orange-200 text-orange-600',
    hoverBorder: 'hover:border-orange-300',
    tagBg: 'hover:bg-orange-50/70 hover:border-orange-200'
  },
  'Security': {
    icon: ShieldCheck,
    iconBg: 'bg-teal-50 border-teal-200 text-teal-600',
    hoverBorder: 'hover:border-teal-300',
    tagBg: 'hover:bg-teal-50/70 hover:border-teal-200'
  }
};

// Technology Logo SVGs
function TechIcon({ name }) {
  const n = name.toLowerCase();

  // React / React Native
  if (n.includes('react')) {
    return (
      <svg viewBox="-11.5 -10.232 23 20.463" className="w-3.5 h-3.5 shrink-0">
        <circle r="2.05" fill="#0284C7" />
        <g stroke="#0284C7" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // TypeScript
  if (n.includes('typescript')) {
    return (
      <svg viewBox="0 0 128 128" className="w-3.5 h-3.5 shrink-0 rounded-[2px]">
        <rect width="128" height="128" fill="#3178C6" />
        <path fill="#FFF" d="M37 77h-8V43H14v-7h38v7H37v34zm51-1c-2 2-6 3-10 3-8 0-14-5-14-14 0-10 6-15 15-15 4 0 7 1 9 2l-2 6c-2-1-4-2-7-2-5 0-8 3-8 9s3 9 8 9c2 0 4 0 6-1v-8h-7v-6h13v17z" />
      </svg>
    );
  }

  // Next.js
  if (n.includes('next')) {
    return (
      <svg viewBox="0 0 180 180" className="w-3.5 h-3.5 shrink-0">
        <circle cx="90" cy="90" r="90" fill="#111827" />
        <path fill="#FFF" d="M149.5 146.5L78.2 54H64v72h12.5V70.8l63.5 83.2c3.4-2.3 6.6-4.8 9.5-7.5z" />
        <path fill="#FFF" d="M115 54h13v45.5h-13z" />
      </svg>
    );
  }

  // Vue.js
  if (n.includes('vue')) {
    return (
      <svg viewBox="0 0 261 226" className="w-3.5 h-3.5 shrink-0">
        <path fill="#42B883" d="M161 0H214L130.5 145.5L47 0H100L130.5 53.5L161 0Z" />
        <path fill="#35495E" d="M100 0H47L130.5 145.5L214 0H161L130.5 53.5L100 0Z" />
        <path fill="#42B883" d="M0 0L130.5 226L261 0H208.5L130.5 135.5L52.5 0H0Z" />
      </svg>
    );
  }

  // Tailwind CSS
  if (n.includes('tailwind')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#06B6D4] fill-current">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }

  // Node.js
  if (n.includes('node')) {
    return (
      <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 shrink-0 text-[#5FA04E] fill-current">
        <path d="M16 2L3 9.5v15l13 7.5 13-7.5v-15L16 2zm8 17.5c0 2.5-1.5 4.5-4 4.5s-4-2-4-4.5v-2h2.5v2c0 1.1.7 2 1.5 2s1.5-.9 1.5-2v-4.5c0-2.5-1.5-4.5-4-4.5s-4 2-4 4.5v6H11v-6c0-3.9 2.5-7 6.5-7s6.5 3.1 6.5 7v4.5z" />
      </svg>
    );
  }

  // Python
  if (n.includes('python')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0">
        <path fill="#3776AB" d="M11.9 2c-4.3 0-4 1.9-4 1.9l.01 2h4.09v.6H5.2S2 6.1 2 10.4c0 4.3 2.8 4.1 2.8 4.1h1.7v-2.4c0-2.7 2.3-2.6 2.3-2.6h3.9c2.2 0 2.2-2.1 2.2-2.1V4.2c0-2.2-3.1-2.2-3.1-2.2zm-1.2 1.3c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z" />
        <path fill="#EAB308" d="M12.1 22c4.3 0 4-1.9 4-1.9l-.01-2h-4.09v-.6h6.8s3.2.4 3.2-3.9c0-4.3-2.8-4.1-2.8-4.1h-1.7v2.4c0 2.7-2.3 2.6-2.3 2.6H11.3c-2.2 0-2.2 2.1-2.2 2.1v3.2c0 2.2 3.1 2.2 3.1 2.2zm1.2-1.3c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" />
      </svg>
    );
  }

  // Go
  if (n === 'go') {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#00ADD8] fill-current">
        <path d="M1.8 10.5c.3-1.6 1.4-2.8 3-3.1 1.7-.3 3.4.4 4.2 1.8l-1.6 1c-.5-.8-1.5-1.2-2.4-1-.9.2-1.5.8-1.7 1.7-.3 1.2.5 2.4 1.7 2.6.9.1 1.8-.3 2.2-1.1H5.8v-1.7h3.7v3.2c-.9 1.2-2.3 1.8-3.8 1.6-2.2-.3-3.9-2.3-3.9-5zm8.4 1.5c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm7.8 0c0-1.6-1.3-2.9-2.8-2.9s-2.8 1.3-2.8 2.9 1.3 2.9 2.8 2.9 2.8-1.3 2.8-2.9z" />
      </svg>
    );
  }

  // Java / Spring
  if (n.includes('java') || n.includes('spring')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#6DB33F] fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5c-3-1.5-4.5-4.5-4-7.5 3 .5 5.5 3 6.5 6-.8.8-1.7 1.3-2.5 1.5zm5.5-2.5c-1-3-3.5-5.5-6.5-6 .5-3 3.5-4.5 6.5-4 1.5 3.5 1 7.5 0 10z" />
      </svg>
    );
  }

  // C# / .NET
  if (n.includes('c#') || n.includes('.net')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#512BD4] fill-current">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.5 8 12 11.8 4.5 8 12 4.8zm-7 5.1l6 3.4v6.8l-6-3.4v-6.8zm14 6.8l-6 3.4v-6.8l6-3.4v6.8z" />
      </svg>
    );
  }

  // GraphQL
  if (n.includes('graphql')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#E10098] fill-current">
        <path d="M12 2l8.7 5v10L12 22 3.3 17V7L12 2zm0 2.3L5.3 8.2v7.6L12 19.7l6.7-3.9V8.2L12 4.3zM12 7a2 2 0 110 4 2 2 0 010-4zm-4.3 7.5a2 2 0 110 4 2 2 0 010-4zm8.6 0a2 2 0 110 4 2 2 0 010-4z" />
      </svg>
    );
  }

  // Flutter
  if (n.includes('flutter')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#02569B] fill-current">
        <path d="M14.3 2L4 12.3l3.2 3.2L17.5 5.2h4.7L14.3 2zm-4.8 13.5L6.3 18.7 11.5 24h4.7l-5.2-5.3 5.2-5.2H11.5l-2 2z" />
      </svg>
    );
  }

  // Swift
  if (n.includes('swift')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#F05138] fill-current">
        <path d="M20.9 16.5c-.8 1.4-2.1 2.7-3.6 3.4 3-1.6 4.7-4.6 4.7-7.9 0-3.8-2.6-6.9-5.4-8.8 2.1 2.3 2.9 5.3 1.9 8.2-1.7-2.7-4.4-4.6-7.5-5.3 1.5 1.5 2.6 3.3 3 5.4C9.5 9.8 5 11 2 14.5c3.2-1.7 7.1-1.3 9.9.9-3.3.1-6.1 1.7-7.7 4.3 3.6-1.5 7.6-1.3 11 1 2.4 1.6 4.6.2 5.7-4.2z" />
      </svg>
    );
  }

  // Kotlin
  if (n.includes('kotlin')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#7F52FF] fill-current">
        <path d="M22 2H2v20h20L12 12l10-10zM12 12L2 22V2l10 10z" />
      </svg>
    );
  }

  // PostgreSQL
  if (n.includes('postgres')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#336791] fill-current">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 16.8V14h-2v4.8c-3.8-.5-6.8-3.5-7.3-7.3H8.5v-2H3.7C4.2 5.7 7.2 2.7 11 2.2V7h2V2.2c3.8.5 6.8 3.5 7.3 7.3h-4.8v2h4.8c-.5 3.8-3.5 6.8-7.3 7.3z" />
      </svg>
    );
  }

  // MySQL
  if (n.includes('mysql')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#00758F] fill-current">
        <path d="M12 3c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 6c-3.87 0-7-1.12-7-2.5S8.13 4 12 4s7 1.12 7 2.5S15.87 9 12 9zm-9 2v4c0 2.21 4.03 4 9 4s9-1.79 9-4v-4c-2.12 1.54-5.37 2.5-9 2.5s-6.88-.96-9-2.5zm0 6v4c0 2.21 4.03 4 9 4s9-1.79 9-4v-4c-2.12 1.54-5.37 2.5-9 2.5s-6.88-.96-9-2.5z" />
      </svg>
    );
  }

  // MongoDB
  if (n.includes('mongo')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#47A248] fill-current">
        <path d="M12 2C11.5 3 7 8.5 7 13.5 7 17.5 9.5 21 12 22c2.5-1 5-4.5 5-8.5 0-5-4.5-10.5-5-11.5zm0 18.5c-1.8-.8-3.5-3.5-3.5-7 0-3.3 2.5-7 3.5-8.2 1 1.2 3.5 4.9 3.5 8.2 0 3.5-1.7 6.2-3.5 7z" />
      </svg>
    );
  }

  // Redis
  if (n.includes('redis')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#DC382D] fill-current">
        <path d="M12 2L2 7l10 5 10-5-10-5zm-8 7.8v6.4l8 4 8-4V9.8l-8 4-8-4z" />
      </svg>
    );
  }

  // AWS
  if (n.includes('amazon') || n.includes('aws')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#FF9900] fill-current">
        <path d="M18.8 14.5c-1.3 1.8-3.4 3-5.8 3-3.4 0-6.3-2.3-7.2-5.5-.3-.9-.4-1.9-.4-3 0-4.4 3.6-8 8-8s8 3.6 8 8c0 1.2-.3 2.3-.7 3.3l1.8.8c.6-1.3.9-2.7.9-4.1 0-5.5-4.5-10-10-10S4 3.5 4 9c0 1.4.3 2.8.8 4.1C6 17.5 9.7 20.5 14 20.5c2.9 0 5.6-1.3 7.4-3.5l-2.6-2.5z" />
      </svg>
    );
  }

  // Azure
  if (n.includes('azure')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#0089D6] fill-current">
        <path d="M13 2L3 17h6l4-7 4 7h4L13 2z" />
      </svg>
    );
  }

  // GCP / Google
  if (n.includes('google')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#4285F4] fill-current">
        <path d="M19.4 9.5C18.7 5.7 15.3 3 11.5 3c-3.1 0-5.9 1.8-7.2 4.6C1.7 8.3 0 10.7 0 13.5 0 17.1 2.9 20 6.5 20h12.3c2.9 0 5.2-2.3 5.2-5.2 0-2.6-1.9-4.8-4.6-5.3z" />
      </svg>
    );
  }

  // Docker
  if (n.includes('docker')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#2496ED] fill-current">
        <path d="M13 5h2v2h-2V5zm-3 0h2v2h-2V5zm-3 0h2v2H7V5zm6 3h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm-3 0h2v2H4V8zm12 0h2v2h-2V8zm6 3.5c-.5-.4-1.6-.4-2.3 0-.4.3-.8.8-.9 1.3-.8-.3-1.8-.3-2.6 0-.3.1-.6.3-.9.6H1c-.3 2 .5 4 2.1 5.3C5.5 20.3 9 21 12.5 21c6.5 0 10.5-3.5 11.2-8.3.1-.6.2-1.2.3-1.7-.6-.3-1.4-.3-2-.5z" />
      </svg>
    );
  }

  // Kubernetes
  if (n.includes('kubernetes')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#326CE5] fill-current">
        <path d="M12 2L3 7.2v10.6L12 23l9-5.2V7.2L12 2zm0 2.5l6.5 3.8v7.5L12 19.5 5.5 15.8V8.3L12 4.5zM12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    );
  }

  // Terraform
  if (n.includes('terraform')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#7B42BC] fill-current">
        <path d="M1.5 2.5v7l6 3.5V6l-6-3.5zm8 4.7v7l6-3.5v-7l-6 3.5zm8-4.7v7l6-3.5v-7l-6 3.5zm-8 11.7v7l6 3.5v-7l-6-3.5z" />
      </svg>
    );
  }

  // PyTorch
  if (n.includes('pytorch')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#EE4C2C] fill-current">
        <path d="M13.5 2c-.3 0-.6.2-.8.5L10 6.2c-.3.4-.2 1 .2 1.3.4.3 1 .2 1.3-.2l1.6-2.4 1.6 2.4c.3.4.9.5 1.3.2.4-.3.5-.9.2-1.3l-2.7-3.7c-.2-.3-.5-.5-.8-.5zm-1.5 6.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5c0-1.8-.7-3.5-1.8-4.8l-1.4 1.4c.7.9 1.2 2.1 1.2 3.4 0 3-2.5 5.5-5.5 5.5s-5.5-2.5-5.5-5.5 2.5-5.5 5.5-5.5h.5V8.5H12z" />
      </svg>
    );
  }

  // TensorFlow
  if (n.includes('tensorflow')) {
    return (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-[#FF6F00] fill-current">
        <path d="M12 2L3 7v10l3-1.7V9l6-3.3L18 9v6.3l3 1.7V7L12 2zm-1 8.5L7 12.8v5.4l4-2.2v-5.5zm2 0v5.5l4 2.2v-5.4l-4-2.3z" />
      </svg>
    );
  }

  // Default / generic tech badge icon
  return <Code2 className="w-3.5 h-3.5 shrink-0 text-gray-500" />;
}

export default function TechExpertise() {
  const { techExpertise } = companyData;

  return (
    <section className="py-14 sm:py-16 lg:py-[64px] bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-9 lg:mb-10">
          <div className="inline-flex items-center space-x-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-[#1D4ED8] mb-2 sm:mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
            <span>TECHNOLOGY EXPERTISE &bull; ECOSYSTEM</span>
          </div>
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#111827] leading-[1.2] tracking-tight">
            {techExpertise.heading}
          </h2>
          <p className="mt-2 text-[13.5px] sm:text-[14px] text-[#5B6472] leading-relaxed">
            {techExpertise.subheading}
          </p>
        </div>

        {/* 8 Categories Grid with Category Icons & Tech Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {techExpertise.categories.map((cat) => {
            const meta = CATEGORY_META[cat.name] || {
              icon: Layers,
              iconBg: 'bg-blue-50 border-blue-200 text-blue-600',
              hoverBorder: 'hover:border-blue-300',
              tagBg: 'hover:bg-blue-50/70 hover:border-blue-200'
            };
            const IconComponent = meta.icon;

            return (
              <div
                key={cat.name}
                className={`p-4 sm:p-4.5 rounded-xl bg-white border border-gray-200 shadow-xs hover:shadow-sm ${meta.hoverBorder} hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group`}
              >
                <div>
                  {/* Category Header with Icon */}
                  <div className="flex items-center space-x-2.5 pb-2.5 mb-2.5 border-b border-gray-100">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${meta.iconBg}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-[13.5px] sm:text-[14px] font-bold text-[#111827] tracking-tight">
                        {cat.name}
                      </h3>
                      <span className="text-[10.5px] sm:text-[11px] font-medium text-[#5B6472]">
                        {cat.technologies.length} Technologies
                      </span>
                    </div>
                  </div>

                  {/* Technology Badges with Individual Icons */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {cat.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2 py-1 bg-[#F9FAFB] hover:bg-white border border-gray-200/90 hover:border-gray-300 rounded-md text-[11px] sm:text-[11.5px] font-medium text-[#1F2937] shadow-2xs hover:shadow-xs transition-all duration-150"
                      >
                        <TechIcon name={tech} />
                        <span>{tech}</span>
                      </span>
                    ))}
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

