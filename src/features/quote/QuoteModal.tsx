import React from 'react';
import { Modal } from '../../components/ui/Modal';
import { QuoteForm } from '../contact/QuoteForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedModelName?: string;
  selectedCapacity?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedModelName,
  selectedCapacity,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={selectedModelName ? `Quote for ${selectedModelName}` : 'Request Generator Quotation'}
      subtitle="Direct engineering dispatch from M.R Generators Hyderabad"
      maxWidth="lg"
    >
      <div className="space-y-4">
        {selectedModelName && (
          <div className="p-3 bg-brand-softBlue rounded-[2px] border border-blue-200 text-xs font-karla text-brand-blue font-bold uppercase tracking-wider flex items-center justify-between">
            <span>Selected Unit: {selectedModelName}</span>
            {selectedCapacity && <span>Rating: {selectedCapacity}</span>}
          </div>
        )}
        <QuoteForm
          initialCapacity={selectedCapacity}
          onSuccess={() => {
            // keep open for confirmation message inside form
          }}
        />
      </div>
    </Modal>
  );
};
