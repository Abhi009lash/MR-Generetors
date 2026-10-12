import React, { useState } from 'react';
import { Clock, Zap, Send, CheckCircle2, AlertCircle, Loader2, Lock } from 'lucide-react';
import { submitContactRequirement } from '../../core/api/contactService';

interface CumminsQuoteFormSectionProps {
  initialCapacity?: string;
}

export const CumminsQuoteFormSection: React.FC<CumminsQuoteFormSectionProps> = ({
  initialCapacity,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    capacity: initialCapacity || '125 kVA',
    requirementNature: 'New DG Purchase & Installation',
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
        `[CUMMINS DIESEL GENERATOR SALES & SIZING INQUIRY]`,
        `Company: ${formData.company || 'Not specified'}`,
        `Capacity Required: ${formData.capacity}`,
        `Nature of Requirement: ${formData.requirementNature}`,
        `Site Location: ${formData.location || 'Hyderabad / Telangana'}`,
      ].join('\n');

      const response = await submitContactRequirement({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        serviceType: `Cummins DG Set Inquiry - ${formData.capacity}`,
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
    <section id="cummins-quote" className="bg-[#F8F9FF] py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Guidance & SLA (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#D97706] block">
                CUMMINS FACTORY SIZING DESK
              </span>
              <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
                GET AN OEM CUMMINS PRICE QUOTE &amp; LOAD SIZING AUDIT
              </h2>
              <p className="font-karla text-sm text-slate-600 leading-relaxed">
                Consult our factory-trained applications engineering team to receive competitive tender-ready quotations, load harmonic simulations, site foundation drawings, and electrical single-line recommendations.
              </p>
            </div>

            {/* 2 Value SLA Cards */}
            <div className="space-y-3 font-karla">
              <div className="bg-white p-4 rounded-[2px] border border-slate-200 flex items-start gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-[2px] bg-amber-50 flex items-center justify-center text-[#D97706] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#00163D] uppercase tracking-wider">
                    15-Minute Quotation Response SLA
                  </strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Direct commercial quote transmission via email and WhatsApp within 15 minutes of requirement submission.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-[2px] border border-slate-200 flex items-start gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-[2px] bg-blue-50 flex items-center justify-center text-[#385BAB] shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#00163D] uppercase tracking-wider">
                    Free Technical Site &amp; Load Audit
                  </strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Complimentary senior engineer site survey in Hyderabad/Secunderabad to verify transformer capacity and motor inrush.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[2px] p-6 sm:p-8 shadow-xs">
            {success ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-rubik font-bold text-2xl text-[#00163D]">
                  Quotation Request Dispatched
                </h4>
                <p className="font-karla text-sm text-slate-600 max-w-md mx-auto">
                  Our Cummins applications engineer is preparing your technical quotation with engine fuel curves and canopy drawings.
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
                      placeholder="e.g. Rajesh Reddy"
                      className="w-full bg-[#F8F9FF] border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                      Company / Facility Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex IT Infrastructure"
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
                      Corporate Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@enterprise.com"
                      className="w-full bg-[#F8F9FF] border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                      Required kVA Capacity *
                    </label>
                    <select
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleChange}
                      className="w-full bg-[#F8F9FF] border border-slate-300 rounded-[2px] px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#00163D]"
                    >
                      <option value="25 kVA - 30 kVA">25 kVA - 30 kVA (Commercial Prime)</option>
                      <option value="62.5 kVA - 82.5 kVA">62.5 kVA - 82.5 kVA (Heavy Commercial)</option>
                      <option value="125 kVA">125 kVA (Mid Industrial)</option>
                      <option value="250 kVA">250 kVA (Heavy Industrial)</option>
                      <option value="500 kVA Flagship">500 kVA Flagship (Critical IT/Hospital)</option>
                      <option value="750 - 3750 kVA High Horsepower">750 - 3750 kVA (High Horsepower)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                      Nature of Requirement *
                    </label>
                    <select
                      name="requirementNature"
                      value={formData.requirementNature}
                      onChange={handleChange}
                      className="w-full bg-[#F8F9FF] border border-slate-300 rounded-[2px] px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#00163D]"
                    >
                      <option value="New DG Purchase & Installation">New DG Purchase &amp; Installation</option>
                      <option value="Turnkey Substation & Synchronizing">Turnkey Substation &amp; Synchronizing</option>
                      <option value="Replacement / Buyback Existing Set">Replacement / Buyback Existing Set</option>
                      <option value="Comprehensive Lifetime AMC Contract">Comprehensive Lifetime AMC Contract</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#00163D] uppercase tracking-wider mb-1">
                    Site Location / Facility Address *
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
                    className="w-full h-12 bg-[#00163D] hover:bg-[#0F2B5C] disabled:opacity-50 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>DISPATCHING PROPOSAL...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT FOR DIRECT FACTORY CUMMINS PRICE QUOTE &amp; SIZING AUDIT</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-slate-500 text-[11px] font-karla">
                    <Lock className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>Your data is confidential and protected. Authorized Greaves &amp; Multi-Brand Power Distributors.</span>
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
