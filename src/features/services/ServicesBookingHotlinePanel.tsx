import React from 'react';
import { Phone, Headphones, Mail, MapPin } from 'lucide-react';

export const ServicesBookingHotlinePanel: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-[3px] text-[#0A1D3F] text-xs font-bold tracking-wider uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#D32F2F] shrink-0" />
          <span>24/7 FIELD DISPATCH COMMAND</span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00163D] tracking-tight leading-tight uppercase font-rubik">
          RAPID SERVICE DISPATCH &amp; TECHNICAL SUPPORT
        </h3>

        <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed font-karla">
          Facing an unexpected shutdown or planning your next scheduled B-Check? Our emergency dispatch unit guarantees on-site technician arrival across Hyderabad in under 2 hours.
        </p>
      </div>

      {/* 24/7 Emergency Dispatch Hotline Card */}
      <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex items-start gap-4 hover:border-red-300 transition-colors">
        <div className="w-11 h-11 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center shrink-0 border border-red-100">
          <Phone className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <span className="text-[11px] font-bold text-[#D32F2F] uppercase tracking-wider block font-karla">
            24/7 EMERGENCY DISPATCH HOTLINE
          </span>
          <a
            href="tel:+918977778811"
            className="text-lg sm:text-xl font-black text-[#00163D] hover:text-[#D32F2F] transition-colors tracking-tight block font-rubik"
          >
            +91-8977778811
          </a>
          <p className="text-xs text-slate-500 mt-0.5 font-karla">
            Priority channel for hospitals &amp; IT campuses
          </p>
        </div>
      </div>

      {/* AMC Inquiries & Customer Support Card */}
      <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex items-start gap-4 hover:border-blue-300 transition-colors">
        <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 border border-blue-100">
          <Headphones className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <span className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider block font-karla">
            AMC INQUIRIES &amp; CUSTOMER SUPPORT
          </span>
          <a
            href="tel:+919949983305"
            className="text-lg sm:text-xl font-black text-[#00163D] hover:text-[#1D4ED8] transition-colors tracking-tight block font-rubik"
          >
            +91-9949983305
          </a>
          <p className="text-xs text-slate-500 mt-0.5 font-karla">
            Desk: 040-48547105 (Mon - Sat 8 AM - 8 PM)
          </p>
        </div>
      </div>

      {/* Direct Engineering Email Card */}
      <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex items-start gap-4 hover:border-blue-300 transition-colors">
        <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 border border-blue-100">
          <Mail className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <span className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider block font-karla">
            DIRECT ENGINEERING EMAIL
          </span>
          <a
            href="mailto:service@mrgenerators.com"
            className="text-base sm:text-lg font-black text-[#00163D] hover:text-[#1D4ED8] transition-colors block font-rubik break-all"
          >
            service@mrgenerators.com
          </a>
          <p className="text-xs text-slate-500 mt-0.5 font-karla">
            Quotes delivered within 60 minutes
          </p>
        </div>
      </div>

      {/* Central Technical Depot Dark Navy Box */}
      <div className="bg-[#00163D] text-white rounded-lg p-5 shadow-sm space-y-2 border border-[#0F2B5C]">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#D97706] shrink-0" />
          <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider font-karla">
            CENTRAL TECHNICAL DEPOT
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed font-karla">
          Veera Ratna Towers, Sundar Nagar Colony, Near ESI Metro Station, Hyderabad - 500038, Telangana. Mobile vans stationed at Sanath Nagar, Patancheru, and HITEC City.
        </p>
      </div>
    </div>
  );
};
