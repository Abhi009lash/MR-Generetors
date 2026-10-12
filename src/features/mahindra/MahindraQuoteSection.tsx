import React, { useState } from 'react';
import { Send, CheckCircle2, Clock, ShieldCheck, Tag } from 'lucide-react';
import { submitContactRequirement } from '../../core/api/contactService';

interface MahindraQuoteSectionProps {
  initialCapacity?: string;
}

export const MahindraQuoteSection: React.FC<MahindraQuoteSectionProps> = ({
  initialCapacity = '45 - 82.5 kVA',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState(initialCapacity || '45 - 82.5 kVA');
  const [applicationType, setApplicationType] = useState('Commercial Building');
  const [notes, setNotes] = useState('');
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
        serviceType: `Mahindra Powerol DG Enquiry: ${capacity} (${applicationType})`,
        message: `Email: ${email || 'N/A'} | Location: ${location || 'Hyderabad'} | Notes: ${notes || 'None'}`,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#0A1D3F] text-white select-none" id="mahindra-quote">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-rubik font-bold uppercase tracking-wider bg-[#DC2626] text-white">
                FAST TURNAROUND IN 15 MINS
              </span>
              <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Request Instant Mahindra DG Proposal &amp; Load Audit
              </h2>
              <p className="font-karla text-sm text-slate-300 leading-relaxed">
                Submit your requirement details and our senior application engineers will calculate your peak and continuous kVA demand, providing a transparent, factory-direct quotation within 15 minutes.
              </p>
            </div>

            <div className="space-y-3.5 font-karla text-xs text-slate-200">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold uppercase text-[11px]">
                    15-Minute Response SLA:
                  </strong>
                  Priority direct connection with our dedicated Mahindra application engineering desk.
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold uppercase text-[11px]">
                    Free Site Feasibility &amp; Load Audit:
                  </strong>
                  Complimentary physical site inspection anywhere in Hyderabad, Secunderabad &amp; Telangana.
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                <Tag className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold uppercase text-[11px]">
                    Best-in-Market Dealership Pricing:
                  </strong>
                  Direct manufacturer authorized pricing with flexible turnkey financing options.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Proposal Request Form */}
          <div className="lg:col-span-7 bg-white text-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-rubik font-bold text-xl text-[#00163D]">
                  Proposal Request Submitted!
                </h3>
                <p className="font-karla text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you! Our technical sales engineer is preparing your quotation for{' '}
                  <strong className="text-slate-900">{capacity}</strong>. We will call you at{' '}
                  <span className="font-bold text-[#00163D]">{phone}</span> within 15 minutes.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-[#00163D] text-white font-rubik font-bold text-xs uppercase tracking-wider hover:bg-[#0F2B5C] transition-colors cursor-pointer"
                >
                  Submit Another Sizing
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Full Name / Organization *
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
                      Mobile Number / WhatsApp *
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
                      Official Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Installation Location (City / District)
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. HITEC City / Patancheru"
                      className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Generator Capacity Range (kVA)
                    </label>
                    <select
                      value={capacity}
                      onChange={(e) => setCapacity(e.target.value)}
                      className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    >
                      <option>5 - 15 kVA (Single/3 Phase)</option>
                      <option>20 - 40 kVA (Commercial)</option>
                      <option>45 - 82.5 kVA (Commercial Prime)</option>
                      <option>100 - 160 kVA (Heavy Duty)</option>
                      <option>200 - 320 kVA (Prime Power)</option>
                      <option>380 - 500 kVA (Mega Industrial)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Application Type
                    </label>
                    <select
                      value={applicationType}
                      onChange={(e) => setApplicationType(e.target.value)}
                      className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    >
                      <option>Commercial Building / Offices</option>
                      <option>Manufacturing / Factory Plant</option>
                      <option>Hospital / Critical Healthcare</option>
                      <option>Residential Society / High-Rise</option>
                      <option>Infrastructure / Construction</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                    Message / Project Details (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Provide details on expected duty cycle, AMF panel requirements, or delivery schedule..."
                    className="w-full bg-[#F8F9FF] border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#DC2626] hover:bg-red-700 disabled:opacity-50 text-white font-rubik font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {loading
                      ? 'PREPARING PROPOSAL...'
                      : 'GET INSTANT QUOTE & DETAILED TECHNICAL SPEC (PDF)'}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
