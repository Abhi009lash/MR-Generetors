import React from 'react';
import { CASE_STUDIES } from './clientsCaseStudiesData';

export const ClientsCaseStudiesSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-[#EFF4FF] select-none" id="turnkey-spotlights">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div>
          <span className="font-karla text-xs font-bold text-[#D32F2F] uppercase tracking-wider block">
            Turnkey Engineering In Action
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] tracking-tight mt-1">
            Key Turnkey Project Case Studies
          </h2>
          <p className="font-karla text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
            We do not merely supply diesel gensets; we engineer mission-critical energy architectures with complete civil foundation, vertical ducting, synchronizing AMF switchboards, and statutory safety approvals.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-lg overflow-hidden shadow-xs border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              {/* Photo with Category Badge */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-800">
                <img
                  src={study.imageUrl}
                  alt={study.imageAlt}
                  className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#0A1D3F] text-white px-3 py-1 rounded-[2px] font-karla text-xs font-bold uppercase tracking-wider">
                  {study.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-4 flex-grow">
                <h3 className="font-rubik font-bold text-xl text-[#00163D]">{study.title}</h3>
                <p className="font-karla text-sm text-slate-600 leading-relaxed">{study.description}</p>

                {/* Specs */}
                <div className="flex flex-col gap-2 pt-2 border-t border-slate-100 font-karla text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Capacity:</span>
                    <span className="font-bold text-[#00163D] font-rubik">{study.capacity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">{study.metricLabel}</span>
                    <span className={`font-bold ${study.metricColor || 'text-[#00163D]'}`}>
                      {study.metricValue}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">{study.specLabel}</span>
                    <span className="font-bold text-[#00163D]">{study.specValue}</span>
                  </div>
                </div>
              </div>

              {/* Status Pill Footer */}
              <div className="p-6 pt-0">
                <span className="w-full block text-center py-2 bg-[#E5EEFF] text-[#00163D] font-karla font-bold text-xs uppercase tracking-wider rounded-[2px]">
                  {study.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
