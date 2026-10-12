import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface QuoteSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteSuccessModal: React.FC<QuoteSuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0A1D3F]/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full p-8 rounded-2xl shadow-2xl text-center space-y-4 border-t-4 border-[#D97706] animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-rubik text-xl text-[#00163D] uppercase font-bold">
          Quotation Request Dispatched!
        </h3>
        <p className="font-karla text-sm text-slate-600 leading-relaxed">
          Your parameters have reached the Senior Electrical Desk at Veera Ratna Towers, Hyderabad. Proforma sizing and commercial quote will be delivered to your inbox within <strong className="text-[#00163D]">15 minutes</strong>.
        </p>
        <div className="bg-[#EFF4FF] p-3 rounded-lg text-xs font-rubik text-[#00163D] font-bold">
          Assigned SLA Reference: #MRG-TEL-2025-0891
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-full bg-[#00163D] text-white py-3 rounded-lg font-rubik text-xs uppercase font-bold tracking-wider hover:bg-[#0F2B5C] transition-colors cursor-pointer"
        >
          Return to Portal
        </button>
      </div>
    </div>
  );
};
