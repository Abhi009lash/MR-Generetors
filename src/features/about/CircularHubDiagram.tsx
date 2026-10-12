import React from 'react';
import { Zap, Wrench, Shield, ShoppingCart, RefreshCw, VolumeX } from 'lucide-react';

export const CircularHubDiagram: React.FC = () => {
  const nodes = [
    { label: 'DG Set Sales', icon: ShoppingCart, color: '#2563EB', bg: '#EFF6FF' },
    { label: 'Power Rentals', icon: RefreshCw, color: '#7C3AED', bg: '#F5F3FF' },
    { label: 'Acoustic Canopies', icon: VolumeX, color: '#059669', bg: '#ECFDF5' },
    { label: 'Turnkey Substation', icon: Zap, color: '#D97706', bg: '#FFFBEB' },
    { label: '24/7 Breakdown & AMC', icon: Wrench, color: '#DC2626', bg: '#FEF2F2' },
    { label: '100% OEM Spares', icon: Shield, color: '#0284C7', bg: '#F0F9FF' },
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 flex flex-col items-center">
      <div className="px-3 py-1 bg-brand-softBlue rounded-[2px] text-brand-blue font-karla font-bold text-xs uppercase tracking-wider mb-2">
        One-Stop Solution
      </div>
      <h3 className="font-rubik font-semibold text-lg sm:text-xl text-navy-950 text-center mb-6">
        M.R Generators Ecosystem
      </h3>

      {/* Interactive Circular Network */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center my-2 select-none">
        {/* Outer Orbit Line */}
        <div className="absolute inset-4 rounded-full border-2 border-dashed border-slate-200" />

        {/* Center Node: M.R Generators */}
        <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-navy-950 border-4 border-white shadow-xl flex flex-col items-center justify-center text-center p-2">
          <Zap className="w-6 h-6 text-brand-amber fill-brand-amber mb-0.5" />
          <span className="font-rubik font-bold text-xs sm:text-sm text-white leading-tight">
            M.R
          </span>
          <span className="font-karla text-[9px] uppercase tracking-wider font-bold text-brand-softBlue">
            Generators
          </span>
        </div>

        {/* 6 Peripheral Orbit Nodes */}
        {nodes.map((node, i) => {
          const angle = (i * 60 - 90) * (Math.PI / 180);
          const radius = 115; // Distance from center
          const x = Math.round(radius * Math.cos(angle));
          const y = Math.round(radius * Math.sin(angle));

          const IconComponent = node.icon;

          return (
            <div
              key={node.label}
              style={{ transform: `translate(${x}px, ${y}px)` }}
              className="absolute z-20 flex flex-col items-center group cursor-pointer transition-transform hover:scale-110"
            >
              <div
                style={{ backgroundColor: node.bg, borderColor: node.color }}
                className="w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-md transition-shadow group-hover:shadow-lg"
              >
                <IconComponent style={{ color: node.color }} className="w-5 h-5" />
              </div>
              <span className="font-karla font-bold text-[10px] text-navy-950 uppercase tracking-tight mt-1 text-center max-w-[80px] bg-white/90 px-1 py-0.5 rounded shadow-xs">
                {node.label}
              </span>
            </div>
          );
        })}
      </div>

      <p className="font-karla text-xs sm:text-sm text-slate-500 text-center mt-6 max-w-sm">
        Comprehensive single-point lifecycle support for enterprise power across Telangana &amp; Andhra Pradesh.
      </p>
    </div>
  );
};
