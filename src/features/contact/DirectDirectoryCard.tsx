import React from 'react';
import { Building2, Phone, Mail, Clock, Truck, ShieldAlert } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

export const DirectDirectoryCard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* 1. Corporate Office & Central Depot */}
      <div className="bg-white rounded-[2px] border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#D32F2F]" />
            <h3 className="font-rubik font-bold text-base text-[#00163D] uppercase tracking-tight">
              CORPORATE OFFICE &amp; CENTRAL DEPOT
            </h3>
          </div>
          <span className="px-2 py-0.5 bg-[#DFE9FB] text-[#00163D] font-karla font-bold text-[10px] uppercase rounded-[2px]">
            VISIT US
          </span>
        </div>

        <div className="space-y-1 font-karla text-sm text-slate-700">
          <p className="font-bold text-[#00163D]">{APP_CONFIG.companyName}</p>
          <p>7-1-614/3/2, Veera Ratna Towers,</p>
          <p>Sundar Nagar Colony, Near ESI Metro Station,</p>
          <p>Hyderabad, Telangana - 500038, India.</p>
        </div>

        {/* Transport Reception Box */}
        <div className="p-3 bg-[#EFF4FF] border border-[#BFDBFE] rounded-[2px] space-y-1">
          <div className="flex items-center gap-1.5 text-blue-900 font-karla font-bold text-xs uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5 text-blue-700 shrink-0" />
            <span>TRANSPORT RECEPTION &amp; ARTERIAL TRANSIT</span>
          </div>
          <p className="font-karla text-xs text-blue-800 leading-relaxed">
            Situated within 400 meters of the ESI Hospital Metro Station. Heavy transport access directly via NH 65.
          </p>
        </div>

        {/* Operating Hours Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-karla pt-1">
          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-[2px] space-y-0.5">
            <div className="flex items-center gap-1 text-slate-500 font-bold uppercase text-[10px]">
              <Clock className="w-3 h-3 text-[#D97706]" />
              <span>OFFICE &amp; CONSULTATION</span>
            </div>
            <p className="font-bold text-[#00163D]">Mon - Sat: 9:00 AM - 7:30 PM</p>
          </div>

          <div className="p-2.5 bg-red-50 border border-red-200 rounded-[2px] space-y-0.5">
            <div className="flex items-center gap-1 text-red-700 font-bold uppercase text-[10px]">
              <ShieldAlert className="w-3 h-3 text-[#D32F2F]" />
              <span>BREAKDOWN &amp; FIELD SLA</span>
            </div>
            <p className="font-bold text-[#D32F2F]">24x7 / 365 Days Live</p>
          </div>
        </div>
      </div>

      {/* 2. Direct Telephone Lines */}
      <div className="bg-white rounded-[2px] border border-slate-200 p-6 shadow-sm space-y-3">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <Phone className="w-5 h-5 text-[#00163D]" />
          <h3 className="font-rubik font-bold text-base text-[#00163D] uppercase tracking-tight">
            DIRECT TELEPHONE LINES
          </h3>
        </div>

        <div className="space-y-2.5 text-xs font-karla">
          <div className="flex items-center justify-between p-2 rounded bg-red-50/50 border border-red-100">
            <span className="font-bold text-slate-700 uppercase">Emergency Hotline (24/7)</span>
            <a href="tel:8977778811" className="font-mono font-bold text-sm text-[#D32F2F] hover:underline">
              +91 8977778811
            </a>
          </div>

          <div className="flex items-center justify-between p-2 rounded bg-blue-50/50 border border-blue-100">
            <span className="font-bold text-slate-700 uppercase">Corporate Support Desk</span>
            <a href="tel:8977778822" className="font-mono font-bold text-sm text-[#385BAB] hover:underline">
              +91 8977778822
            </a>
          </div>

          <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-700 uppercase">Corporate Desk Landline</span>
            <a href="tel:04045667128" className="font-mono font-bold text-sm text-slate-800 hover:underline">
              040-45667128
            </a>
          </div>

          <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-700 uppercase">Technical Helpdesk</span>
            <a href="tel:8096007266" className="font-mono font-bold text-sm text-slate-800 hover:underline">
              +91 8096007266
            </a>
          </div>
        </div>
      </div>

      {/* 3. Departmental Email Routing */}
      <div className="bg-white rounded-[2px] border border-slate-200 p-6 shadow-sm space-y-3">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <Mail className="w-5 h-5 text-[#00163D]" />
          <h3 className="font-rubik font-bold text-base text-[#00163D] uppercase tracking-tight">
            DEPARTMENTAL EMAIL ROUTING
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center font-karla">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-[2px]">
            <span className="block font-bold text-[10px] text-slate-500 uppercase tracking-wider mb-1">
              GENERAL INQUIRIES
            </span>
            <a href="mailto:info@mrgenerators.com" className="font-mono text-xs text-[#00163D] font-bold hover:underline break-all">
              info@mrgenerators.com
            </a>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-[2px]">
            <span className="block font-bold text-[10px] text-slate-500 uppercase tracking-wider mb-1">
              SALES &amp; TENDERS
            </span>
            <a href="mailto:sales@mrgenerators.com" className="font-mono text-xs text-[#00163D] font-bold hover:underline break-all">
              sales@mrgenerators.com
            </a>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-[2px]">
            <span className="block font-bold text-[10px] text-slate-500 uppercase tracking-wider mb-1">
              SERVICE &amp; BREAKDOWN
            </span>
            <a href="mailto:service@mrgenerators.com" className="font-mono text-xs text-[#00163D] font-bold hover:underline break-all">
              service@mrgenerators.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
