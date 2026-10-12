import React, { useState } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { CAPACITY_OPTIONS } from '../../core/config';
import { QuoteFormData } from '../../types';
import { isValidEmail, isValidPhoneNumber } from '../../utils/formatters';
import { ErrorState } from '../../components/feedback/FeedbackState';

interface QuoteFormProps {
  initialCapacity?: string;
  onSuccess?: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialCapacity,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    capacity: initialCapacity || CAPACITY_OPTIONS[1],
    application: 'Industrial / Commercial Power',
    location: 'Hyderabad',
    message: '',
    agreeTerms: true,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Please provide a valid phone number';
    } else if (!isValidPhoneNumber(formData.phone)) {
      errors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.agreeTerms) {
      errors.agreeTerms = 'Please agree to contact terms';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulated robust API dispatch with network latency
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSuccess(true);
      if (onSuccess) onSuccess();
    } catch {
      setSubmitError('Failed to submit quote request. Please retry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-2xl text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-rubik font-bold text-2xl text-navy-950">
          Quote Request Received!
        </h3>
        <p className="font-karla text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
          Thank you, <strong className="text-navy-950">{formData.fullName}</strong>. Our senior power systems engineer has received your specifications for <strong className="text-navy-950">{formData.capacity}</strong> and will call you within 30 minutes.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData((prev) => ({ ...prev, message: '' }));
          }}
          className="mt-4 px-6 py-2.5 bg-navy-950 text-white rounded-[2px] font-karla font-bold text-xs uppercase tracking-wider hover:bg-navy-900 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-2xl border border-slate-100">
      <div className="mb-6">
        <h3 className="font-rubik font-bold text-xl sm:text-2xl text-navy-950">
          Request Turnkey Quotation
        </h3>
        <p className="font-karla text-xs sm:text-sm text-slate-500 mt-1">
          Fill out the details below and our lead power systems engineer will contact you within 30 minutes.
        </p>
      </div>

      {submitError && (
        <ErrorState
          message={submitError}
          onRetry={handleSubmit}
          className="mb-4"
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-600 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Rajesh Kumar"
              className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-[2px] font-karla text-sm text-navy-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            {formErrors.fullName && (
              <p className="text-xs text-brand-red font-karla mt-1">{formErrors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-600 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. 9876543210"
              className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-[2px] font-karla text-sm text-navy-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            {formErrors.phone && (
              <p className="text-xs text-brand-red font-karla mt-1">{formErrors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-600 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. rajesh@company.com"
            className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-[2px] font-karla text-sm text-navy-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
          />
          {formErrors.email && (
            <p className="text-xs text-brand-red font-karla mt-1">{formErrors.email}</p>
          )}
        </div>

        <div>
          <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-600 mb-1">
            Required kVA Capacity *
          </label>
          <div className="relative">
            <select
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
              className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-[2px] font-karla text-sm text-navy-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue appearance-none pr-8 cursor-pointer"
            >
              {CAPACITY_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-600 mb-1">
            Project / Load Details (Optional)
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your power requirement, facility type, or delivery timeline..."
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-[2px] font-karla text-sm text-navy-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
          />
        </div>

        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            id="agreeTerms"
            checked={formData.agreeTerms}
            onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
            className="w-4 h-4 rounded text-brand-blue focus:ring-brand-blue border-slate-300"
          />
          <label htmlFor="agreeTerms" className="text-xs font-karla text-slate-600 cursor-pointer">
            I agree to receive official technical specifications and quotation via phone / WhatsApp.
          </label>
        </div>
        {formErrors.agreeTerms && (
          <p className="text-xs text-brand-red font-karla">{formErrors.agreeTerms}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-navy-950 hover:bg-navy-900 disabled:opacity-50 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-sm mt-2"
        >
          {isSubmitting ? (
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <span>Get Detailed Proposal &amp; Quote</span>
          )}
        </button>
      </form>
    </div>
  );
};
