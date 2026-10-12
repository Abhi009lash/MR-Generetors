import React from 'react';
import { MapPin, Navigation, Eye, CheckCircle2 } from 'lucide-react';
import { screenImg } from '../../assets/images';

interface FacilityMapSectionProps {
  onOpenBookingModal?: () => void;
}

export const FacilityMapSection: React.FC<FacilityMapSectionProps> = ({ onOpenBookingModal }) => {
  const googleMapsDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Veera+Ratna+Towers,+Sundar+Nagar+Colony,+ESI,+Hyderabad,+Telangana+500038';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      {/* 1. Facility & Generator Staging Viewport */}
      <div className="bg-white rounded-[2px] border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
        <div className="relative group">
          <img
            src={screenImg}
            alt="M.R Generators Hyderabad Staging Yard Heavy Units"
            className="w-full h-72 sm:h-80 object-cover object-center transition-transform duration-500 group-hover:scale-102"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

          {/* Top Live Badge */}
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-[#00163D]/90 backdrop-blur-xs text-white text-[11px] font-karla font-bold uppercase tracking-wider rounded-[2px] border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
            <span>LIVE HYDERABAD STAGING YARD</span>
          </div>

          {/* Bottom Overlay Info */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h3 className="font-rubik font-bold text-lg sm:text-xl text-white uppercase tracking-tight">
                HYDERABAD REGIONAL DEPOT HEAVY UNITS
              </h3>
              <p className="font-karla text-xs text-slate-200 flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Synchronized Acoustic Soundproof Gensets</span>
              </p>
            </div>
            <span className="px-2.5 py-1 bg-[#385BAB] text-white font-karla font-bold text-[10px] uppercase tracking-wider rounded-[2px] self-start sm:self-auto shrink-0">
              50 kVA TO 2000 kVA IN-STOCK
            </span>
          </div>
        </div>

        {/* Description & Action */}
        <div className="p-6 bg-white space-y-4 flex-1 flex flex-col justify-between">
          <p className="font-karla text-xs sm:text-sm text-slate-600 leading-relaxed">
            Clients and consulting engineers are welcome to inspect test runs and witness sound-attenuation warranties in our central depot.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenBookingModal}
              className="w-full sm:w-auto px-6 h-11 bg-[#00163D] hover:bg-[#0F2B5C] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>BOOK DEPOT VISIT</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Central Operations Depot & Map */}
      <div className="bg-white rounded-[2px] border border-slate-200 shadow-sm p-6 sm:p-7 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#385BAB]" />
              <h3 className="font-rubik font-bold text-base text-[#00163D] uppercase tracking-tight">
                CENTRAL OPERATIONS DEPOT
              </h3>
            </div>
            <span className="px-2 py-0.5 bg-[#EFF4FF] text-[#385BAB] font-karla font-bold text-[10px] uppercase rounded-[2px] border border-blue-200">
              GOOGLE MAPS
            </span>
          </div>

          <p className="font-karla text-xs text-slate-600">
            Strategically situated at Sanath Nagar / ESI junction to access industrial belts and cyber corridors with zero lingering traffic delay.
          </p>
        </div>

        {/* Embedded Interactive Map Container */}
        <div className="relative rounded-[2px] overflow-hidden border border-slate-300 h-64 sm:h-72 bg-slate-100">
          <iframe
            title="M.R Generators Depot Location"
            src="https://maps.google.com/maps?q=Veera+Ratna+Towers+Sundar+Nagar+Colony+ESI+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />

          {/* Floating Address Bar over map */}
          <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3 rounded-[2px] border border-slate-200 shadow-md flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <MapPin className="w-4 h-4 text-[#D32F2F] shrink-0" />
              <div className="truncate">
                <p className="font-rubik font-bold text-xs text-[#00163D] truncate">
                  Veera Ratna Towers
                </p>
                <p className="font-karla text-[11px] text-slate-500 truncate">
                  Sundar Nagar Colony, ESI, Hyderabad
                </p>
              </div>
            </div>

            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#385BAB] hover:bg-[#2B4B96] text-white font-karla font-bold text-[11px] uppercase tracking-wider rounded-[2px] flex items-center gap-1.5 shrink-0 transition-colors shadow-xs"
            >
              <span>DIRECTIONS</span>
              <Navigation className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Proximity Metrics Bar */}
        <div className="grid grid-cols-2 gap-4 pt-1">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-[2px] text-center">
            <span className="block font-karla font-bold text-[10px] text-slate-500 uppercase tracking-wider">
              METRO PROXIMITY
            </span>
            <span className="block font-rubik font-bold text-base text-[#00163D]">
              400 Meters
            </span>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-[2px] text-center">
            <span className="block font-karla font-bold text-[10px] text-slate-500 uppercase tracking-wider">
              HIGHWAY ACCESS
            </span>
            <span className="block font-rubik font-bold text-base text-[#00163D]">
              NH 65 Linked
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
