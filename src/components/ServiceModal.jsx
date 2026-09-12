import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';

export default function ServiceModal({ service, onClose, onInquire }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="bg-white rounded-xl max-w-2xl w-full border border-slate-300 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex justify-between items-start">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0284c7] block mb-1 font-mono">
              {service.category || 'Practice Area'}
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              {service.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 text-sm text-slate-600">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Service Scope & Deliverables
            </h4>
            <p className="text-slate-700 leading-relaxed text-sm">
              {service.desc}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="text-xs font-semibold text-slate-800 flex items-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
              Standard Enterprise Engagement Inclusions:
            </h4>
            <ul className="text-xs text-slate-600 space-y-1.5 pl-6 list-disc">
              <li>Comprehensive technical requirements specification & architecture blueprint</li>
              <li>Dedicated senior solutions architect & Scrum master sprint oversight</li>
              <li>Continuous integration (CI/CD) pipelines with automated regression testing</li>
              <li>Zero-trust security scanning, dependency vulnerability audits & compliance sign-off</li>
              <li>Complete source code ownership & documented handoff procedures</li>
            </ul>
          </div>

          <div className="flex items-center space-x-2 text-xs text-slate-500 pt-1">
            <ShieldCheck className="w-4 h-4 text-[#0284c7]" />
            <span>Deliverable backed by contractual service level agreements (SLAs)</span>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              if (onInquire) onInquire(service.name);
            }}
            className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-[#0f172a] hover:bg-[#1e293b] rounded-md transition-colors shadow-xs"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
