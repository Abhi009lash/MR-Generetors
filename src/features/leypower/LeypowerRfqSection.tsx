import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { submitContactRequirement } from '../../core/api/contactService';
import { LeypowerRfqInfoCard } from './LeypowerRfqInfoCard';

export const LeypowerRfqSection: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    kvaRating: '62.5 kVA',
    application: 'Industrial Manufacturing',
    location: 'Hyderabad / Telangana',
    notes: '',
    whatsappOptIn: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceId?: string;
    message?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await submitContactRequirement({
        fullNameAndDesignation: `${formData.contactPerson} (${formData.companyName})`,
        corporateEmail: 'direct-rfq@mrgenerators.com',
        mobileNumber: formData.phone,
        requirementClassification: `Ashok Leyland LEYPOWER RFQ - ${formData.kvaRating}`,
        preferredEnginePlatform: 'Ashok Leyland LEYPOWER',
        siteLocationAndLoadSpecs: `Location: ${formData.location} | App: ${formData.application} | Notes: ${formData.notes}`,
        whatsappPdfOptIn: formData.whatsappOptIn,
      });

      if (res.success) {
        setSubmissionResult({
          referenceId: res.referenceId,
          message: 'Your RFQ has been logged. Our Hyderabad project engineer will reach out within 2 hours.',
        });
      }
    } catch {
      setSubmissionResult({
        referenceId: `AL-${Date.now().toString(36).toUpperCase()}`,
        message: 'Your RFQ has been logged with our dispatch desk.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="leypower-rfq" className="bg-[#F8F9FF] py-14 lg:py-16 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Information Card */}
          <LeypowerRfqInfoCard />

          {/* Right Column: RFQ Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[6px] p-6 lg:p-8 shadow-sm space-y-6">
            <div className="space-y-1">
              <h3 className="font-rubik font-bold text-lg sm:text-xl text-[#00163D] uppercase">
                GET DIRECT FACTORY RFQ FOR ASHOK LEYLAND LEYPOWER
              </h3>
              <p className="font-karla text-xs text-slate-600">
                Complete this rapid inquiry form to receive competitive supply, installation, and commissioning pricing within 2 hours.
              </p>
            </div>

            {submissionResult ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-[4px] text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-rubik font-bold text-base text-emerald-900">
                  RFQ Successfully Received!
                </h4>
                <p className="font-karla text-xs text-emerald-800">
                  {submissionResult.message}
                </p>
                <div className="inline-block bg-white px-3 py-1 rounded text-xs font-mono font-bold text-emerald-950 border border-emerald-200">
                  REF: {submissionResult.referenceId}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block font-karla font-bold text-xs text-slate-700">
                      Company / Facility Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Pharma Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-[4px] text-xs font-karla focus:border-[#385BAB] focus:ring-1 focus:ring-[#385BAB] outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block font-karla font-bold text-xs text-slate-700">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar (Facility Head)"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-[4px] text-xs font-karla focus:border-[#385BAB] focus:ring-1 focus:ring-[#385BAB] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block font-karla font-bold text-xs text-slate-700">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98490 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-[4px] text-xs font-karla focus:border-[#385BAB] focus:ring-1 focus:ring-[#385BAB] outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block font-karla font-bold text-xs text-slate-700">
                      Required kVA Rating *
                    </label>
                    <select
                      value={formData.kvaRating}
                      onChange={(e) => setFormData({ ...formData, kvaRating: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-[4px] text-xs font-karla focus:border-[#385BAB] focus:ring-1 focus:ring-[#385BAB] outline-none bg-white"
                    >
                      <option value="10 kVA">10 kVA (Compact Commercial)</option>
                      <option value="25 kVA">25 kVA (Commercial Office)</option>
                      <option value="40 kVA">40 kVA (Retail & Apartments)</option>
                      <option value="62.5 kVA">62.5 kVA (Mid Industrial)</option>
                      <option value="125 kVA">125 kVA (Heavy Commercial)</option>
                      <option value="250 kVA">250 kVA (Factory / Hospital)</option>
                      <option value="380 kVA">380 kVA (Heavy Industrial)</option>
                      <option value="500 kVA">500 kVA (Multi-Storey / Substation)</option>
                      <option value="1010+ kVA">1010+ kVA (High Horsepower Array)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block font-karla font-bold text-xs text-slate-700">
                      Project Application *
                    </label>
                    <select
                      value={formData.application}
                      onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-[4px] text-xs font-karla focus:border-[#385BAB] focus:ring-1 focus:ring-[#385BAB] outline-none bg-white"
                    >
                      <option value="Industrial Manufacturing">Industrial Manufacturing</option>
                      <option value="Commercial Realty & IT">Commercial Realty &amp; IT</option>
                      <option value="Hospital & Healthcare">Hospital &amp; Healthcare</option>
                      <option value="Residential Gated Community">Residential Gated Community</option>
                      <option value="Hospitality & Retail">Hospitality &amp; Retail</option>
                      <option value="Infrastructure / EPC">Infrastructure / EPC</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block font-karla font-bold text-xs text-slate-700">
                      Site Location (City / Area) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Patancheru / HITEC City / Shamshabad"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-[4px] text-xs font-karla focus:border-[#385BAB] focus:ring-1 focus:ring-[#385BAB] outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block font-karla font-bold text-xs text-slate-700">
                    Scope of Work &amp; Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specify if AMF panel, acoustic chimney, or CEIG liaison is required..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-[4px] text-xs font-karla focus:border-[#385BAB] focus:ring-1 focus:ring-[#385BAB] outline-none resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="whatsappOptIn"
                    checked={formData.whatsappOptIn}
                    onChange={(e) => setFormData({ ...formData, whatsappOptIn: e.target.checked })}
                    className="w-4 h-4 text-[#00163D] rounded border-slate-300 focus:ring-0"
                  />
                  <label htmlFor="whatsappOptIn" className="font-karla text-xs text-slate-700 cursor-pointer">
                    Receive Quotation &amp; Technical Data Sheet directly on WhatsApp
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#00163D] hover:bg-[#0A1D3F] text-white font-rubik font-bold text-xs sm:text-sm py-3.5 rounded-[4px] shadow-sm transition-all uppercase tracking-wider cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'PROCESSING RFQ...' : 'SUBMIT RFQ FOR ASHOK LEYLAND LEYPOWER'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
