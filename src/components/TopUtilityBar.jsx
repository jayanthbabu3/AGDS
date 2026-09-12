import React from 'react';
import { Building2, Phone, Mail, ShieldCheck, MapPin } from 'lucide-react';
import { companyData } from '../data/companyInfo';

export default function TopUtilityBar() {
  return (
    <div className="hidden lg:block bg-[#111827] text-gray-400 text-xs border-b border-gray-800">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        {/* Left Side: Legal Name & Registration */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1.5 font-medium text-gray-200">
            <Building2 className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>{companyData.legalName}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-gray-400">
            <span className="text-gray-500">CIN:</span>
            <span className="font-mono text-[11px] text-gray-300 tracking-wide">{companyData.cin}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-gray-400" />
            <span>Registered Office: Bengaluru, India</span>
          </div>
        </div>

        {/* Right Side: Security Standard & Contact */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1.5 text-gray-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] font-medium tracking-wide">ISO 27001 & SOC 2 Audited Controls</span>
          </div>
          <div className="h-3 w-px bg-gray-700" />
          <a 
            href={`tel:${companyData.headquarters.phone}`}
            className="flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-gray-400" />
            <span>{companyData.headquarters.phone}</span>
          </a>
          <a 
            href={`mailto:${companyData.headquarters.email}`}
            className="flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3 h-3 text-gray-400" />
            <span>{companyData.headquarters.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
