import React from 'react';
import { MapPin, Phone, Mail, ShieldAlert } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

export const LeypowerRfqInfoCard: React.FC = () => {
  return (
    <div className="lg:col-span-5 bg-[#0A1D3F] border border-[#0F2B5C] text-white rounded-[6px] p-6 lg:p-8 space-y-6 shadow-md">
      <div className="space-y-2">
        <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#D97706]">
          DIRECT OEM PROPOSALS
        </span>
        <h2 className="font-rubik font-bold text-xl sm:text-2xl text-white uppercase tracking-tight">
          FAST TURNAROUND QUOTATION &amp; SIZING
        </h2>
        <p className="font-karla text-xs sm:text-sm text-slate-300 leading-relaxed">
          Need engineering assistance to calculate motor starting inrush currents or total running kVA? Our technical team delivers same-day turnkey proposals.
        </p>
      </div>

      <div className="space-y-4 text-xs font-karla text-slate-200">
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block text-white">Central Warehouse &amp; Staging Depot:</span>
            <span className="text-slate-300">Plot 48, Kukatpally Industrial Area, Hyderabad, Telangana - 500072</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block text-white">24/7 Direct Engineering Lines:</span>
            <span className="text-slate-300">+91 {APP_CONFIG.phonePrimary} / +91 {APP_CONFIG.phoneSecondary}</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block text-white">Corporate Inquiry Email:</span>
            <span className="text-slate-300">{APP_CONFIG.email}</span>
          </div>
        </div>
      </div>

      <div className="bg-[#13274F] border border-[#213F7A] p-3.5 rounded-[4px] flex items-center gap-3">
        <ShieldAlert className="w-5 h-5 text-[#D97706] shrink-0" />
        <span className="font-karla text-xs text-slate-200 font-semibold">
          TSPCB &amp; CEIG Approval Guidance Included in All Turnkey Proposals
        </span>
      </div>
    </div>
  );
};
