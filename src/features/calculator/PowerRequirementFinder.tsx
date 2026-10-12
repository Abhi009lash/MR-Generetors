import React, { useState } from 'react';
import { Search, ChevronDown, CheckCircle } from 'lucide-react';
import { CAPACITY_OPTIONS, APPLICATION_OPTIONS } from '../../core/config';
import { SizingRequirement } from '../../types';

interface PowerRequirementFinderProps {
  onRequirementSelect: (req: SizingRequirement) => void;
}

export const PowerRequirementFinder: React.FC<PowerRequirementFinderProps> = ({
  onRequirementSelect,
}) => {
  const [capacity, setCapacity] = useState<string>(CAPACITY_OPTIONS[1]);
  const [application, setApplication] = useState<string>(APPLICATION_OPTIONS[0]);
  const [location, setLocation] = useState<string>('Hyderabad');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

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
    <div className="relative -mt-10 lg:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 select-none">
      <div className="bg-surface-light border border-slate-200/80 rounded-lg p-5 sm:p-7 shadow-xl shadow-slate-900/10 backdrop-blur-sm">
        {/* Header strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-6 border-b border-slate-200">
          <div className="flex items-start gap-3">
            <span className="w-2.5 h-6 bg-brand-blue rounded-sm shrink-0 mt-0.5" />
            <div>
              <h2 className="font-rubik font-semibold text-lg sm:text-xl text-navy-950 uppercase tracking-tight">
                Quick Power Requirement Finder
              </h2>
              <p className="font-karla text-xs sm:text-sm text-industrial-textMuted mt-0.5">
                Find the exact kVA rating and silent canopy configuration tailored to your load.
              </p>
            </div>
          </div>

          <div className="self-start md:self-auto px-3 py-1 bg-brand-softBlue rounded-[2px] text-brand-blue font-karla font-bold text-xs uppercase tracking-wider">
            Intelligent Sizing Engine
          </div>
        </div>

        {/* Interactive Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          {/* Target Capacity Field */}
          <div className="space-y-1.5">
            <label className="block font-karla font-bold text-xs uppercase tracking-wider text-industrial-textMuted">
              Target Capacity (kVA)
            </label>
            <div className="relative">
              <select
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                className="w-full h-11 px-3 py-2 bg-white border border-slate-200 rounded-[2px] font-karla text-sm text-industrial-textDark focus:outline-none focus:ring-2 focus:ring-brand-blue appearance-none pr-8 cursor-pointer"
              >
                {CAPACITY_OPTIONS.map((opt) => (
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
            <label className="block font-karla font-bold text-xs uppercase tracking-wider text-industrial-textMuted">
              Vertical / Application
            </label>
            <div className="relative">
              <select
                value={application}
                onChange={(e) => setApplication(e.target.value)}
                className="w-full h-11 px-3 py-2 bg-white border border-slate-200 rounded-[2px] font-karla text-sm text-industrial-textDark focus:outline-none focus:ring-2 focus:ring-brand-blue appearance-none pr-8 cursor-pointer"
              >
                {APPLICATION_OPTIONS.map((app) => (
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
            <label className="block font-karla font-bold text-xs uppercase tracking-wider text-industrial-textMuted">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Hyderabad / Secunderabad"
              className="w-full h-11 px-3 py-2 bg-white border border-slate-200 rounded-[2px] font-karla text-sm text-industrial-textDark focus:outline-none focus:ring-2 focus:ring-brand-blue"
              required
            />
          </div>

          {/* Submit Action */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full h-11 px-4 bg-navy-800 hover:bg-navy-950 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.99]"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Spec Matched!</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Get Custom Spec &amp; Quote</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
