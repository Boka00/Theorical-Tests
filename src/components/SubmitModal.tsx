import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface SubmitModalProps {
  isOpen: boolean;
  answeredCount: number;
  totalCount: number;
  onClose: () => void;
  onConfirm: () => void;
}

export const SubmitModal: React.FC<SubmitModalProps> = ({
  isOpen,
  answeredCount,
  totalCount,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  const unansweredCount = totalCount - answeredCount;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mx-auto">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div className="text-center space-y-1">
          <h3 className="text-lg font-bold text-white">
            ნამდვილად გსურს გამოცდის დასრულება?
          </h3>
          <p className="text-xs text-slate-400">
            შეამოწმე, გაქვს თუ არა ყველა კითხვაზე გაცემული პასუხი.
          </p>
        </div>

        <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 text-xs space-y-2">
          <div className="flex justify-between text-slate-300">
            <span>პასუხგაცემული:</span>
            <span className="font-bold text-emerald-400 font-mono">
              {answeredCount} / {totalCount}
            </span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>გამოტოვებული / უპასუხო:</span>
            <span className="font-bold text-rose-400 font-mono">
              {unansweredCount} კითხვა
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs sm:text-sm transition"
          >
            გაგრძელება
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition"
          >
            კი, დასრულება
          </button>
        </div>
      </div>
    </div>
  );
};

