import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

export const RentalEmergencyBar: React.FC = () => {
  return (
    <div className="bg-[#00163D] border-t border-white/10 py-6 text-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-rubik font-bold uppercase tracking-wider text-amber-400 block">
              24X7 TELANGANA INDUSTRIAL FLEET
            </span>
            <h3 className="font-rubik font-bold text-lg sm:text-xl text-white">
              DIRECT EMERGENCY DISPATCH DESK
            </h3>
            <p className="font-karla text-xs text-slate-300">
              Immediate mobilization across Hyderabad &amp; Telangana industrial corridors.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${APP_CONFIG.phonePrimary}`}
              className="h-10 px-5 rounded-lg bg-[#DC2626] hover:bg-red-700 text-white font-rubik font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL: +91 {APP_CONFIG.phonePrimary}</span>
            </a>

            <a
              href={`https://wa.me/91${APP_CONFIG.phonePrimary}?text=Hi%20MR%20Generators,%20I%20need%20immediate%20generator%20rental%20dispatch.`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-rubik font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WHATSAPP DESK NOW</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
