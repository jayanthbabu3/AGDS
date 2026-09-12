import React, { useState } from 'react';
import TopUtilityBar from './components/TopUtilityBar';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import ServicesGrid from './components/ServicesGrid';
import ServiceDetailModal from './components/ServiceDetailModal';
import Industries from './components/Industries';
import TechExpertise from './components/TechExpertise';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudies from './components/CaseStudies';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [inquiryService, setInquiryService] = useState('');

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleInquireService = (serviceTitle) => {
    setInquiryService(serviceTitle);
    setSelectedService(null);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#111827] selection:bg-blue-500/20 selection:text-[#111827]">
      {/* 01: Header Navigation & Top Corporate Bar */}
      <TopUtilityBar />
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 02: Hero Section */}
        <Hero />

        {/* 03: Trusted By / Technology Ecosystem Logo Bridge */}
        <TrustedBy />

        {/* 04: About Us Section */}
        <About />

        {/* 05: Services Grid */}
        <ServicesGrid onSelectService={handleSelectService} />

        {/* 06: Industries */}
        <Industries />

        {/* 07: Why Choose Us */}
        <WhyChooseUs />

        {/* 08: Technology Expertise */}
        <TechExpertise />

        {/* 09: Our Process */}
        <Process />

        {/* 10: Case Studies */}
        <CaseStudies />

        {/* 11: Mid-Page Call to Action */}
        <CallToAction />

        {/* 12: Contact Section */}
        <Contact preselectedService={inquiryService} />
      </main>

      {/* 13: Corporate Footer */}
      <Footer />

      {/* Standardized Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={handleCloseModal}
          onInquire={handleInquireService}
        />
      )}
    </div>
  );
}

export default App;
