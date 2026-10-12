import React, { useState } from 'react';
import { Clock, MapPin, ShieldCheck, Send, CheckCircle2, AlertCircle, Loader2, Lock, PhoneCall } from 'lucide-react';
import { submitContactRequirement } from '../../core/api/contactService';
import { APP_CONFIG } from '../../core/config';

interface EicherQuoteFormSectionProps {
  initialCapacity?: string;
}

export const EicherQuoteFormSection: React.FC<EicherQuoteFormSectionProps> = ({
  initialCapacity,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    capacity: initialCapacity || '62.5 kVA',
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
        `[EICHER DIESEL GENERATOR SALES & SIZING INQUIRY]`,
        `Company: ${formData.company || 'Not specified'}`,
        `Selected Capacity: ${formData.capacity}`,
        `Delivery Timeline: ${formData.timeline}`,
        `Site Location: ${formData.location || 'Hyderabad / Telangana'}`,
      ].join('\n');

      const response = await submitContactRequirement({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        serviceType: `Eicher DG Set Inquiry - ${formData.capacity}`,
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
    <section id="eicher-quote" className="bg-[#F8F9FF] py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Guidance & SLA (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#C026D3] block">
                FAST FACTORY PRICING
              </span>
              <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
                Request Instant Eicher Generator Quotation &amp; Load Sizing
              </h2>
              <p className="font-karla text-sm text-slate-600 leading-relaxed">
                Tell us your facility requirements or schedule a free site survey across Telangana and Andhra Pradesh. Our certified engineers will analyze your load profile and recommend the ideal Eicher DG set.
              </p>
            </div>

            {/* 3 Value SLA Cards */}
            <div className="space-y-3 font-karla">
              <div className="bg-white p-4 rounded-[2px] border border-slate-200 flex items-start gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-[2px] bg-amber-50 flex items-center justify-center text-[#D97706] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#00163D] uppercase tracking-wider">
                    15-Minute Response Guaranteed
                  </strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Swift quotation generation with transparent ex-factory pricing and freight breakdown.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-[2px] border border-slate-200 flex items-start gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-[2px] bg-blue-50 flex items-center justify-center text-[#385BAB] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#00163D] uppercase tracking-wider">
                    Free Comprehensive Site Inspection
                  </strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Detailed evaluation of floor space, ventilation, exhaust routing, and cable trenching needs.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-[2px] border border-slate-200 flex items-start gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-[2px] bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#00163D] uppercase tracking-wider">
                    Turnkey Pricing Transparency
                  </strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Comprehensive quote covering generator, delivery, civil foundation, electrical cabling, and CEIG approvals.
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Hotline Strip */}
            <div className="bg-[#00163D] text-white p-4 rounded-[2px] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span className="font-karla text-xs font-bold text-slate-200 uppercase tracking-wider">
                  SALES HOTLINE
                </span>
              </div>
              <a
                href={`tel:${APP_CONFIG.phonePrimary}`}
                className="font-rubik font-bold text-amber-400 hover:underline text-sm"
              >
                +91 {APP_CONFIG.phonePrimary}
              </a>
            </div>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[2px] p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <h3 className="font-rubik font-bold text-lg text-[#00163D]">
                Recommended Factory-Direct Quote Request
              </h3>
              <span className="font-karla font-bold text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-[2px] uppercase tracking-wider">
                CPCB IV+ READY
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
                  Our Eicher sales engineering representative is preparing your quotation with fuel curves and canopy placement drawings.
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
                      placeholder="e.g. Anand Kumar"
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
                      placeholder="e.g. Hyderabad Healthcare Labs"
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
                      <option value="30 kVA">30 kVA (Eicher E324 Block)</option>
                      <option value="45 kVA">45 kVA (Eicher E334 TCI)</option>
                      <option value="62.5 kVA">62.5 kVA (Eicher E483 TCI)</option>
                      <option value="82.5 kVA">82.5 kVA (Eicher E483 TCI-HD)</option>
                      <option value="100 kVA">100 kVA (Eicher E494 TCI)</option>
                      <option value="125 kVA">125 kVA (Eicher Flagship 100 kW)</option>
                      <option value="Not Sure - Request Load Calculation">Not Sure - Request Load Calculation</option>
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
                      <option value="Immediate (1-3 Days)">Immediate (Ready Stock 1-3 Days)</option>
                      <option value="Within 2 Weeks">Within 2 Weeks</option>
                      <option value="Planning Stage (1-2 Months)">Planning Stage (1-2 Months)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                    Site Location / Notes *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Cherlapally Industrial Estate, Hyderabad"
                    className="w-full bg-[#F8F9FF] border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D]"
                  />
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-[#00163D] hover:bg-[#0F2B5C] disabled:opacity-50 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>DISPATCHING QUOTATION REQUEST...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>GET CUSTOMIZED QUOTE &amp; SIZING RECOMMENDATION</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-slate-500 text-[11px] font-karla">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your data is strictly confidential. Authorized Multi-Brand Generator OEM Distributors.</span>
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
