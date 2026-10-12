import React, { useState, useEffect } from 'react';
import { Send, Lock, ShieldCheck } from 'lucide-react';
import {
  VERTICAL_PILLS,
  BRAND_OPTIONS,
  CAPACITY_OPTIONS,
  TURNKEY_ADDONS,
  type VerticalPill,
  type TurnkeyAddon,
} from './quotePortalData';
import { submitContactRequirement } from '../../core/api/contactService';
import { APP_CONFIG } from '../../core/config';
import { QuoteStepClientFacility } from './QuoteStepClientFacility';
import { QuoteStepTechnicalSizing } from './QuoteStepTechnicalSizing';
import { QuoteSuccessModal } from './QuoteSuccessModal';

interface QuoteProformaFormProps {
  externalCapacity?: string;
  externalNotes?: string;
}

export const QuoteProformaForm: React.FC<QuoteProformaFormProps> = ({
  externalCapacity,
  externalNotes,
}) => {
  const [selectedVerticals, setSelectedVerticals] = useState<string[]>(['Sales']);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [siteLocation, setSiteLocation] = useState('');
  const [brandChoice, setBrandChoice] = useState(BRAND_OPTIONS[0]);
  const [capacityRange, setCapacityRange] = useState(CAPACITY_OPTIONS[0]);
  const [coolingType, setCoolingType] = useState('Water Cooled');
  const [dutyCycle, setDutyCycle] = useState('Standby Backup');
  const [turnkeyScope, setTurnkeyScope] = useState<string[]>(['amf']);
  const [projectNotes, setProjectNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  useEffect(() => {
    if (externalCapacity) {
      const match = CAPACITY_OPTIONS.find((c) => c.includes(externalCapacity));
      setCapacityRange(match || externalCapacity);
    }
  }, [externalCapacity]);

  useEffect(() => {
    if (externalNotes) {
      setProjectNotes((prev) => (prev ? `${prev}\n\n${externalNotes}` : externalNotes));
    }
  }, [externalNotes]);

  const toggleVertical = (id: string) => {
    setSelectedVerticals((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const toggleTurnkey = (id: string) => {
    setTurnkeyScope((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setLoading(true);
    try {
      await submitContactRequirement({
        fullName: clientName,
        phone: clientPhone,
        serviceType: `Commercial Quote: ${selectedVerticals.join(', ')} - ${capacityRange}`,
        message: `Company: ${clientCompany} | Email: ${clientEmail} | Location: ${siteLocation} | Brand: ${brandChoice} | Cooling: ${coolingType} | Duty: ${dutyCycle} | Turnkey: ${turnkeyScope.join(', ')} | Notes: ${projectNotes}`,
      });
      setIsSuccessOpen(true);
    } catch {
      setIsSuccessOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-md space-y-6 relative border border-slate-200 select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <span className="text-[#385BAB] font-rubik text-xs uppercase tracking-wider font-bold">
            PROFORMA SPECIFICATION BUILDER
          </span>
          <h2 className="font-rubik text-xl sm:text-2xl text-[#00163D] uppercase leading-tight font-bold">
            Configure Your Power Requirement
          </h2>
        </div>
        <span className="inline-flex items-center gap-1.5 bg-[#EFF4FF] px-3 py-1 rounded text-[#00163D] font-rubik text-xs font-bold self-start sm:self-auto">
          <Lock className="w-3.5 h-3.5 text-amber-500" />
          Verified Safe &amp; Direct Pricing
        </span>
      </div>

      <form id="quoteRequestForm" onSubmit={handleSubmit} className="space-y-6">
        {/* STEP 0: NATURE OF REQUIREMENT PILLS */}
        <div className="space-y-2">
          <label className="font-rubik text-xs uppercase tracking-wider text-[#00163D] block font-bold">
            1. Select Vertical / Nature of Requirement <span className="text-red-600">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {VERTICAL_PILLS.map((pill: VerticalPill) => {
              const active = selectedVerticals.includes(pill.id);
              return (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => toggleVertical(pill.id)}
                  className={`p-3 text-center rounded-xl transition-all shadow-2xs font-rubik text-xs uppercase font-bold cursor-pointer ${
                    active
                      ? 'bg-[#00163D] text-white shadow-sm ring-2 ring-[#00163D]/20'
                      : 'bg-[#F8F9FF] text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span className="block text-[11px] leading-tight">{pill.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 1: CLIENT & FACILITY PROFILE */}
        <QuoteStepClientFacility
          clientName={clientName}
          setClientName={setClientName}
          clientEmail={clientEmail}
          setClientEmail={setClientEmail}
          clientPhone={clientPhone}
          setClientPhone={setClientPhone}
          clientCompany={clientCompany}
          setClientCompany={setClientCompany}
          siteLocation={siteLocation}
          setSiteLocation={setSiteLocation}
        />

        {/* STEP 2: TECHNICAL SIZING & BRAND */}
        <QuoteStepTechnicalSizing
          brandChoice={brandChoice}
          setBrandChoice={setBrandChoice}
          capacityRange={capacityRange}
          setCapacityRange={setCapacityRange}
          coolingType={coolingType}
          setCoolingType={setCoolingType}
          dutyCycle={dutyCycle}
          setDutyCycle={setDutyCycle}
        />

        {/* STEP 3: TURNKEY SCOPE & LOGISTICS */}
        <div className="bg-[#F8F9FF] p-5 rounded-2xl space-y-4 border border-slate-200/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00163D] text-white flex items-center justify-center font-bold text-xs">
                3
              </span>
              <h3 className="font-rubik text-sm text-[#00163D] uppercase font-bold">
                Turnkey Erection &amp; Statutory Scope
              </h3>
            </div>
            <span className="font-karla text-[11px] text-slate-500 font-semibold">Optional Add-ons</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {TURNKEY_ADDONS.map((addon: TurnkeyAddon) => {
              const checked = turnkeyScope.includes(addon.id);
              return (
                <label
                  key={addon.id}
                  className="flex items-start gap-2.5 p-3 bg-white rounded-xl border border-slate-200 cursor-pointer shadow-2xs hover:border-[#00163D] transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleTurnkey(addon.id)}
                    className="mt-1 accent-[#00163D] rounded"
                  />
                  <div>
                    <span className="font-rubik text-xs uppercase font-bold text-[#00163D] block leading-tight">
                      {addon.title}
                    </span>
                    <span className="font-karla text-[11px] text-slate-500 leading-tight block mt-0.5">
                      {addon.description}
                    </span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* STEP 4: LOAD SCHEDULE & TEXTAREA */}
        <div className="space-y-1">
          <label className="font-rubik text-xs uppercase text-[#00163D] font-bold block">
            Additional Technical Notes / Connected Load Details
          </label>
          <textarea
            rows={3}
            value={projectNotes}
            onChange={(e) => setProjectNotes(e.target.value)}
            placeholder="Provide motor HP, chiller tonnage, DG room dimensions, or specific delivery timeline constraints..."
            className="w-full p-3 bg-[#F8F9FF] border border-slate-200 rounded-xl text-xs font-karla focus:outline-none focus:border-[#00163D]"
          />
        </div>

        {/* SUBMIT BUTTON */}
        <div className="space-y-2 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#00163D] text-white hover:bg-[#0F2B5C] disabled:opacity-50 rounded-xl font-rubik text-xs uppercase tracking-wider font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Send className="w-4 h-4 text-amber-400" />
            <span>
              {loading
                ? 'COMPUTING SPECIFICATION PROFORMA...'
                : 'SUBMIT QUOTATION REQUEST & LOCK FACTORY PRICING'}
            </span>
          </button>

          <div className="flex flex-wrap items-center justify-between text-xs font-karla text-slate-500 gap-2 pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Zero spam commitment. Strict NDA engineering data privacy.
            </span>
            <span className="text-[#00163D] font-bold">
              SLA Hotline: +91-{APP_CONFIG.phonePrimary} (Sanathnagar Central)
            </span>
          </div>
        </div>
      </form>

      {/* SUCCESS OVERLAY MODAL */}
      <QuoteSuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
      />
    </div>
  );
};
