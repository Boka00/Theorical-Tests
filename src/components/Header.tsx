import React from 'react';
import { Clock, Menu, CheckCircle2, Shuffle } from 'lucide-react';

interface HeaderProps {
  formattedTime: string;
  isWarning: boolean;
  answeredCount: number;
  totalCount: number;
  onOpenSubmitModal: () => void;
  onToggleMobileNav: () => void;
  onShuffle?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  formattedTime,
  isWarning,
  answeredCount,
  totalCount,
  onOpenSubmitModal,
  onToggleMobileNav,
  onShuffle,
}) => {
  const percentage = Math.round((answeredCount / totalCount) * 100);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20 font-bold text-lg text-white">
            🎓
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
              Front-End გამოცდის სიმულაცია
              <span className="hidden md:inline-flex px-2 py-0.5 rounded text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                Junior Level
              </span>
            </h1>
            <p className="text-xs text-slate-400 hidden sm:block">
              30 კითხვა (დინამიური ბაზიდან) • React, TypeScript, Tailwind, Optimization
            </p>
          </div>
        </div>

        {/* Center: Timer & Progress */}
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-inner transition-colors ${
            isWarning 
              ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 animate-pulse' 
              : 'bg-slate-800/80 border-slate-700 text-slate-100'
          }`}>
            <Clock className={`w-4 h-4 ${isWarning ? 'text-rose-400' : 'text-sky-400'}`} />
            <span className="font-mono text-sm sm:text-base font-bold">{formattedTime}</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-slate-400 font-medium">
            <span>პროგრესი:</span>
            <span className="font-bold text-sky-400 font-mono">
              {answeredCount}/{totalCount} ({percentage}%)
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {onShuffle && (
            <button
              onClick={onShuffle}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition"
              title="ახალი 30 კითხვის შემთხვევითი შერჩევა ბაზიდან"
            >
              <Shuffle className="w-3.5 h-3.5 text-sky-400" />
              <span>ახალი ვარიანტი</span>
            </button>
          )}

          <button
            onClick={onToggleMobileNav}
            className="lg:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
            title="კითხვების ნავიგაცია"
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenSubmitModal}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition transform active:scale-95 flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>დასრულება</span>
            <span className="hidden sm:inline font-mono">(SUBMIT)</span>
          </button>
        </div>

      </div>

      {/* Linear Progress Bar */}
      <div className="w-full h-1 bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </header>
  );
};
