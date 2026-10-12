import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TestimonialItem } from '../../types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-xs border border-slate-100 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="space-y-3.5">
        {/* Star Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-brand-amber fill-brand-amber"
            />
          ))}
        </div>

        {/* Quote */}
        <p className="font-karla text-xs sm:text-sm text-industrial-textMuted leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Reviewer Details */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <div>
          <h4 className="font-rubik font-medium text-sm text-navy-950">
            {testimonial.name}
          </h4>
          <p className="font-karla text-xs font-bold uppercase tracking-wider text-industrial-textLightMuted mt-0.5">
            {testimonial.designation}
          </p>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-karla font-bold text-brand-blue uppercase tracking-wider">
          <CheckCircle className="w-3.5 h-3.5 text-brand-blue shrink-0" />
          <span>Verified</span>
        </div>
      </div>
    </div>
  );
};
