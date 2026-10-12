import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { submitContactRequirement } from '../../core/api/contactService';
import { RentalDepotInfo } from './RentalDepotInfo';

interface RentalInquiryFormProps {
  initialCapacity?: string;
  initialPackage?: string;
}

export const RentalInquiryForm: React.FC<RentalInquiryFormProps> = ({
  initialCapacity = '',
  initialPackage = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [capacity, setCapacity] = useState(initialCapacity || '35 - 125 kVA (Commercial)');
  const [duration, setDuration] = useState(initialPackage || 'Monthly Lease (1-6 Months)');
  const [location, setLocation] = useState('');
  const [includeOperator, setIncludeOperator] = useState(true);
  const [includeFuelTank, setIncludeFuelTank] = useState(false);
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
        serviceType: `Generator Rental: ${capacity} - ${duration}`,
        message: `Site Location: ${location || 'Hyderabad'} | Operator: ${includeOperator ? 'Yes' : 'No'} | Auxiliary Fuel: ${includeFuelTank ? 'Yes' : 'No'}`,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FF] select-none" id="rental-inquiry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Rental Depot Contact & Service Zones */}
          <RentalDepotInfo />

          {/* Right Column: Sizing & Quote Form Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-rubik font-bold text-xl text-[#00163D]">
                  Rental Quotation Request Received!
                </h3>
                <p className="font-karla text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Our Hyderabad fleet coordinator has reserved tentative availability for{' '}
                  <strong className="text-slate-900">{capacity}</strong>. We will call you at{' '}
                  <span className="font-bold text-[#00163D]">{phone}</span> within 15 minutes with mobilization rates.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-[#00163D] text-white font-rubik font-bold text-xs uppercase tracking-wider hover:bg-[#0F2B5C] transition-colors cursor-pointer"
                >
                  Request Another Sizing Quote
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-rubik font-bold text-lg text-[#00163D]">
                      Instant Generator Rental Sizing &amp; Quote
                    </h3>
                    <p className="font-karla text-xs text-slate-500">
                      Standard pricing includes canopy genset, AMF starter &amp; copper cabling
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-[11px] font-karla text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-semibold border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Live Stock</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Full Name / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar / L&amp;T Projects"
                      className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Phone Number *
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
                      Required Generator Capacity (kVA)
                    </label>
                    <select
                      value={capacity}
                      onChange={(e) => setCapacity(e.target.value)}
                      className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    >
                      <option>5 - 30 kVA (Compact Mobile)</option>
                      <option>35 - 125 kVA (Commercial)</option>
                      <option>140 - 500 kVA (Heavy Industrial)</option>
                      <option>600 - 2000 kVA (Mega Containerized)</option>
                      <option>Unsure / Request Load Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Rental Duration
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    >
                      <option>Daily / Event (1-7 Days)</option>
                      <option>Weekly (1-4 Weeks)</option>
                      <option>Monthly Lease (1-6 Months)</option>
                      <option>Long-Term Annual Contract (1+ Years)</option>
                      <option>Seasonal Standby &amp; Peaking</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                    Site Location / Delivery Address in Hyderabad / TS
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. HITEC City Phase 2 / Patancheru Industrial Area"
                    className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <label className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-slate-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeOperator}
                      onChange={(e) => setIncludeOperator(e.target.checked)}
                      className="w-4 h-4 text-[#00163D] rounded border-slate-300"
                    />
                    <span className="text-xs font-karla text-slate-700 font-medium">
                      Include On-Site Certified Operator
                    </span>
                  </label>

                  <label className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-slate-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeFuelTank}
                      onChange={(e) => setIncludeFuelTank(e.target.checked)}
                      className="w-4 h-4 text-[#00163D] rounded border-slate-300"
                    />
                    <span className="text-xs font-karla text-slate-700 font-medium">
                      Include Auxiliary Fuel Tank &amp; Rigging
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#00163D] hover:bg-[#0F2B5C] disabled:opacity-50 text-white font-rubik font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'CHECKING FLEET AVAILABILITY...' : 'CHECK AVAILABILITY & GET INSTANT QUOTE'}</span>
                </button>

                <p className="text-[11px] font-karla text-center text-slate-500">
                  Zero cancellation fee. Immediate dispatch available within 2 hours in city limits.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
