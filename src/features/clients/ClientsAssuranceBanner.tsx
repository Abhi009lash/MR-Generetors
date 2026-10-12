import React from 'react';
import { ShieldCheck, Zap, Handshake } from 'lucide-react';

export const ClientsAssuranceBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#131D3B] text-white py-12 px-4 sm:px-6 lg:px-12 select-none border-y border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Item 1 */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded bg-[#0F2B5C] flex items-center justify-center shrink-0 border border-white/10">
            <ShieldCheck className="w-6 h-6 text-[#88A9FE]" />
          </div>
          <div>
            <h4 className="font-rubik font-bold text-lg text-white">ISO 9001:2015 Operations</h4>
            <p className="font-karla text-sm text-[#D0DBED] mt-1 leading-relaxed">
              Calibrated load-bank testing up to 110% rating prior to customer site handover.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded bg-[#0F2B5C] flex items-center justify-center shrink-0 border border-white/10">
            <Zap className="w-6 h-6 text-[#D32F2F]" />
          </div>
          <div>
            <h4 className="font-rubik font-bold text-lg text-white">60-Min Emergency Dispatch</h4>
            <p className="font-karla text-sm text-[#D0DBED] mt-1 leading-relaxed">
              Rapid intervention teams based at our Hyderabad depot with mobile testing gear.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded bg-[#0F2B5C] flex items-center justify-center shrink-0 border border-white/10">
            <Handshake className="w-6 h-6 text-[#88A9FE]" />
          </div>
          <div>
            <h4 className="font-rubik font-bold text-lg text-white">OEM Certified Spares</h4>
            <p className="font-karla text-sm text-[#D0DBED] mt-1 leading-relaxed">
              100% genuine factory filters, belts, AMF relays, and digital governors in stock.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
