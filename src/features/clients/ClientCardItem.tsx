import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { ClientItem } from './clientsTypes';

interface ClientCardItemProps {
  client: ClientItem;
}

export const ClientCardItem: React.FC<ClientCardItemProps> = ({ client }) => {
  const renderLogo = (type: string) => {
    switch (type) {
      case 'bharat':
        return (
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6 text-[#D32F2F]" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="#ba1a1a" strokeWidth="2.5" strokeDasharray="3 3" />
              <path d="M12 20C12 15.58 15.58 12 20 12C24.42 12 28 15.58 28 20C28 24.42 24.42 28 20 28" stroke="#00163d" strokeWidth="3" strokeLinecap="round" />
              <circle cx="20" cy="20" r="4" fill="#ba1a1a" />
            </svg>
            <span className="font-rubik text-xs font-bold tracking-tight text-[#00163D] uppercase">BHARAT BIOTECH</span>
          </div>
        );
      case 'aurobindo':
        return (
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="16" fill="#385bab" fillOpacity="0.1" stroke="#385bab" strokeWidth="2" />
              <path d="M18 8L24 24H12L18 8Z" fill="#385bab" />
              <circle cx="18" cy="22" r="2.5" fill="#f8f9ff" />
            </svg>
            <span className="font-rubik text-xs font-bold tracking-tight text-[#00163D] uppercase">AUROBINDO</span>
          </div>
        );
      case 'biological':
        return (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#00163D] text-white flex items-center justify-center font-bold text-xs rounded font-rubik">BE</div>
            <span className="font-rubik text-xs font-bold tracking-tight text-[#00163D] uppercase">BIOLOGICAL E.</span>
          </div>
        );
      case 'mint':
        return (
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6 text-[#D97706]" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="15" stroke="#D97706" strokeWidth="2" fill="#ffdad6" fillOpacity="0.3" />
              <path d="M18 7V29M12 12H24M14 18H22M13 24H23" stroke="#00163d" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="font-rubik text-xs font-bold tracking-tight text-[#00163D] uppercase">INDIA GOVT MINT</span>
          </div>
        );
      case 'telangana':
        return (
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="15" stroke="#385bab" strokeWidth="2.5" />
              <circle cx="18" cy="18" r="10" stroke="#ba1a1a" strokeWidth="1.5" />
              <path d="M18 10V26M10 18H26" stroke="#385bab" strokeWidth="2" />
            </svg>
            <span className="font-rubik text-xs font-bold tracking-tight text-[#00163D] uppercase">TELANGANA GOVT</span>
          </div>
        );
      case 'water':
        return (
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6 text-[#385BAB]" viewBox="0 0 36 36" fill="none">
              <path d="M6 14C10 11 14 17 18 14C22 11 26 17 30 14" stroke="#385bab" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M6 20C10 17 14 23 18 20C22 17 26 23 30 20" stroke="#0f3b8a" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span className="font-rubik text-xs font-bold tracking-tight text-[#00163D] uppercase">KRMB AUTHORITY</span>
          </div>
        );
      case 'tata':
        return (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#385BAB] flex items-center justify-center text-white font-bold text-xs font-rubik">T</div>
            <span className="font-rubik text-xs font-bold tracking-tight text-[#00163D] uppercase">TATA PROJECTS</span>
          </div>
        );
      case 'jayabheri':
        return (
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6 text-[#00163D]" viewBox="0 0 36 36" fill="none">
              <rect x="6" y="8" width="12" height="22" fill="#00163d" rx="1" />
              <rect x="20" y="14" width="10" height="16" fill="#385bab" rx="1" />
            </svg>
            <span className="font-rubik text-xs font-bold tracking-tight text-[#00163D] uppercase">JAYABHERI</span>
          </div>
        );
      case 'dsr':
        return (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#D32F2F] text-white flex items-center justify-center font-bold text-[11px] rounded font-rubik">DSR</div>
            <span className="font-rubik text-xs font-bold tracking-tight text-[#00163D] uppercase">DSR BUILDERS</span>
          </div>
        );
      case 'ncc':
        return (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded border border-[#D32F2F] flex items-center justify-center font-bold text-[10px] text-[#00163D] font-rubik">NCC</div>
            <span className="font-rubik text-xs font-bold tracking-tight text-[#00163D] uppercase">NCC LIMITED</span>
          </div>
        );
      case 'hyatt':
        return (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded border-2 border-[#00163D] flex items-center justify-center font-bold text-[#00163D] font-rubik text-xs">H</div>
            <span className="font-rubik text-xs font-bold tracking-tight text-[#00163D] uppercase">HYATT HOTELS</span>
          </div>
        );
      case 'sheraton':
        return (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border border-dashed border-[#00163D] flex items-center justify-center font-bold text-[#00163D] font-rubik text-xs">S</div>
            <span className="font-rubik text-xs font-bold tracking-tight text-[#00163D] uppercase">SHERATON</span>
          </div>
        );
      case 'dhl':
        return (
          <div className="flex items-center gap-2 bg-[#FFCC00] px-2 py-0.5 rounded">
            <span className="font-rubik text-xs font-black italic text-[#D32F2F]">DHL</span>
            <span className="font-karla text-[10px] font-bold text-[#00163D] uppercase">SUPPLY CHAIN</span>
          </div>
        );
      case 'croma':
        return (
          <div className="flex items-center gap-2 bg-[#008060] px-2 py-0.5 rounded text-white">
            <span className="font-rubik text-xs font-bold tracking-wider">croma</span>
          </div>
        );
      case 'oyo':
        return (
          <div className="flex items-center gap-2 bg-[#D32F2F] px-2 py-0.5 rounded text-white">
            <span className="font-rubik text-xs font-black tracking-wider">OYO</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00163D]" />
            <span className="font-rubik text-xs font-bold tracking-tight text-[#00163D] uppercase">{client.name}</span>
          </div>
        );
    }
  };

  const getCapacityColor = (colorTheme: string) => {
    switch (colorTheme) {
      case 'red':
        return 'text-[#D32F2F]';
      case 'blue':
        return 'text-[#385BAB]';
      case 'amber':
        return 'text-[#D97706]';
      case 'green':
        return 'text-[#008060]';
      default:
        return 'text-[#00163D]';
    }
  };

  return (
    <div className="bg-white rounded-[4px] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between border border-slate-200 select-none">
      <div className="flex flex-col gap-3">
        {/* Logo Card Header */}
        <div className="w-full h-11 px-3 py-1 bg-white border border-slate-200 rounded-[2px] flex items-center justify-between shadow-2xs mb-1">
          {renderLogo(client.logoType)}
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-[2px]">
            {client.badge}
          </span>
        </div>

        {/* Sector Tag & Capacity Rating */}
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-1 rounded bg-[#E5EEFF] text-[#0F3B8A] font-karla text-xs uppercase tracking-wide font-bold">
            {client.sectorLabel}
          </span>
          <span className={`font-rubik text-lg font-bold ${getCapacityColor(client.colorTheme)}`}>
            {client.capacityKva}
          </span>
        </div>

        {/* Client Name & Location */}
        <div className="mt-1">
          <h3 className="font-rubik text-lg text-[#00163D] font-bold">{client.name}</h3>
          <p className="font-karla text-xs text-slate-500 mt-0.5">{client.location}</p>
        </div>

        {/* Description */}
        <p className="font-karla text-sm text-slate-600 leading-relaxed mt-1">{client.description}</p>
      </div>

      {/* Footer Feature Strip */}
      <div className="mt-6 pt-3 bg-[#EFF4FF] -mx-6 -mb-6 p-4 rounded-b-[4px] flex items-center justify-between border-t border-slate-100">
        <span className="flex items-center gap-1.5 font-karla text-xs text-[#00163D] font-bold">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#385BAB] shrink-0" />
          {client.featureHighlight}
        </span>
        <span className="font-karla text-xs text-slate-500 font-medium">{client.contractType}</span>
      </div>
    </div>
  );
};
