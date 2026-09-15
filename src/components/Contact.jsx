import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';
import { companyData } from '../data/companyInfo';
import { corporatePhotography } from '../data/photography';

export default function Contact({ preselectedService }) {
  const { contact, headquarters, regionalOffices } = companyData;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceRequired: preselectedService || 'Artificial Intelligence',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceRequired: preselectedService }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    'Software Development',
    'Web Development',
    'Mobile App Development',
    'Artificial Intelligence',
    'Generative AI & LLM Solutions',
    'Cloud & DevOps',
    'Cybersecurity',
    'Data & Analytics',
    'Digital Transformation',
    'UI/UX & Product Design',
    'IT Consulting',
    'System Integration',
    'General Digital Architecture Consultation'
  ];

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.projectDetails.trim()) {
      setErrorMessage('Please complete all required fields (Name, Corporate Email, and Project Details).');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Submission failed');
      }
      setSubmitted(true);
    } catch (error) {
      setErrorMessage('Something went wrong sending your inquiry. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: Introduction & Structured Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
                <span>INITIATE ENGAGEMENT &bull; GET IN TOUCH</span>
              </div>

              <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#111827] leading-[1.2] tracking-tight mb-2">
                {contact.leftHeading}
              </h2>

              <p className="text-[13.5px] sm:text-[14px] text-[#5B6472] leading-relaxed">
                {contact.leftDescription}
              </p>
            </div>

            {/* Compact Corporate Office Photo Banner */}
            <div className="h-28 sm:h-32 w-full rounded-xl overflow-hidden border border-gray-200/90 shadow-xs bg-gray-100 relative group">
              <img
                src={corporatePhotography.contact.url}
                alt={corporatePhotography.contact.alt}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = corporatePhotography.about.url;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                <span className="text-[11px] font-medium text-white/90">
                  Client Engagement & Consultation Center &bull; Bengaluru
                </span>
              </div>
            </div>

            {/* Compact Contact Details Card */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#F8F9FA] border border-gray-200/90 space-y-2.5">
              <div className="flex items-start space-x-2.5 text-xs text-[#5B6472]">
                <Building2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#111827] font-semibold text-[12px]">Registered Headquarters:</strong>
                  <p className="text-[12px] text-[#5B6472] leading-tight mt-0.5">
                    {headquarters.addressLine1}, {headquarters.addressLine2}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-gray-200/70 text-xs">
                <div className="flex items-center space-x-2 text-[#5B6472]">
                  <Phone className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                  <a href={`tel:${headquarters.phone}`} className="hover:text-[#111827] font-medium text-[12px]">
                    {headquarters.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-[#5B6472]">
                  <Mail className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                  <a href={`mailto:${headquarters.email}`} className="hover:text-[#111827] font-medium text-[12px] truncate">
                    {headquarters.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200/70 flex items-center justify-between text-[11px] text-[#5B6472]">
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>Mon – Fri, 09:00 to 18:30 IST</span>
                </div>
                <span className="text-[11px] font-semibold text-[#1D4ED8] bg-blue-50/80 px-2 py-0.5 rounded border border-blue-100/60">
                  1-Day SLA Response
                </span>
              </div>
            </div>

            {/* Regional Delivery Hubs */}
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 shrink-0">
                Delivery Hubs:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {regionalOffices.map((off) => (
                  <span key={off.city} className="px-2.5 py-0.5 rounded-md bg-white border border-gray-200 text-[11px] font-medium text-[#111827]">
                    {off.city}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Clean Proportional Input Form */}
          <div className="lg:col-span-7 bg-[#F8F9FA] border border-gray-200 rounded-xl p-5 sm:p-6 lg:p-7 shadow-xs flex flex-col justify-between">
            {submitted ? (
              <div className="py-12 px-4 text-center space-y-4 my-auto">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#5B6472] max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Anthropic Gen Digital Systems. A senior solutions architect will review your technical requirements and contact you within one business day.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        serviceRequired: 'Artificial Intelligence',
                        projectDetails: '',
                      });
                    }}
                    className="text-xs font-semibold text-[#1D4ED8] hover:underline"
                  >
                    Submit another inquiry &rarr;
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#111827] mb-1" htmlFor="contact-name">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John McCarthy"
                      required
                      className="w-full h-10 px-3.5 bg-white border border-gray-300 rounded-md text-[13.5px] text-[#111827] placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-[#1D4ED8] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111827] mb-1" htmlFor="contact-company">
                      Company
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Global Logistics"
                      className="w-full h-10 px-3.5 bg-white border border-gray-300 rounded-md text-[13.5px] text-[#111827] placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-[#1D4ED8] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#111827] mb-1" htmlFor="contact-email">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="j.mccarthy@company.com"
                      required
                      className="w-full h-10 px-3.5 bg-white border border-gray-300 rounded-md text-[13.5px] text-[#111827] placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-[#1D4ED8] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#111827] mb-1" htmlFor="contact-phone">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 123 456 7890"
                      className="w-full h-10 px-3.5 bg-white border border-gray-300 rounded-md text-[13.5px] text-[#111827] placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-[#1D4ED8] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-1" htmlFor="contact-service">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="contact-service"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full h-10 px-3.5 bg-white border border-gray-300 rounded-md text-[13.5px] text-[#111827] focus:ring-2 focus:ring-blue-500/20 focus:border-[#1D4ED8] outline-none transition-all cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-1" htmlFor="contact-details">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-details"
                    name="projectDetails"
                    rows={3}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Briefly describe your project requirements, target architecture, or estimated timeline..."
                    required
                    className="w-full p-3 bg-white border border-gray-300 rounded-md text-[13.5px] text-[#111827] placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-[#1D4ED8] outline-none transition-all resize-y"
                  />
                </div>

                <div className="pt-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#111827] hover:bg-[#1F2937] rounded-md transition-colors shadow-xs disabled:opacity-75 cursor-pointer"
                  >
                    {submitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>{contact.buttonText}</span>
                        <Send className="w-3.5 h-3.5 ml-2" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center space-x-1.5 text-xs text-[#5B6472]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Non-disclosure agreement (NDA) by default</span>
                  </div>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
