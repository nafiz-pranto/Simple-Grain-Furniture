import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Mail, Phone, MapPin, Clock, Check, Send, Sparkles, Truck, Shield } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useShop();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: 'Living Room',
    serviceType: 'Private Studio Consultation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your consultation request has been received. Our concierge will contact you within 24 hours.');
  };

  return (
    <div className="pt-20 sm:pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A38053] font-medium">
            <span>Simple Grain Concierge</span>
            <span>/</span>
            <span>Studio & Consultations</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#191816] font-normal leading-[1.1] tracking-tight">
            Let’s shape your home together.
          </h1>

          <p className="text-sm sm:text-base text-[#57524A] font-light leading-relaxed">
            Whether you are furnishing a new Dhaka residence, selecting wood species for an architectural renovation, or inquiring about custom dimensions, our team is here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Booking & Inquiries Form */}
          <div className="lg:col-span-7 bg-[#FDFBF7] p-8 sm:p-10 rounded-xs border border-[#EFEAE1] shadow-xs">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#EFEAE1] text-[#191816] flex items-center justify-center mx-auto">
                  <Check size={24} strokeWidth={2} />
                </div>
                <h3 className="font-serif text-2xl text-[#191816]">Consultation Confirmed</h3>
                <p className="text-xs sm:text-sm text-[#57524A] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#191816]">{formData.name}</strong>. Our senior spatial consultant will reach out via <span className="font-mono text-[#191816]">{formData.phone || formData.email}</span> with material swatches and appointment arrangements.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#191816] text-[#FDFBF7] text-xs uppercase tracking-wider rounded-xs hover:bg-[#38342F]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#191816]">Schedule a Private Consultation</h3>
                  <p className="text-xs text-[#7A746B] mt-1">
                    Meet with our timber specialists at our Gulshan Studio or request a digital spatial plan.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Farhan Chowdhury"
                      className="w-full bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs px-3.5 py-2.5 text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1.5">
                      Phone Number (Bangladesh) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +880 1711 000000"
                      className="w-full bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs px-3.5 py-2.5 text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. farhan@domain.com"
                    className="w-full bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs px-3.5 py-2.5 text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1.5">
                      Living Space of Interest
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs px-3.5 py-2.5 text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                    >
                      <option>Living Room Sanctuary</option>
                      <option>Dining & Entertaining</option>
                      <option>Calm Bedroom Suite</option>
                      <option>Executive Home Office</option>
                      <option>Full Home Bespoke Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1.5">
                      Consultation Mode
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs px-3.5 py-2.5 text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                    >
                      <option>Private Studio Appointment (Gulshan)</option>
                      <option>On-Site Residence Measurement</option>
                      <option>Digital Video Consultation</option>
                      <option>Material Swatch Sample Box</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#191816] mb-1.5">
                    Project Details or Specific Pieces
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your space, dimensions, or questions about wood finishes..."
                    className="w-full bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs p-3 text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#191816] text-[#FDFBF7] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs hover:bg-[#38342F] transition-all flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
                >
                  <Send size={14} />
                  <span>Request Studio Consultation</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Studio Information & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Atelier Info Box */}
            <div className="p-8 bg-[#262421] text-[#FDFBF7] rounded-xs space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880]">
                SIMPLE GRAIN ATELIER
              </span>

              <h3 className="font-serif text-2xl text-[#FDFBF7]">Dhaka Flagship Studio</h3>

              <div className="space-y-4 text-xs text-[#EDE6DA]">
                <div className="flex items-start space-x-3">
                  <MapPin size={17} className="text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FDFBF7] block">Studio & Material Library:</strong>
                    <span>Road 11, Block D, Banani / Gulshan-2, Dhaka 1213</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock size={17} className="text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FDFBF7] block">Hours:</strong>
                    <span>Saturday – Thursday: 10:00 AM – 8:00 PM</span>
                    <span className="block text-[#9E978D]">Friday: By appointment only</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone size={17} className="text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FDFBF7] block">Concierge Desk:</strong>
                    <span className="font-mono">+880 1711 987 654</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail size={17} className="text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FDFBF7] block">Direct Inquiries:</strong>
                    <span className="font-mono">concierge@simplegrainfurniture.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nationwide Delivery Guide */}
            <div className="p-6 bg-[#FDFBF7] rounded-xs border border-[#EFEAE1] space-y-3">
              <div className="flex items-center space-x-2 text-[#191816]">
                <Truck size={17} className="text-[#A38053]" />
                <h4 className="font-serif text-lg font-medium">Nationwide Logistics</h4>
              </div>
              <p className="text-xs text-[#57524A] leading-relaxed">
                We maintain dedicated climate-controlled white-glove transport routes connecting Dhaka, Chittagong, Sylhet, Rajshahi, Khulna, and all 64 districts.
              </p>
              <div className="text-[11px] font-mono text-[#7A746B] pt-1">
                Dhaka: 3–5 Days • Other Divisions: 7–10 Days
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
