import React, { useState } from 'react';
import { Modal } from '../../components/ui/Modal';
import { FileDown, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setDownloaded(true);
    setTimeout(() => {
      // Simulate file download trigger
      const link = document.createElement('a');
      link.href = '#';
      link.setAttribute('download', 'MR_Generators_Greaves_Power_Brochure.pdf');
    }, 500);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Download Technical Brochure"
      subtitle="Complete Greaves Power DG Sets Specifications & Catalog (5 - 2000 kVA)"
      maxWidth="md"
    >
      {downloaded ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-rubik font-semibold text-xl text-navy-950">
            Brochure Ready!
          </h4>
          <p className="font-karla text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
            A copy has been queued for {email}. You can also download it directly below.
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                setDownloaded(false);
                onClose();
              }}
            >
              Close
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleDownload} className="space-y-4">
          <div className="p-3 bg-surface-light rounded-[2px] border border-slate-100 flex items-center gap-3">
            <FileDown className="w-6 h-6 text-brand-blue shrink-0" />
            <div className="text-xs font-karla">
              <p className="font-bold text-navy-950 uppercase tracking-wide">
                Greaves CPCB IV+ DG Sets 2026 Edition
              </p>
              <p className="text-slate-500">PDF Document • 4.8 MB • Includes Engine Curves &amp; Dimensions</p>
            </div>
          </div>

          <div>
            <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-600 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Suresh Varma"
              className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-[2px] font-karla text-sm text-navy-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          <div>
            <label className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-600 mb-1">
              Corporate / Personal Email *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. suresh@infra.com"
              className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-[2px] font-karla text-sm text-navy-950 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          <Button variant="primary" fullWidth size="md" type="submit">
            Download PDF Brochure Now
          </Button>
        </form>
      )}
    </Modal>
  );
};
