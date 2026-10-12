import React, { useState } from 'react';
import { Send, Lock, CheckCircle2, AlertCircle, Loader2, Sparkles, ExternalLink } from 'lucide-react';
import { submitContactRequirement } from '../../core/api/contactService';
import type { ContactSubmissionPayload, ContactSubmissionResult } from '../../types';

export const ConsultationFormCard: React.FC = () => {
  const [formData, setFormData] = useState<ContactSubmissionPayload>({
    fullNameAndDesignation: '',
    corporateEmail: '',
    mobileNumber: '',
    requirementClassification: '',
    preferredEnginePlatform: '',
    siteLocationAndLoadSpecs: '',
    whatsappPdfOptIn: true,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ContactSubmissionResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.fullNameAndDesignation || !formData.corporateEmail || !formData.mobileNumber) {
      setErrorMsg('Please complete all mandatory fields marked with an asterisk (*).');
      return;
    }

    if (!formData.requirementClassification) {
      setErrorMsg('Please select your Requirement Classification.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await submitContactRequirement(formData);
      setResult(res);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to submit requirement. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setErrorMsg(null);
    setFormData({
      fullNameAndDesignation: '',
      corporateEmail: '',
      mobileNumber: '',
      requirementClassification: '',
      preferredEnginePlatform: '',
      siteLocationAndLoadSpecs: '',
      whatsappPdfOptIn: true,
    });
  };

  return (
    <div className="bg-white rounded-[2px] border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#EEF2F6] text-[#00163D] text-[11px] font-karla font-bold uppercase tracking-wider rounded-[2px] mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
          <span>FAST TURNAROUND DISPATCH</span>
        </div>
        <h2 className="font-rubik font-bold text-2xl text-[#00163D] uppercase tracking-tight">
          DIRECT DISPATCH &amp; TECHNICAL CONSULTATION
        </h2>
        <p className="font-karla text-xs sm:text-sm text-slate-600 mt-1">
          Fill out your facility electrical requirements below to trigger automated technical fleet assignment within 15 minutes.
        </p>
      </div>

      {result ? (
        /* Success State */
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-[2px] space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-rubik font-bold text-lg text-emerald-950 uppercase">
                Requirement Dispatched Successfully
              </h3>
              <p className="font-karla text-sm text-emerald-800 mt-1">
                Your request has been routed to our Hyderabad field dispatch controller. A dedicated application engineer is preparing your technical proposal.
              </p>
              <div className="mt-3 p-3 bg-white/80 rounded border border-emerald-200 font-mono text-xs text-emerald-900 space-y-1">
                <p><strong>Tracking Ref ID:</strong> {result.referenceId}</p>
                <p><strong>Logged At:</strong> {new Date(result.timestamp).toLocaleTimeString()} ({new Date(result.timestamp).toLocaleDateString()})</p>
                {result.previewUrl && (
                  <p className="pt-1">
                    <a
                      href={result.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 underline hover:text-blue-800"
                    >
                      <span>View Nodemailer Dispatch Ethereal Preview</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="w-full py-2.5 bg-[#00163D] hover:bg-[#0F2B5C] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer"
          >
            SUBMIT ANOTHER REQUIREMENT
          </button>
        </div>
      ) : (
        /* Form */
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-[2px] flex items-center gap-2 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700 mb-1.5">
                Full Name &amp; Designation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullNameAndDesignation}
                onChange={(e) => setFormData({ ...formData, fullNameAndDesignation: e.target.value })}
                placeholder="e.g. Rajesh Reddy (Facility Lead)"
                className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-[2px] text-sm text-slate-900 focus:bg-white focus:border-[#00163D] focus:outline-hidden transition-colors"
              />
            </div>

            <div>
              <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700 mb-1.5">
                Corporate Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.corporateEmail}
                onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                placeholder="e.g. rajesh@infrastructure.in"
                className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-[2px] text-sm text-slate-900 focus:bg-white focus:border-[#00163D] focus:outline-hidden transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700 mb-1.5">
                Mobile / WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <span className="h-11 px-3 bg-slate-200 border border-r-0 border-slate-300 rounded-l-[2px] flex items-center text-xs font-bold text-slate-700">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  placeholder="9876543210"
                  className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-r-[2px] text-sm text-slate-900 focus:bg-white focus:border-[#00163D] focus:outline-hidden transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700 mb-1.5">
                Requirement Classification <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.requirementClassification}
                onChange={(e) => setFormData({ ...formData, requirementClassification: e.target.value })}
                className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-[2px] text-sm text-slate-900 focus:bg-white focus:border-[#00163D] focus:outline-hidden transition-colors"
              >
                <option value="">Select Requirement...</option>
                <option value="New DG Set Purchase & Installation">New DG Set Purchase &amp; Installation</option>
                <option value="Emergency DG Rental Backup">Emergency DG Rental Backup</option>
                <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                <option value="Genuine OEM Spares & Consumables">Genuine OEM Spares &amp; Consumables</option>
                <option value="Turnkey Substation & Synchronization">Turnkey Substation &amp; Synchronization</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700 mb-1.5">
              Preferred Engine / OEM Platform (Optional)
            </label>
            <select
              value={formData.preferredEnginePlatform}
              onChange={(e) => setFormData({ ...formData, preferredEnginePlatform: e.target.value })}
              className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-[2px] text-sm text-slate-900 focus:bg-white focus:border-[#00163D] focus:outline-hidden transition-colors"
            >
              <option value="">Select Engine Platform (Optional)...</option>
              <option value="Greaves Power (Authorised Dealer)">Greaves Power (Authorised Dealer)</option>
              <option value="Cummins Power Generation">Cummins Power Generation</option>
              <option value="Kirloskar Oil Engines">Kirloskar Oil Engines</option>
              <option value="Ashok Leyland Industrial">Ashok Leyland Industrial</option>
              <option value="Mahindra Powerol">Mahindra Powerol</option>
              <option value="Perkins / Caterpillar">Perkins / Caterpillar</option>
              <option value="Any Standard Recommended OEM">Any Standard Recommended OEM</option>
            </select>
          </div>

          <div>
            <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-700 mb-1.5">
              Site Location &amp; Load Specifications
            </label>
            <textarea
              rows={3}
              value={formData.siteLocationAndLoadSpecs}
              onChange={(e) => setFormData({ ...formData, siteLocationAndLoadSpecs: e.target.value })}
              placeholder="Provide site location (e.g. Gachibowli, Patancheru), required kVA or running load details, phase requirements, or issue symptoms..."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-[2px] text-sm text-slate-900 focus:bg-white focus:border-[#00163D] focus:outline-hidden transition-colors resize-y"
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-2.5 cursor-pointer select-none text-xs text-slate-600">
            <input
              type="checkbox"
              checked={formData.whatsappPdfOptIn}
              onChange={(e) => setFormData({ ...formData, whatsappPdfOptIn: e.target.checked })}
              className="mt-0.5 rounded text-[#00163D] focus:ring-0"
            />
            <span>
              Send formal engineering quotation, compliance approvals &amp; technical datasheets via WhatsApp (PDF)
            </span>
          </label>

          {/* Submit CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto px-6 h-12 bg-[#385BAB] hover:bg-[#2B4B96] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98 cursor-pointer disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>TRANSMITTING VIA NODEMAILER...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>SUBMIT REQUIREMENT &amp; GET CALL-BACK IN 15 MINUTES</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-karla">
              <Lock className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Encrypted &amp; Confidential Utility Appraisal</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
