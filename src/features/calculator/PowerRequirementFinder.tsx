import React, { useState } from 'react';
import { Search, ChevronDown, CheckCircle } from 'lucide-react';
import type { SizingRequirement } from '../../types';

interface PowerRequirementFinderProps {
  onRequirementSelect: (req: SizingRequirement) => void;
}

export const PowerRequirementFinder: React.FC<PowerRequirementFinderProps> = ({
  onRequirementSelect,
}) => {
  const [capacity, setCapacity] = useState<string>('25 kVA - 125 kVA (Commercial / Mid-Range)');
  const [application, setApplication] = useState<string>('New DG Set Purchase');
  const [location, setLocation] = useState<string>('Hyderabad');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const capacityOptions = [
    '25 kVA - 125 kVA (Commercial / Mid-Range)',
    '5 kVA - 30 kVA (Retail & Small Offices)',
    '140 kVA - 380 kVA (Industrial & IT Parks)',
    '500 kVA - 750 kVA (Hospitals & Manufacturing)',
    '1000 kVA - 2000 kVA (Mega Complexes & Substations)',
  ];

  const applicationOptions = [
    'New DG Set Purchase',
    'Hospital & Healthcare',
    'Industrial Manufacturing',
    'Data Center & IT Campus',
    'Commercial Complex & Malls',
    'Rental & Standby Contingency',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    onRequirementSelect({
      capacityKva: capacity,
      application,
      location,
    });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="w-full bg-white border border-slate-200/80 rounded-lg p-5 sm:p-7 shadow-2xl select-none text-slate-800">
      {/* Header strip */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div className="flex items-start gap-3">
          <span className="w-2 h-6 bg-[#2563EB] rounded-[2px] shrink-0 mt-0.5" />
          <div>
            <h2 className="font-rubik font-bold text-base sm:text-lg text-[#00163D] uppercase tracking-tight">
              Instant Power Sizing &amp; Model Selector
            </h2>
            <p className="font-karla text-xs sm:text-sm text-slate-500 mt-0.5">
              Specify your facility load or requirements to quickly identify suitable diesel gensets in stock.
            </p>
          </div>
        </div>

        <div className="self-start md:self-auto px-3 py-1 bg-[#E8F0FE] rounded-[2px] text-[#2563EB] font-karla font-bold text-xs uppercase tracking-wider">
          Zero Obligation Estimate
        </div>
      </div>

      {/* Form controls matching screenshot */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
        {/* Target Capacity Field */}
        <div className="space-y-1.5">
          <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-600">
            Target Capacity (kVA)
          </label>
          <div className="relative">
            <select
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="w-full h-11 px-3 py-2 bg-white border border-slate-200 rounded-[2px] font-karla text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB] appearance-none pr-8 cursor-pointer"
            >
              {capacityOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Vertical / Application Field */}
        <div className="space-y-1.5">
          <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-600">
            Vertical / Application
          </label>
          <div className="relative">
            <select
              value={application}
              onChange={(e) => setApplication(e.target.value)}
              className="w-full h-11 px-3 py-2 bg-white border border-slate-200 rounded-[2px] font-karla text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB] appearance-none pr-8 cursor-pointer"
            >
              {applicationOptions.map((app) => (
                <option key={app} value={app}>
                  {app}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Location Field */}
        <div className="space-y-1.5">
          <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-600">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Hyderabad"
            className="w-full h-11 px-3 py-2 bg-white border border-slate-200 rounded-[2px] font-karla text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            required
          />
        </div>

        {/* Submit Action matching screenshot button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full h-11 px-4 bg-[#00163D] hover:bg-[#00225A] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] cursor-pointer"
          >
            {isSubmitted ? (
              <>
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Models Matched!</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Find Matching Models</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
