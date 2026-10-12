import React from 'react';
import { Star } from 'lucide-react';
import { CLIENT_TESTIMONIALS } from './clientsCaseStudiesData';

export const ClientsTestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-[#F8F9FF] select-none" id="testimonials">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header with Star Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-karla text-xs font-bold uppercase tracking-wider text-[#385BAB] block">
              Facility Managers &amp; Chief Engineers Speak
            </span>
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] tracking-tight mt-1">
              Verified Client Testimonials
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[#D32F2F] font-rubik font-bold text-xl">
              4.9 / 5.0
            </span>
            <div className="flex text-[#D97706]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-karla text-xs text-slate-500 font-medium">Across 420+ Reviews</span>
          </div>
        </div>

        {/* 4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-[4px] shadow-xs border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-4">
                <div className="flex text-[#D97706]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-karla text-sm text-slate-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="mt-6 pt-3 bg-[#EFF4FF] -mx-6 -mb-6 p-4 rounded-b-[4px] flex flex-col border-t border-slate-100">
                <span className="font-rubik font-bold text-sm text-[#00163D]">{testimonial.author}</span>
                <span className="font-karla text-xs text-slate-500">{testimonial.designation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
