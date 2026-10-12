import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitContactRequirement } from '../../core/api/contactService';

export const ServicesBookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    phone: '',
    capacityKva: '',
    engineMake: '',
    serviceNature: '',
    location: '',
    message: '',
    isCriticalOutage: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const compositeMessage = [
        `[SERVICE & ENGINEER DISPATCH TICKET]`,
        formData.isCriticalOutage ? '🚨 CRITICAL ACTIVE OUTAGE: HOSPITAL / PRODUCTION EMERGENCY' : null,
        `Facility / Company: ${formData.companyName || 'Not specified'}`,
        `Capacity: ${formData.capacityKva || 'Not specified'}`,
        `Engine Make: ${formData.engineMake || 'Not specified'}`,
        `Nature of Service: ${formData.serviceNature || 'General Service'}`,
        `Location / Area: ${formData.location || 'Hyderabad'}`,
        `Fault Symptoms / Notes: ${formData.message}`,
      ]
        .filter(Boolean)
        .join('\n');

      const response = await submitContactRequirement({
        fullName: formData.fullName,
        phone: formData.phone,
        email: 'service@mrgenerators.com',
        serviceType: formData.serviceNature || 'Immediate Engineer Dispatch',
        message: compositeMessage,
      });

      if (response.success) {
        setSuccess(true);
      } else {
        setErrorMessage(response.message || 'Failed to dispatch request. Please call directly.');
      }
    } catch {
      setErrorMessage('Network error occurred. Please call our emergency dispatch hotline.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6 space-y-1">
        <h4 className="text-xl sm:text-2xl font-black text-[#00163D] uppercase tracking-tight font-rubik">
          IMMEDIATE ENGINEER DISPATCH / SERVICE BOOKING
        </h4>
        <p className="text-xs sm:text-sm text-slate-500 font-karla">
          Fill the engineering ticket below. Our on-duty service controller will call back immediately to dispatch the nearest field van.
        </p>
      </div>

      {success ? (
        <div className="py-12 text-center">
          <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600 mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h5 className="text-2xl font-bold text-[#00163D] mb-2 font-rubik uppercase">Dispatch Ticket Logged</h5>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6 font-karla">
            Ticket acknowledged. Our central service controller is routing the nearest mobile van to your facility.
          </p>
          <button
            type="button"
            onClick={() => setSuccess(false)}
            className="px-6 py-2.5 bg-[#00163D] hover:bg-[#0F2B5C] text-white font-bold text-xs rounded transition-colors uppercase tracking-wider"
          >
            Submit Another Ticket
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 rounded text-red-600 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] font-bold text-[#00163D] uppercase tracking-wider mb-1.5 block font-karla">
                FACILITY OR COMPANY NAME *
              </label>
              <input
                type="text"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Phoenix Tech Park / Apollo Hospital"
                className="w-full border border-slate-300 rounded-[4px] px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D] bg-white font-karla"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#00163D] uppercase tracking-wider mb-1.5 block font-karla">
                CONTACT PERSON NAME *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rajesh Kumar (Facility Lead)"
                className="w-full border border-slate-300 rounded-[4px] px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D] bg-white font-karla"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] font-bold text-[#00163D] uppercase tracking-wider mb-1.5 block font-karla">
                PHONE NUMBER (WITH WHATSAPP) *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full border border-slate-300 rounded-[4px] px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D] bg-white font-karla"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#00163D] uppercase tracking-wider mb-1.5 block font-karla">
                GENERATOR CAPACITY (KVA) *
              </label>
              <select
                name="capacityKva"
                required
                value={formData.capacityKva}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-[4px] px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#00163D] bg-white font-karla"
              >
                <option value="">Select kVA Rating</option>
                <option value="5 - 30 kVA">5 - 30 kVA</option>
                <option value="35 - 125 kVA">35 - 125 kVA</option>
                <option value="160 - 500 kVA">160 - 500 kVA</option>
                <option value="600 - 1500 kVA">600 - 1500 kVA</option>
                <option value="2000+ kVA High Voltage">2000+ kVA High Voltage</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] font-bold text-[#00163D] uppercase tracking-wider mb-1.5 block font-karla">
                ENGINE MAKE / PLATFORM *
              </label>
              <select
                name="engineMake"
                required
                value={formData.engineMake}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-[4px] px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#00163D] bg-white font-karla"
              >
                <option value="">Select Engine Manufacturer</option>
                <option value="Ashok Leyland">Ashok Leyland</option>
                <option value="Cummins">Cummins</option>
                <option value="Kirloskar (KOEL)">Kirloskar (KOEL)</option>
                <option value="Mahindra Powerol">Mahindra Powerol</option>
                <option value="Tata Motors">Tata Motors</option>
                <option value="Caterpillar / Perkins">Caterpillar / Perkins</option>
                <option value="Greaves Power">Greaves Power</option>
                <option value="Other Multi-Brand">Other Multi-Brand</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#00163D] uppercase tracking-wider mb-1.5 block font-karla">
                NATURE OF SERVICE *
              </label>
              <select
                name="serviceNature"
                required
                value={formData.serviceNature}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-[4px] px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#00163D] bg-white font-karla"
              >
                <option value="">Select Service Required</option>
                <option value="Emergency Breakdown (< 2h Dispatch)">Emergency Breakdown (&lt; 2h Dispatch)</option>
                <option value="Preventative A/B/C/D Check">Preventative A/B/C/D Check</option>
                <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                <option value="Major Engine Overhaul">Major Engine Overhaul</option>
                <option value="Alternator Rewinding & AVR Repair">Alternator Rewinding &amp; AVR Repair</option>
                <option value="AMF / Synchronizing Panel Servicing">AMF / Synchronizing Panel Servicing</option>
                <option value="Genuine OEM Spare Parts Request">Genuine OEM Spare Parts Request</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[11px] font-bold text-[#00163D] uppercase tracking-wider mb-1.5 block font-karla">
              HYDERABAD SITE LOCATION / AREA *
            </label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Sanath Nagar Industrial Area / Patancheru / Gachibowli / Jeedimetla"
              className="w-full border border-slate-300 rounded-[4px] px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D] bg-white font-karla"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold text-[#00163D] uppercase tracking-wider mb-1.5 block font-karla">
              FAULT SYMPTOMS / REQUEST DETAILS
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe fault code, low oil pressure alarm, smoke color, fuel pump leakage, or required maintenance scope..."
              className="w-full border border-slate-300 rounded-[4px] p-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D] bg-white resize-none font-karla"
            />
          </div>

          <label className="bg-red-50/70 border border-red-200 rounded-md p-3.5 flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="isCriticalOutage"
              checked={formData.isCriticalOutage}
              onChange={handleChange}
              className="w-4 h-4 mt-0.5 rounded text-red-600 focus:ring-red-500 border-red-300"
            />
            <div className="text-xs font-karla">
              <span className="font-bold text-[#D32F2F] block tracking-wide uppercase">
                CRITICAL ACTIVE OUTAGE:
              </span>
              <span className="text-[11px] font-bold text-[#D32F2F] uppercase tracking-wide leading-tight">
                MARK THIS AS AN EMERGENCY HOSPITAL / PRODUCTION BREAKDOWN TO TRIGGER 2-HOUR IMMEDIATE DISPATCH PROTOCOLS.
              </span>
            </div>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#D32F2F] hover:bg-red-700 disabled:opacity-50 text-white font-black text-xs sm:text-sm rounded-[4px] flex items-center justify-center gap-2 transition-colors uppercase tracking-wider font-karla cursor-pointer shadow-sm"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>DISPATCHING TICKET...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>SUBMIT FOR IMMEDIATE ENGINEER DISPATCH</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
