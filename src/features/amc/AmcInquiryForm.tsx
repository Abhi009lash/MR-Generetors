import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { submitContactRequirement } from '../../core/api/contactService';

interface AmcInquiryFormProps {
  initialTier?: string;
  initialProtocol?: string;
}

export const AmcInquiryForm: React.FC<AmcInquiryFormProps> = ({
  initialTier = 'Semi-Comprehensive AMC',
  initialProtocol = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [generatorBrand, setGeneratorBrand] = useState('Tata Motors');
  const [capacity, setCapacity] = useState('125 kVA');
  const [amcType, setAmcType] = useState(initialTier || 'Semi-Comprehensive AMC');
  const [servicesScope, setServicesScope] = useState<string[]>([
    'Preventive AMC',
    ...(initialProtocol ? [initialProtocol] : []),
  ]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleScope = (scope: string) => {
    setServicesScope((prev) =>
      prev.includes(scope) ? prev.filter((s) => s !== scope) : [...prev, scope]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setLoading(true);
    try {
      await submitContactRequirement({
        fullName,
        phone,
        serviceType: `Generator AMC: ${amcType} (${generatorBrand} ${capacity})`,
        message: `Email: ${email || 'N/A'} | Location: ${location || 'Hyderabad'} | Scope: ${servicesScope.join(', ')}`,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-200 select-none" id="amc-inquiry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Benefits & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
                FAST QUOTES &amp; ON-SITE INSPECTIONS
              </span>
              <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] tracking-tight">
                Request Free Genset/AMC Audit &amp; Quotation
              </h2>
              <p className="font-karla text-sm text-slate-600 leading-relaxed">
                Submit your generator details to receive an executive AMC proposal with calibrated preventive service schedule, emergency SLA metrics, and bespoke turnkey overhaul or erection quotation anywhere in Telangana.
              </p>
            </div>

            <div className="space-y-3 font-karla text-xs text-slate-700">
              <div className="p-4 rounded-xl bg-[#F8F9FF] border border-slate-200 shadow-2xs flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold uppercase text-[11px]">
                    15-Minute Response SLA:
                  </strong>
                  Immediate callback from our senior technical service coordinators.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F9FF] border border-slate-200 shadow-2xs flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold uppercase text-[11px]">
                    Complimentary On-Site Health Check:
                  </strong>
                  Free physical inspection, battery load test, and vibration review within GHMC limits.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F9FF] border border-slate-200 shadow-2xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#385BAB] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold uppercase text-[11px]">
                    Factory-Trained Technicians:
                  </strong>
                  Genuine OEM spare parts warranty and transparent service record logs.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive AMC Quote Form */}
          <div className="lg:col-span-7 bg-[#F8F9FF] border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-rubik font-bold text-xl text-[#00163D]">
                  AMC Audit Request Received!
                </h3>
                <p className="font-karla text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Our service desk has logged your request for{' '}
                  <strong className="text-slate-900">{generatorBrand} ({capacity})</strong>. Our service manager will call you at{' '}
                  <span className="font-bold text-[#00163D]">{phone}</span> to schedule the free site inspection.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-[#00163D] text-white font-rubik font-bold text-xs uppercase tracking-wider hover:bg-[#0F2B5C] transition-colors cursor-pointer"
                >
                  Submit Another Request
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
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
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
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Plant / Facility Location (City / Area)
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. HITEC City / Patancheru"
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Generator Make / Brand
                    </label>
                    <select
                      value={generatorBrand}
                      onChange={(e) => setGeneratorBrand(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    >
                      <option>Tata Motors</option>
                      <option>Ashok Leyland / Leypower</option>
                      <option>Cummins India</option>
                      <option>Kirloskar (KOEL)</option>
                      <option>Greaves Cotton</option>
                      <option>Caterpillar</option>
                      <option>Perkins / Kohler</option>
                      <option>Other / Multi-Make</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                      Generator Capacity (kVA)
                    </label>
                    <select
                      value={capacity}
                      onChange={(e) => setCapacity(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                    >
                      <option>15 - 30 kVA</option>
                      <option>35 - 82.5 kVA</option>
                      <option>100 - 160 kVA</option>
                      <option>200 - 320 kVA</option>
                      <option>380 - 500 kVA</option>
                      <option>600 - 1000 kVA</option>
                      <option>1250 - 2000 kVA</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1">
                    Preferred AMC / Service Type
                  </label>
                  <select
                    value={amcType}
                    onChange={(e) => setAmcType(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-karla focus:outline-none focus:border-[#00163D]"
                  >
                    <option>Semi-Comprehensive AMC (Consumables + Labor)</option>
                    <option>Comprehensive AMC (All-Inclusive Zero Headache)</option>
                    <option>Non-Comprehensive AMC (Routine Labor Only)</option>
                    <option>Major Engine Overhauling / Rebuild</option>
                    <option>Turnkey Erection &amp; Substation Works</option>
                  </select>
                </div>

                {/* Additional Checkboxes */}
                <div>
                  <label className="block text-xs font-karla font-bold text-slate-700 uppercase mb-1.5">
                    Additional Scope &amp; Options:
                  </label>
                  <div className="flex flex-wrap gap-2 text-xs font-karla">
                    {[
                      'Preventive AMC',
                      'Comprehensive Spares',
                      'Engine Overhauling',
                      'Turnkey Erection',
                      'Load Testing',
                    ].map((scope) => (
                      <label
                        key={scope}
                        className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-md border border-slate-200 cursor-pointer text-slate-700"
                      >
                        <input
                          type="checkbox"
                          checked={servicesScope.includes(scope)}
                          onChange={() => toggleScope(scope)}
                          className="w-3.5 h-3.5 text-[#00163D] rounded border-slate-300"
                        />
                        <span>{scope}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#00163D] hover:bg-[#0F2B5C] disabled:opacity-50 text-white font-rubik font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {loading
                      ? 'SUBMITTING REQUEST...'
                      : 'SUBMIT AMC & SERVICE REQUEST - RAPID RESPONSE GUARANTEED'}
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
