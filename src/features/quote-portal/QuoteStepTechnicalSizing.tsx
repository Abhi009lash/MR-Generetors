import React from 'react';
import { BRAND_OPTIONS, CAPACITY_OPTIONS } from './quotePortalData';

interface QuoteStepTechnicalSizingProps {
  brandChoice: string;
  setBrandChoice: (val: string) => void;
  capacityRange: string;
  setCapacityRange: (val: string) => void;
  coolingType: string;
  setCoolingType: (val: string) => void;
  dutyCycle: string;
  setDutyCycle: (val: string) => void;
}

export const QuoteStepTechnicalSizing: React.FC<QuoteStepTechnicalSizingProps> = ({
  brandChoice,
  setBrandChoice,
  capacityRange,
  setCapacityRange,
  coolingType,
  setCoolingType,
  dutyCycle,
  setDutyCycle,
}) => {
  return (
    <div className="bg-[#F8F9FF] p-5 rounded-2xl space-y-4 border border-slate-200/80">
      <div className="flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-[#00163D] text-white flex items-center justify-center font-bold text-xs">
          2
        </span>
        <h3 className="font-rubik text-sm text-[#00163D] uppercase font-bold">
          Genset Technical Sizing &amp; Brand
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-karla text-xs uppercase text-slate-600 font-bold block mb-1">
            Brand Preference (Authorized Fleet) *
          </label>
          <select
            value={brandChoice}
            onChange={(e) => setBrandChoice(e.target.value)}
            className="w-full p-2.5 bg-white text-slate-800 rounded-lg text-xs font-karla border border-slate-200 focus:outline-none focus:border-[#00163D]"
          >
            {BRAND_OPTIONS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-karla text-xs uppercase text-slate-600 font-bold block mb-1">
            Desired Capacity Rating *
          </label>
          <select
            value={capacityRange}
            onChange={(e) => setCapacityRange(e.target.value)}
            className="w-full p-2.5 bg-white text-slate-800 rounded-lg text-xs font-karla border border-slate-200 focus:outline-none focus:border-[#00163D]"
          >
            {CAPACITY_OPTIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-karla text-xs uppercase text-slate-600 font-bold block mb-1">
            Cooling System Configuration
          </label>
          <div className="grid grid-cols-2 gap-2">
            {['Water Cooled', 'Air Cooled'].map((type) => (
              <label key={type} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 cursor-pointer text-xs font-karla">
                <input
                  type="radio"
                  name="coolingType"
                  value={type}
                  checked={coolingType === type}
                  onChange={() => setCoolingType(type)}
                  className="accent-[#00163D]"
                />
                <span>{type} System</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="font-karla text-xs uppercase text-slate-600 font-bold block mb-1">
            Operational Duty Cycle
          </label>
          <div className="grid grid-cols-2 gap-2">
            {['Standby Backup', 'Continuous 24x7'].map((duty) => (
              <label key={duty} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 cursor-pointer text-xs font-karla">
                <input
                  type="radio"
                  name="dutyCycle"
                  value={duty}
                  checked={dutyCycle === duty}
                  onChange={() => setDutyCycle(duty)}
                  className="accent-[#00163D]"
                />
                <span>{duty}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
