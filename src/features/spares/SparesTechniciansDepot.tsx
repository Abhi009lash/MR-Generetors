import React from 'react';
import { ShieldCheck, FileCheck, Wrench, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

interface SparesTechniciansDepotProps {
  onScheduleFitment: () => void;
}

export const SparesTechniciansDepot: React.FC<SparesTechniciansDepotProps> = ({
  onScheduleFitment,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-[#00163D] text-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Technicians & Engineering Support */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-rubik font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Wrench className="w-3.5 h-3.5" />
                QUALIFIED OEM FIELD ENGINEERS &amp; LAB TECHNICIANS
              </span>

              <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                TRAINED OEM TECHNICIANS <br />
                ENSURING FIRST-TIME-RIGHT INSTALLATION
              </h2>

              <p className="font-karla text-sm sm:text-base text-slate-300 leading-relaxed">
                At M.R Generators, we don’t just sell parts in cardboard boxes. Our service division provides certified on-field engineering to install your replacement parts, calibrate electronic governor systems, synchronize AMF controllers, and test generator load banks.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-lg border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-rubik font-bold text-xs uppercase text-white">
                      DIRECT FACTORY WARRANTY SUPPORT
                    </h3>
                    <p className="font-karla text-xs text-slate-300">
                      All genuine spares sold through us include original OEM replacement warranty protection against manufacturing defects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-lg border border-white/10">
                  <FileCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-rubik font-bold text-xs uppercase text-white">
                      WARRANTY &amp; TEST CERTIFICATES
                    </h3>
                    <p className="font-karla text-xs text-slate-300">
                      Every critical electrical/engine assembly includes factory bench calibration certificates and verifiable serial tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <button
                type="button"
                onClick={onScheduleFitment}
                className="h-11 px-6 rounded-lg bg-white hover:bg-slate-100 text-[#00163D] font-rubik font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Wrench className="w-4 h-4 text-[#DC2626]" />
                <span>SCHEDULE ON-SITE FITMENT</span>
              </button>

              <a
                href={`tel:${APP_CONFIG.phonePrimary}`}
                className="h-11 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-rubik font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-white/20"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>24X7 SERVICE HELPLINE</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hyderabad Depot Immediate Pickup Desk Card */}
          <div className="lg:col-span-5 bg-[#0A1D3F] border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="space-y-1 pb-3 border-b border-white/10">
                <h3 className="font-rubik font-bold text-base sm:text-lg text-white uppercase tracking-tight">
                  HYDERABAD DEPOT IMMEDIATE PICKUP DESK
                </h3>
                <p className="font-karla text-xs text-slate-300">
                  Need the part instantly? Visit our central spares counter for immediate collection:
                </p>
              </div>

              <div className="space-y-3.5 font-karla text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Central Engineering Depot:</strong>
                    Plot No. 8-3-191/10/A, Vengal Rao Nagar, SR Nagar, Hyderabad - 500038
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Urgent Spares Hotline:</strong>
                    +91 {APP_CONFIG.phonePrimary} / {APP_CONFIG.phoneLandline}
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Operating Hours:</strong>
                    24 Hours Emergency Dispatch / Counter: 8:00 AM - 9:00 PM
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`https://wa.me/91${APP_CONFIG.phonePrimary}?text=Hi%20MR%20Generators,%20I%20need%20urgent%20generator%20spare%20parts%20availability%20in%20Hyderabad.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 rounded-lg bg-[#25D366] hover:bg-emerald-600 text-white font-rubik font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>CLICK TO CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
