import React from 'react';

interface QuoteStepClientFacilityProps {
  clientName: string;
  setClientName: (val: string) => void;
  clientEmail: string;
  setClientEmail: (val: string) => void;
  clientPhone: string;
  setClientPhone: (val: string) => void;
  clientCompany: string;
  setClientCompany: (val: string) => void;
  siteLocation: string;
  setSiteLocation: (val: string) => void;
}

export const QuoteStepClientFacility: React.FC<QuoteStepClientFacilityProps> = ({
  clientName,
  setClientName,
  clientEmail,
  setClientEmail,
  clientPhone,
  setClientPhone,
  clientCompany,
  setClientCompany,
  siteLocation,
  setSiteLocation,
}) => {
  return (
    <div className="bg-[#F8F9FF] p-5 rounded-2xl space-y-4 border border-slate-200/80">
      <div className="flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-[#00163D] text-white flex items-center justify-center font-bold text-xs">
          1
        </span>
        <h3 className="font-rubik text-sm text-[#00163D] uppercase font-bold">
          Client &amp; Facility Profile
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-karla text-xs uppercase text-slate-600 font-bold block mb-1">
            Full Name / Contact Person *
          </label>
          <input
            type="text"
            required
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="e.g. Ramesh Reddy (Facility Lead)"
            className="w-full p-2.5 bg-white text-slate-800 rounded-lg text-xs font-karla border border-slate-200 focus:outline-none focus:border-[#00163D]"
          />
        </div>

        <div>
          <label className="font-karla text-xs uppercase text-slate-600 font-bold block mb-1">
            Official Business Email *
          </label>
          <input
            type="email"
            required
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            placeholder="procurement@hetero.com"
            className="w-full p-2.5 bg-white text-slate-800 rounded-lg text-xs font-karla border border-slate-200 focus:outline-none focus:border-[#00163D]"
          />
        </div>

        <div>
          <label className="font-karla text-xs uppercase text-slate-600 font-bold block mb-1">
            Direct Phone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
            placeholder="+91 89777 78811"
            className="w-full p-2.5 bg-white text-slate-800 rounded-lg text-xs font-karla border border-slate-200 focus:outline-none focus:border-[#00163D]"
          />
        </div>

        <div>
          <label className="font-karla text-xs uppercase text-slate-600 font-bold block mb-1">
            Company / Facility Name *
          </label>
          <input
            type="text"
            required
            value={clientCompany}
            onChange={(e) => setClientCompany(e.target.value)}
            placeholder="e.g. Apollo Hospitals / GMR Aero Park"
            className="w-full p-2.5 bg-white text-slate-800 rounded-lg text-xs font-karla border border-slate-200 focus:outline-none focus:border-[#00163D]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="font-karla text-xs uppercase text-slate-600 font-bold block mb-1">
            Site Delivery Location &amp; District *
          </label>
          <input
            type="text"
            required
            value={siteLocation}
            onChange={(e) => setSiteLocation(e.target.value)}
            placeholder="e.g. Plot 42, IDA Cherlapally, Hyderabad (or Gachibowli Financial District)"
            className="w-full p-2.5 bg-white text-slate-800 rounded-lg text-xs font-karla border border-slate-200 focus:outline-none focus:border-[#00163D]"
          />
        </div>
      </div>
    </div>
  );
};
