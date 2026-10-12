import React from 'react';
import { Phone } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

export const SparesInquirySteps: React.FC = () => {
  const steps = [
    {
      step: '1',
      title: 'SUBMIT ENGINE SPECIFICATION',
      desc: 'Identify engine make, model, serial number, and required spare or assembly.',
    },
    {
      step: '2',
      title: 'GET DEPOT CONFIRMATION + PRICING',
      desc: 'Our technical team verifies in-stock availability and dispatch timeline with formal invoice.',
    },
    {
      step: '3',
      title: 'DISPATCH & OPTIONAL FITMENT',
      desc: 'Immediate counter pickup or direct site shipment with optional technician installation.',
    },
  ];

  return (
    <div className="lg:col-span-5 space-y-6">
      <div className="space-y-2">
        <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#DC2626] block">
          FILL DETAILS FOR FAST DISPATCH
        </span>
        <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] tracking-tight">
          REQUEST SPARES PRICING &amp; AVAILABILITY
        </h2>
        <p className="font-karla text-sm text-slate-600 leading-relaxed">
          Not sure about the exact part number? Let our power specialists help you. Fill out the inquiry, and our technical desk will identify your engine specs from our database and provide a fast quotation.
        </p>
      </div>

      {/* 3 Step Process */}
      <div className="space-y-4 pt-2">
        {steps.map((item) => (
          <div
            key={item.step}
            className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs"
          >
            <span className="w-7 h-7 rounded-full bg-[#00163D] text-white font-rubik font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              {item.step}
            </span>
            <div>
              <h3 className="font-rubik font-bold text-xs uppercase text-[#00163D]">
                {item.title}
              </h3>
              <p className="font-karla text-xs text-slate-600 mt-0.5">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 24/7 Hotline Strip */}
      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-3">
        <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
        <div className="text-xs font-karla text-emerald-900">
          <span className="font-bold block uppercase tracking-wider">
            24X7 2-4HR DEPOT DISPATCH FLEET
          </span>
          Direct engineering desk hotline:{' '}
          <a href={`tel:${APP_CONFIG.phonePrimary}`} className="font-bold underline">
            +91 {APP_CONFIG.phonePrimary}
          </a>
        </div>
      </div>
    </div>
  );
};
