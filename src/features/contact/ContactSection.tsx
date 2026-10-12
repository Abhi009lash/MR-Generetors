import React from 'react';
import { ContactInfo } from './ContactInfo';
import { QuoteForm } from './QuoteForm';

interface ContactSectionProps {
  initialCapacity?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialCapacity,
}) => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-navy-900 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Emergency Contacts & Dispatch Information */}
          <div className="lg:col-span-6">
            <ContactInfo />
          </div>

          {/* Right Column: Quote Generator Form */}
          <div className="lg:col-span-6">
            <QuoteForm initialCapacity={initialCapacity} />
          </div>
        </div>
      </div>
    </section>
  );
};
