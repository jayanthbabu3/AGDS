import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Terminal, Layers, Cpu } from 'lucide-react';
import { corporatePhotography } from '../data/photography';

export default function ServiceDetailModal({ service, onClose, onInquire }) {
  if (!service) return null;

  const imageUrl = corporatePhotography.services[service.id] || corporatePhotography.hero.url;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-[#111827]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-3xl w-full border border-gray-200 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 sm:p-8 bg-[#F8F9FA] border-b border-gray-200 flex justify-between items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] block mb-1">
              {service.category || 'Practice Area'} &bull; {service.number}
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#111827] tracking-tight">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Realistic Image for the Service */}
          <div className="relative overflow-hidden rounded-lg border border-gray-200 h-52 sm:h-64 bg-gray-100">
            <img
              src={imageUrl}
              alt={`${service.title} engineering environment`}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Short Explanation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
              Service Scope & Engineering Rigor
            </h4>
            <p className="text-base text-[#111827] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Key Capabilities */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2.5">
              Key Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.capabilities.map((cap) => (
                <div key={cap} className="flex items-start text-xs sm:text-sm text-[#5B6472]">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] mr-2 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Expertise */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Technology Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-2.5 py-1 bg-[#F8F9FA] border border-gray-200 rounded text-xs font-medium text-[#111827]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Business Benefits */}
          <div className="p-4 rounded-lg bg-blue-50/60 border border-blue-100 text-xs sm:text-sm text-blue-900">
            <strong className="block font-semibold mb-1 text-blue-950">Measurable Business Impact:</strong>
            <p className="text-blue-900/80 leading-relaxed">{service.businessBenefits}</p>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-[#F8F9FA] border-t border-gray-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xs text-[#5B6472]">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Standardized enterprise SLA & SSDLC compliance</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-gray-600 hover:text-gray-900"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                if (onInquire) onInquire(service.title);
              }}
              className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-[#111827] hover:bg-[#1F2937] rounded-md transition-colors"
            >
              <span>Discuss Your Requirement</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
