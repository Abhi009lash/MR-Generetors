import React, { useState } from 'react';
import { Calculator, ArrowDown } from 'lucide-react';

interface QuoteLoadCalculatorProps {
  onApplySizing: (rating: string, notes: string) => void;
}

export const QuoteLoadCalculator: React.FC<QuoteLoadCalculatorProps> = ({
  onApplySizing,
}) => {
  const [motors, setMotors] = useState(15);
  const [hvac, setHvac] = useState(20);
  const [servers, setServers] = useState(10);
  const [light, setLight] = useState(8);

  // Load approximation in kW with 25% safety factor
  const motorKW = motors * 0.746 * 1.5;
  const hvacKW = hvac * 1.5;
  const totalKW = motorKW + hvacKW + servers + light;
  const calculatedKVA = (totalKW / 0.8) * 1.25;

  let nearestRating = '82.5 kVA';
  let recommendedDesc = 'Cummins / Tata Heavy Silent CPCB IV+';

  if (calculatedKVA <= 20) {
    nearestRating = '20 kVA';
    recommendedDesc = 'Eicher / Tata 3-Phase Silent';
  } else if (calculatedKVA <= 45) {
    nearestRating = '45 kVA';
    recommendedDesc = 'Cummins / KOEL Green Commercial';
  } else if (calculatedKVA <= 82.5) {
    nearestRating = '82.5 kVA';
    recommendedDesc = 'Cummins / Ashok Leyland Industrial';
  } else if (calculatedKVA <= 125) {
    nearestRating = '125 kVA';
    recommendedDesc = 'Cummins / Tata Heavy Duty Series';
  } else if (calculatedKVA <= 250) {
    nearestRating = '250 kVA';
    recommendedDesc = 'Kirloskar / Cummins CPCB IV+ Plant';
  } else if (calculatedKVA <= 500) {
    nearestRating = '500 kVA';
    recommendedDesc = 'Cummins Heavy Prime Power';
  } else if (calculatedKVA <= 750) {
    nearestRating = '750 kVA';
    recommendedDesc = 'Caterpillar / Cummins High Output';
  } else {
    nearestRating = '1000+ kVA';
    recommendedDesc = 'Megawatt Grid Synchronization Setup';
  }

  const handleApply = () => {
    const notes = `[Calculator Estimate: ${nearestRating}]\nMotors: ${motors} HP, HVAC: ${hvac} TR, Servers: ${servers} kW, Lighting: ${light} kW.\nPlease validate site startup inrush and submit detailed quotation.`;
    onApplySizing(nearestRating, notes);
  };

  return (
    <div className="bg-[#00163D] text-white p-6 rounded-2xl shadow-md space-y-4 relative overflow-hidden select-none">
      <div className="flex items-center gap-2 relative z-10">
        <Calculator className="w-5 h-5 text-amber-400" />
        <div>
          <span className="font-rubik text-[10px] text-sky-300 uppercase tracking-wider block font-bold">
            CALCULATION TOOL
          </span>
          <h3 className="font-rubik font-bold text-base uppercase text-white leading-tight">
            Genset Load Estimator
          </h3>
        </div>
      </div>

      <p className="font-karla text-xs text-slate-300 relative z-10">
        Adjust your facility appliances below to compute recommended continuous kVA rating instantly:
      </p>

      <div className="space-y-3.5 relative z-10">
        {/* Slider 1: Motors */}
        <div className="space-y-1">
          <div className="flex justify-between font-rubik text-xs uppercase">
            <span className="text-slate-300">Motors &amp; Compressors</span>
            <span className="text-amber-400 font-bold">{motors} HP</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={motors}
            onChange={(e) => setMotors(Number(e.target.value))}
            className="w-full accent-amber-400 bg-[#131D3B] h-2 rounded cursor-pointer"
          />
        </div>

        {/* Slider 2: HVAC */}
        <div className="space-y-1">
          <div className="flex justify-between font-rubik text-xs uppercase">
            <span className="text-slate-300">HVAC / Air Conditioning</span>
            <span className="text-amber-400 font-bold">{hvac} TR</span>
          </div>
          <input
            type="range"
            min="0"
            max="80"
            step="5"
            value={hvac}
            onChange={(e) => setHvac(Number(e.target.value))}
            className="w-full accent-amber-400 bg-[#131D3B] h-2 rounded cursor-pointer"
          />
        </div>

        {/* Slider 3: Servers */}
        <div className="space-y-1">
          <div className="flex justify-between font-rubik text-xs uppercase">
            <span className="text-slate-300">Servers &amp; Workstations</span>
            <span className="text-amber-400 font-bold">{servers} kW</span>
          </div>
          <input
            type="range"
            min="0"
            max="50"
            step="2"
            value={servers}
            onChange={(e) => setServers(Number(e.target.value))}
            className="w-full accent-amber-400 bg-[#131D3B] h-2 rounded cursor-pointer"
          />
        </div>

        {/* Slider 4: Lighting */}
        <div className="space-y-1">
          <div className="flex justify-between font-rubik text-xs uppercase">
            <span className="text-slate-300">Lighting &amp; Utilities</span>
            <span className="text-amber-400 font-bold">{light} kW</span>
          </div>
          <input
            type="range"
            min="0"
            max="40"
            step="2"
            value={light}
            onChange={(e) => setLight(Number(e.target.value))}
            className="w-full accent-amber-400 bg-[#131D3B] h-2 rounded cursor-pointer"
          />
        </div>

        {/* Real-time Readout Card */}
        <div className="bg-[#131D3B] p-4 rounded-xl text-center space-y-1 border-t-2 border-[#385BAB]">
          <span className="font-rubik text-[10px] text-slate-400 uppercase tracking-wider block">
            Recommended DG Rating (with 25% Inrush Margin)
          </span>
          <div className="font-rubik text-3xl text-amber-400 uppercase font-bold tracking-tight">
            {nearestRating}
          </div>
          <p className="font-karla text-xs text-sky-200">
            Model: {recommendedDesc}
          </p>
        </div>

        <button
          type="button"
          onClick={handleApply}
          className="w-full py-2.5 bg-white text-[#00163D] font-rubik font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-98"
        >
          <ArrowDown className="w-4 h-4 text-[#D97706]" />
          <span>Transfer Sizing to Proforma Form</span>
        </button>
      </div>
    </div>
  );
};
