import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';
import { submitContactRequirement } from '../../core/api/contactService';
import type { ContactSubmissionResult } from '../../types';

export const SalesFastTrackQuoteSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nameOrg: '',
    email: '',
    phone: '',
    capacity: '',
    brand: '',
    details: '',
    optIn: true,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ContactSubmissionResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.nameOrg || !formData.email || !formData.phone || !formData.capacity) {
      setErrorMsg('Please complete all required fields (*).');
      return;
    }

    setIsLoading(true);
    try {
      const res = await submitContactRequirement({
        fullNameAndDesignation: formData.nameOrg,
        corporateEmail: formData.email,
        mobileNumber: formData.phone,
        requirementClassification: `Product Purchase & Sizing: ${formData.capacity}`,
        preferredEnginePlatform: formData.brand || 'Greaves Power / Any Recommended',
        siteLocationAndLoadSpecs: formData.details,
        whatsappPdfOptIn: formData.optIn,
      });
      setResult(res);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/91${APP_CONFIG.phonePrimary}?text=Hi%20MR%20Generators,%20I%20need%20an%20instant%20diesel%20generator%20factory%20sizing%20and%20quotation.`;

  return (
    <section className="bg-[#00163D] text-white py-14 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Consultation Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#D97706]">
                ONLINE FAST-TRACK ENQUIRY
              </span>
              <h2 className="font-rubik font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                REQUEST AN INSTANT FACTORY SIZING &amp; PRICE QUOTE
              </h2>
              <p className="font-karla text-sm text-[#DFE9FB] leading-relaxed">
                Speak directly with our senior application engineers. Receive customized kVA load calculations, technical specification submittals, and formal commercial proposals within 15 minutes.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-3 font-karla text-xs sm:text-sm text-[#DFE9FB] pt-2">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
                <a href={`tel:${APP_CONFIG.phonePrimary}`} className="hover:text-white font-bold">
                  +91 {APP_CONFIG.phonePrimary} / +91 8977778822
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D97706] shrink-0" />
                <a href="mailto:sales@mrgenerators.com" className="hover:text-white">
                  sales@mrgenerators.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>{APP_CONFIG.address.full}</span>
              </div>
            </div>

            {/* WhatsApp Green CTA */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#22C55E] hover:bg-[#16A34A] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all shadow-md active:scale-98"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WHATSAPP DIRECT ENQUIRY (+91 {APP_CONFIG.phonePrimary})</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sizing Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-[4px] p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <h3 className="font-rubik font-bold text-lg text-[#00163D] uppercase tracking-tight">
                DG SIZING &amp; SALES INQUIRY FORM
              </h3>
              <span className="px-2 py-0.5 bg-[#E5EEFF] text-[#00163D] font-karla font-bold text-[10px] uppercase rounded-[2px]">
                DISPATCH READY
              </span>
            </div>

            {result ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-[2px] space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-rubik font-bold text-base text-emerald-950 uppercase">
                      Inquiry Received Successfully
                    </h4>
                    <p className="font-karla text-xs text-emerald-800 mt-1">
                      Our technical sizing desk has received your request. Ref ID: <strong className="font-mono">{result.referenceId}</strong>. A dedicated engineer will contact you shortly.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setResult(null)}
                  className="w-full py-2 bg-[#00163D] text-white font-karla font-bold text-xs uppercase rounded-[2px]"
                >
                  Submit Another Sizing Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-[2px] flex items-center gap-2 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700 mb-1">
                      Full Name &amp; Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nameOrg}
                      onChange={(e) => setFormData({ ...formData, nameOrg: e.target.value })}
                      placeholder="e.g. Suresh Varma (Varma Constructions)"
                      className="w-full h-10 px-3 bg-slate-50 border border-slate-200 rounded-[2px] text-xs text-slate-900 focus:bg-white focus:border-[#00163D] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700 mb-1">
                      Corporate Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="suresh@varmaconstructions.com"
                      className="w-full h-10 px-3 bg-slate-50 border border-slate-200 rounded-[2px] text-xs text-slate-900 focus:bg-white focus:border-[#00163D] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <div className="flex">
                      <span className="h-10 px-2.5 bg-slate-200 border border-r-0 border-slate-300 rounded-l-[2px] flex items-center text-xs font-bold text-slate-700">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="8977778811"
                        className="w-full h-10 px-3 bg-slate-50 border border-slate-200 rounded-r-[2px] text-xs text-slate-900 focus:bg-white focus:border-[#00163D] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700 mb-1">
                      Required kVA Capacity *
                    </label>
                    <select
                      required
                      value={formData.capacity}
                      onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                      className="w-full h-10 px-3 bg-slate-50 border border-slate-200 rounded-[2px] text-xs text-slate-900 focus:bg-white focus:border-[#00163D] focus:outline-hidden"
                    >
                      <option value="">Select Required Capacity...</option>
                      <option value="5 - 62.5 kVA (Compact & Commercial)">5 - 62.5 kVA (Compact &amp; Commercial)</option>
                      <option value="82.5 - 160 kVA (Standard Prime)">82.5 - 160 kVA (Standard Prime)</option>
                      <option value="200 - 500 kVA (Heavy Industrial)">200 - 500 kVA (Heavy Industrial)</option>
                      <option value="750 - 2000 kVA (High-Horsepower Substation)">750 - 2000 kVA (High-Horsepower Substation)</option>
                      <option value="Multi-Megawatt Synchronized Grid">Multi-Megawatt Synchronized Grid</option>
                      <option value="Unsure / Need Engineer Site Survey">Unsure / Need Engineer Site Survey</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700 mb-1">
                    Project Site Location &amp; Load Details
                  </label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Describe installation location (e.g. Sanath Nagar, Patancheru), running load, phase requirements..."
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-[2px] text-xs text-slate-900 focus:bg-white focus:border-[#00163D] focus:outline-hidden resize-y"
                  />
                </div>

                <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-600 select-none">
                  <input
                    type="checkbox"
                    checked={formData.optIn}
                    onChange={(e) => setFormData({ ...formData, optIn: e.target.checked })}
                    className="mt-0.5 rounded text-[#00163D]"
                  />
                  <span>
                    Send complete technical catalog and compliance datasheets via WhatsApp (PDF)
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 bg-[#00163D] hover:bg-[#0F2B5C] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>PROCESSING INQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SUBMIT INQUIRY &amp; RECEIVE PROPOSAL IN 15 MINS</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
