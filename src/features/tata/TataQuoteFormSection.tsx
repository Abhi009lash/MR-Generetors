import React, { useState } from 'react';
import { Phone, Mail, Building, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitContactRequirement } from '../../core/api/contactService';

interface TataQuoteFormSectionProps {
  initialCapacity?: string;
}

export const TataQuoteFormSection: React.FC<TataQuoteFormSectionProps> = ({
  initialCapacity,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    capacity: initialCapacity || '25 kVA',
    sector: 'Manufacturing & Industry',
    requirementType: 'New DG Purchase',
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
        `[TATA GENSET SALES & SIZING INQUIRY]`,
        `Company: ${formData.company}`,
        `Capacity: ${formData.capacity}`,
        `Sector: ${formData.sector}`,
        `Requirement: ${formData.requirementType}`,
        `Delivery Location: ${formData.location || 'Hyderabad / Telangana'}`,
      ].join('\n');

      const response = await submitContactRequirement({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        serviceType: `Tata DG Set Inquiry - ${formData.capacity}`,
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
    <section id="tata-quote" className="bg-white py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Guidance Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#D32F2F]">
                FACTORY-DIRECT SALES &amp; TECHNICAL CONSULTATION
              </span>
              <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
                GET INSTANT TATA GENSET PRICE &amp; SIZING
              </h2>
              <p className="font-karla text-sm text-slate-600 leading-relaxed">
                Connect directly with our Hyderabad depot applications engineers. We verify starting motor inrushes, harmonics, and site acoustics to size the exact kVA rating you require without overspending.
              </p>
            </div>

            {/* Direct Desks Card */}
            <div className="bg-[#F4F6F9] p-5 rounded-[2px] border border-slate-200 space-y-3 font-karla text-xs">
              <span className="font-bold text-[#00163D] uppercase tracking-wider block">
                DIRECT DEPOT ENGINEERING DESKS:
              </span>
              <div className="flex items-center gap-2 text-slate-800">
                <Phone className="w-4 h-4 text-[#D32F2F] shrink-0" />
                <span className="font-bold text-sm">+91 8977778811 / +91 9014902266</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-[#385BAB] shrink-0" />
                <span>Desk: 040-48547105 (Mon &ndash; Sat 9 AM &ndash; 8 PM)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-[#385BAB] shrink-0" />
                <span>sales@mrgenerators.com</span>
              </div>
            </div>

            {/* Depot Visit Note */}
            <div className="bg-[#E5EEFF] p-4 rounded-[2px] flex items-center gap-3 border border-[#CCDFFF]">
              <Building className="w-6 h-6 text-[#00163D] shrink-0" />
              <p className="font-karla text-xs text-slate-700 leading-snug">
                <strong className="text-[#00163D]">Immediate depot inspection:</strong> Units under power available for live load bank demonstrations at our Sanath Nagar central warehouse.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[#F4F6F9] border border-slate-200 rounded-[2px] p-6 sm:p-8 shadow-xs">
            {success ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-rubik font-bold text-2xl text-[#00163D]">Quotation Request Dispatched</h4>
                <p className="font-karla text-sm text-slate-600 max-w-md mx-auto">
                  Our applications engineer is preparing your technical quotation with complete engine fuel curves and canopy drawings.
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
                      Full Name &amp; Designation *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Reddy (Facility Head)"
                      className="w-full bg-white border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Cold Chain Logistics"
                      className="w-full bg-white border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                      Work Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@enterprise.com"
                      className="w-full bg-white border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                      Required Capacity *
                    </label>
                    <select
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-300 rounded-[2px] px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#00163D]"
                    >
                      <option value="25 kVA">25 kVA</option>
                      <option value="35 kVA">35 kVA</option>
                      <option value="62.5 kVA">62.5 kVA</option>
                      <option value="82.5 kVA">82.5 kVA</option>
                      <option value="100 kVA">100 kVA Flagship</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                      Sector / Industry *
                    </label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-300 rounded-[2px] px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#00163D]"
                    >
                      <option value="Manufacturing & Industry">Manufacturing &amp; Industry</option>
                      <option value="Healthcare & Hospitals">Healthcare &amp; Hospitals</option>
                      <option value="IT & Data Centers">IT &amp; Data Centers</option>
                      <option value="Commercial & Retail">Commercial &amp; Retail</option>
                      <option value="Construction & Metro">Construction &amp; Metro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                      Requirement Type *
                    </label>
                    <select
                      name="requirementType"
                      value={formData.requirementType}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-300 rounded-[2px] px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#00163D]"
                    >
                      <option value="New DG Purchase">New DG Purchase</option>
                      <option value="Turnkey Substation">Turnkey Substation</option>
                      <option value="Replacement / Buyback">Replacement / Buyback</option>
                      <option value="AMC Contract">AMC Contract</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                    Installation Location (Hyderabad, Telangana or AP) *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Gachibowli, Hyderabad or Sri City, AP"
                    className="w-full bg-white border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="h-12 px-8 bg-[#D32F2F] hover:bg-red-700 disabled:opacity-50 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>DISPATCHING QUOTE...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT FOR INSTANT TATA QUOTATION</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold font-karla">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Quotes dispatched within 15 minutes</span>
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
