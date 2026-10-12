import React, { useState } from 'react';
import { Clock, MapPin, ShieldCheck, Send, CheckCircle2, AlertCircle, Loader2, Lock, PhoneCall } from 'lucide-react';
import { submitContactRequirement } from '../../core/api/contactService';
import { APP_CONFIG } from '../../core/config';

interface KirloskarQuoteFormSectionProps {
  initialCapacity?: string;
}

export const KirloskarQuoteFormSection: React.FC<KirloskarQuoteFormSectionProps> = ({
  initialCapacity,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    capacity: initialCapacity || '82.5 kVA',
    timeline: 'Immediate (1-3 Days)',
    location: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const message = [
        `[KIRLOSKAR KOEL GREEN GENERATOR SALES & SIZING INQUIRY]`,
        `Company: ${formData.company || 'Not specified'}`,
        `Selected Capacity: ${formData.capacity}`,
        `Delivery Timeline: ${formData.timeline}`,
        `Site Location: ${formData.location || 'Hyderabad / Telangana'}`,
      ].join('\n');

      const response = await submitContactRequirement({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        serviceType: `Kirloskar DG Set Inquiry - ${formData.capacity}`,
        message,
      });

      if (response.success) {
        setSuccess(true);
      } else {
        setErrorMessage(response.message || 'Submission failed. Please call our sales desk directly.');
      }
    } catch {
      setErrorMessage('Network error occurred. Please call +91 8977778811 directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kirloskar-quote" className="bg-[#F8F9FF] py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Navy Guidance Box (5 cols) */}
          <div className="lg:col-span-5 bg-[#00163D] text-white p-6 sm:p-8 rounded-[2px] shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="font-karla font-bold text-xs uppercase tracking-wider text-amber-400 block">
                OFFICIAL DIRECT FACTORY PRICING
              </span>
              <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Request Official Kirloskar Quotation &amp; Load Sizing
              </h2>
              <p className="font-karla text-sm text-slate-300 leading-relaxed">
                Receive an engineering validation proforma proposal matching your facility commercial electrical load, understanding power needs and sound limits.
              </p>
            </div>

            {/* 3 SLA Checkpoints */}
            <div className="space-y-3 font-karla">
              <div className="bg-[#0A1D3F] p-3.5 rounded-[2px] border border-white/10 flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs font-bold text-white uppercase tracking-wider">
                    15-Minute Official Proposal SLA
                  </strong>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Direct proposal dispatched with ex-depot pricing, CPCB IV+ certificate, and shipping timeline.
                  </p>
                </div>
              </div>

              <div className="bg-[#0A1D3F] p-3.5 rounded-[2px] border border-white/10 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs font-bold text-white uppercase tracking-wider">
                    Complimentary Hyderabad Site Inspection
                  </strong>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Free technical site survey to review transformer ratings, motor startup currents, and exhaust routing.
                  </p>
                </div>
              </div>

              <div className="bg-[#0A1D3F] p-3.5 rounded-[2px] border border-white/10 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs font-bold text-white uppercase tracking-wider">
                    Turnkey Transparency
                  </strong>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Transparent quotation covering equipment, foundation dampers, AMF switchgear, and CEIG approvals.
                  </p>
                </div>
              </div>
            </div>

            {/* Hotline Bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span className="font-karla text-xs font-bold text-slate-300 uppercase tracking-wider">
                  DIRECT DESK
                </span>
              </div>
              <a
                href={`tel:${APP_CONFIG.phonePrimary}`}
                className="font-rubik font-bold text-amber-400 text-lg hover:underline"
              >
                +91 {APP_CONFIG.phonePrimary}
              </a>
            </div>
          </div>

          {/* Right Column: Sizing & Quote Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[2px] p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <h3 className="font-rubik font-bold text-lg text-[#00163D]">
                KOEL Green Factory-Direct Quote Request
              </h3>
              <span className="font-karla font-bold text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-[2px] uppercase tracking-wider">
                CPCB IV+ CERTIFIED
              </span>
            </div>

            {success ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-rubik font-bold text-2xl text-[#00163D]">
                  Quotation Request Dispatched
                </h4>
                <p className="font-karla text-sm text-slate-600 max-w-md mx-auto">
                  Our Kirloskar senior power engineer is preparing your technical proforma with fuel consumption curves and installation drawings.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 bg-[#00163D] hover:bg-[#0F2B5C] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-karla">
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2 rounded-[2px]">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Vikram Sharma"
                      className="w-full bg-[#F8F9FF] border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Engineering Labs"
                      className="w-full bg-[#F8F9FF] border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#F8F9FF] border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@business.com"
                      className="w-full bg-[#F8F9FF] border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                      Required Capacity *
                    </label>
                    <select
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleChange}
                      className="w-full bg-[#F8F9FF] border border-slate-300 rounded-[2px] px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#00163D]"
                    >
                      <option value="15 kVA">15 kVA (Air-Cooled EA16 Series)</option>
                      <option value="45 kVA">45 kVA (Water-Cooled 3R1040)</option>
                      <option value="82.5 kVA">82.5 kVA (Turbocharged 4R1040T)</option>
                      <option value="125 kVA">125 kVA (Industrial 6R1080T)</option>
                      <option value="250 kVA">250 kVA (Flagship SL9088TA)</option>
                      <option value="500 kVA - 5200 kVA">500 kVA - 5200 kVA (Mega-Power DV Series)</option>
                      <option value="Not Sure - Request Site Load Audit">Not Sure - Request Site Load Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                      Delivery Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-[#F8F9FF] border border-slate-300 rounded-[2px] px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#00163D]"
                    >
                      <option value="Immediate (1-3 Days)">Immediate (Central Yard Stock 1-3 Days)</option>
                      <option value="Within 2 Weeks">Within 2 Weeks</option>
                      <option value="Planning Stage (1-2 Months)">Planning Stage (1-2 Months)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                    Site Location / Address *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Sanath Nagar Industrial Area, Hyderabad"
                    className="w-full bg-[#F8F9FF] border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D]"
                  />
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-[#D32F2F] hover:bg-red-700 disabled:opacity-50 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>DISPATCHING PROPOSAL REQUEST...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT FOR OFFICIAL FACTORY PROFORMA QUOTE</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-slate-500 text-[11px] font-karla">
                    <Lock className="w-3.5 h-3.5 text-[#0D652D]" />
                    <span>Your data is strictly confidential. Authorized KOEL Green Multi-Brand Power Distributors.</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
