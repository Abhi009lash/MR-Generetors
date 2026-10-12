import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { REVIEWS_DATA } from '../../core/data';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-surface-soft border-b border-slate-200/60 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex px-3 py-1 bg-[#E5EEFF] rounded-[2px] text-brand-blue font-karla font-bold text-xs uppercase tracking-wider">
            Client Testimonials
          </div>

          <h2 className="font-rubik font-semibold text-2xl sm:text-3xl lg:text-4xl text-navy-950 tracking-tight leading-tight">
            Verified Reviews from Engineering &amp; Facility Managers
          </h2>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {REVIEWS_DATA.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* 2 Secondary Testimonial Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-2">
          <div className="bg-white p-5 sm:p-6 rounded-lg border border-slate-100 shadow-xs flex items-start gap-4">
            <Quote className="w-8 h-8 text-brand-softBlue shrink-0" />
            <div className="space-y-1">
              <p className="font-karla italic text-xs sm:text-sm text-industrial-textMuted leading-relaxed">
                &ldquo;Zero unplanned downtime during crucial monsoon grid fluctuations across our Gachibowli facility.&rdquo;
              </p>
              <p className="font-rubik font-medium text-xs sm:text-sm text-navy-950 pt-1">
                — Facility Director, IT Campus Hyderabad
              </p>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-lg border border-slate-100 shadow-xs flex items-start gap-4">
            <Quote className="w-8 h-8 text-brand-softBlue shrink-0" />
            <div className="space-y-1">
              <p className="font-karla italic text-xs sm:text-sm text-industrial-textMuted leading-relaxed">
                &ldquo;With over 800 kVA of prime power on lease during plant expansion, they delivered on budget and ahead of time.&rdquo;
              </p>
              <p className="font-rubik font-medium text-xs sm:text-sm text-navy-950 pt-1">
                — Technical Director, Industrial Pharma Hub
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
