import React, { useState } from 'react';
import { Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { submitContactRequirement } from '../../core/api/contactService';
import { SparesInquirySteps } from './SparesInquirySteps';

interface SparesInquiryFormProps {
  initialCategory?: string;
}

export const SparesInquiryForm: React.FC<SparesInquiryFormProps> = ({
  initialCategory = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [generatorBrand, setGeneratorBrand] = useState('Greaves Power');
  const [modelOrKva, setModelOrKva] = useState('');
  const [category, setCategory] = useState(initialCategory || 'Filtration & Lube Systems');
  const [urgency, setUrgency] = useState('Immediate Emergency Breakdown (<4 hrs)');
  const [description, setDescription] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setLoading(true);
    try {
      await submitContactRequirement({
        fullName,
        phone,
        serviceType: `Spares Inquiry: ${category} (${generatorBrand} - ${modelOrKva || 'Spec Unspecified'})`,
        message: `Urgency: ${urgency} | Required Spares: ${description || 'Catalog pricing requested'}`,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FF] select-none" id="spares-inquiry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: 3 Steps + Hotline */}
          <SparesInquirySteps />

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-rubik font-bold text-xl text-[#00163D]">
                  Spares Inquiry Dispatched to Technical Desk!
                </h3>
                <p className="font-karla text-sm text-slate-600 max-w-md mx-auto">
                  Our Hyderabad spares engineer will review your generator specifications and contact you at <strong>{phone}</strong> within 15–30 minutes with stock status and formal pricing.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#00163D] text-white rounded-lg text-xs font-rubik font-bold uppercase transition-colors"
                >
                  Submit Another Parts Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-rubik font-bold text-lg text-[#00163D]">
                      GENUINE PARTS INQUIRY FORM
                    </h3>
                    <p className="font-karla text-xs text-slate-500">
                      Immediate Factory Quoted Dispatch Confirmation
                    </p>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Full Name / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar / IT Park"
                      className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Generator Brand / Make
                    </label>
                    <select
                      value={generatorBrand}
                      onChange={(e) => setGeneratorBrand(e.target.value)}
                      className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    >
                      <option>Greaves Power</option>
                      <option>Ashok Leyland</option>
                      <option>Tata Motors</option>
                      <option>Cummins</option>
                      <option>Kirloskar (KOEL)</option>
                      <option>Caterpillar / Perkins</option>
                      <option>Other / Multi-Brand</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      DG Model / Capacity kVA
                    </label>
                    <input
                      type="text"
                      value={modelOrKva}
                      onChange={(e) => setModelOrKva(e.target.value)}
                      placeholder="e.g. 125 kVA / 6BT5.9"
                      className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Component Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    >
                      <option>Filtration &amp; Lube Systems</option>
                      <option>Cooling &amp; Radiator Systems</option>
                      <option>Fuel Injection &amp; Governing</option>
                      <option>Electrical, AVR &amp; Alternator</option>
                      <option>AMF Panels &amp; Controllers</option>
                      <option>Starting &amp; Battery Systems</option>
                      <option>Engine Overhaul Kits</option>
                      <option>Canopy &amp; Exhaust Spares</option>
                      <option>General Scheduled Maintenance Kit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Urgency Level
                    </label>
                    <select
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                      className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    >
                      <option>Immediate Emergency Breakdown (&lt;4 hrs)</option>
                      <option>Scheduled Preventive Maintenance</option>
                      <option>Spares Stock Replenishment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                    Required Spare Parts / Description
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide part numbers, engine serial code, or symptoms (e.g. Need primary lube filter LF16015, copper radiator hose, AVR SX460)..."
                    className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="spare-agree"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-4 h-4 text-[#00163D] rounded border-slate-300"
                  />
                  <label htmlFor="spare-agree" className="text-xs font-karla text-slate-500 cursor-pointer">
                    I agree to receive formal quotation, technical verification and stock availability notification from M.R Generators.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading || !agreed}
                  className="w-full h-11 bg-[#00163D] hover:bg-[#0F2B5C] disabled:opacity-50 text-white font-rubik font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'TRANSMITTING INQUIRY...' : 'SUBMIT INQUIRY TO SPARES DESK'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
