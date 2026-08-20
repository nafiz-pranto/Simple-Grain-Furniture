import React from 'react';
import { useShop } from '../context/ShopContext';
import { Check, Sparkles } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up pointer-events-none">
      <div className="bg-[#191816] text-[#FDFBF7] px-4 py-3 rounded-xs border border-[#38342F] shadow-xl flex items-center space-x-3 text-xs tracking-wide">
        <span className="w-5 h-5 rounded-full bg-[#C5A880] text-[#191816] flex items-center justify-center shrink-0">
          <Check size={12} strokeWidth={2.5} />
        </span>
        <span className="font-medium text-[#EDE6DA]">{toastMessage}</span>
      </div>
    </div>
  );
};
