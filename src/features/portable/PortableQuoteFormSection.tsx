import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { submitContactRequirement } from '../../core/api/contactService';
import { APP_CONFIG } from '../../core/config';

interface PortableQuoteFormSectionProps {
  initialCapacity?: string;
}

export const PortableQuoteFormSection: React.FC<PortableQuoteFormSectionProps> = ({
  initialCapacity = '15 - 45 kVA',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    capacity: initialCapacity,
    mobilityType: 'Single-Axle Road Towable Trailer',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitContactRequirement({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        kvaRequirement: `${formData.capacity} (${formData.mobilityType})`,
        applicationType: 'Mobile & Portable Power Set',
        message: `Site: ${formData.location} | Mobility: ${formData.mobilityType} | Message: ${formData.message}`,
        source: 'Mobile Generators Showcase Form',
      });

      setSubmitSuccess(true);
    } catch {
      setSubmitError('Unable to transmit request. Please call our 24/7 hotline directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="portable-quote" className="bg-[#F8F9FF] py-16 lg:py-20 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-[#00163D] rounded-[4px] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 text-white">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="space-y-4">
              <span className="font-karla font-bold text-xs uppercase tracking-widest text-[#D97706] block">
                TECHNICAL QUOTATION &amp; SIZING
              </span>
              <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Request Instant Mobile Genset Sizing &amp; Pricing
              </h2>
              <p className="font-karla text-sm text-slate-300 leading-relaxed">
                Dedicated technical fleet dispatch engineers ready to calculate your exact transient electrical demand, road clearance, towing hitch configuration, and site deployment schedule.
              </p>

              <div className="space-y-3 font-karla text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>120-Minute Towed Dispatch Across Greater Hyderabad</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>RTO Highway Road Transit &amp; Lighting Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Onboard Bulk Fuel Cell &amp; 50m Heavy Feeder Cable</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10 font-karla text-xs text-slate-300">
              <a href={`tel:${APP_CONFIG.phonePrimary}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#D97706]" />
                <span className="font-bold text-white text-sm">+91 {APP_CONFIG.phonePrimary}</span>
              </a>
              <a href={`mailto:${APP_CONFIG.emailSales}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#D97706]" />
                <span>{APP_CONFIG.emailSales}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>Sanath Nagar ESI Depot, Hyderabad, Telangana 500018</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-white text-[#00163D]">
            {submitSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-rubik font-bold text-2xl text-[#00163D]">
                  Mobile Proposal Dispatched
                </h3>
                <p className="font-karla text-sm text-slate-600 max-w-md">
                  Thank you, <strong>{formData.name}</strong>. Our fleet technical dispatch lead is reviewing your trailer hitch and kVA sizing requirements. We will contact you immediately.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 bg-[#00163D] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px]"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Rao"
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-[2px] font-karla text-sm text-[#00163D] focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98490 12345"
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-[2px] font-karla text-sm text-[#00163D] focus:outline-none focus:border-[#00163D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. vikram@studio.com"
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-[2px] font-karla text-sm text-[#00163D] focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700">
                      Deployment Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Ramoji Film City, Hyderabad"
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-[2px] font-karla text-sm text-[#00163D] focus:outline-none focus:border-[#00163D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700">
                      Capacity Range
                    </label>
                    <select
                      value={formData.capacity}
                      onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-[2px] font-karla text-sm text-[#00163D] bg-white focus:outline-none focus:border-[#00163D]"
                    >
                      <option value="1 - 5 kVA">1 - 5 kVA Hand-Carry Inverter</option>
                      <option value="5 - 15 kVA">5 - 15 kVA Portable Wheel Trolley</option>
                      <option value="15 - 45 kVA">15 - 45 kVA Single-Axle Road Towable</option>
                      <option value="45 - 82.5 kVA">45 - 82.5 kVA Twin-Axle All-Terrain</option>
                      <option value="82.5 - 125 kVA">82.5 - 125 kVA Synchronized Mobile Plant</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700">
                      Mobility Configuration
                    </label>
                    <select
                      value={formData.mobilityType}
                      onChange={(e) => setFormData({ ...formData, mobilityType: e.target.value })}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-[2px] font-karla text-sm text-[#00163D] bg-white focus:outline-none focus:border-[#00163D]"
                    >
                      <option value="Single-Axle Road Towable Trailer">Single-Axle Road Towable Trailer</option>
                      <option value="Twin-Axle Heavy Road Trailer">Twin-Axle Heavy Road Trailer</option>
                      <option value="Portable Hand-Carry / 2-Wheel Trolley">Portable Hand-Carry / 2-Wheel Trolley</option>
                      <option value="Multi-Axle Truck Mounted Power Container">Multi-Axle Truck Mounted Power Container</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700">
                    Project Scope / Operating Hours
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention duration, location conditions, or specialized voltage requirements..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-[2px] font-karla text-sm text-[#00163D] focus:outline-none focus:border-[#00163D]"
                  />
                </div>

                {submitError && (
                  <p className="font-karla text-xs text-red-600">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#D32F2F] hover:bg-red-700 text-white font-rubik font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'TRANSMITTING SIZING REQUEST...' : 'REQUEST BESPOKE MOBILE QUOTATION'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
