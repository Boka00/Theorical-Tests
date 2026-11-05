import React from 'react';
import { Bookmark, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Question, OptionKey, Category } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOption?: OptionKey;
  isFlagged: boolean;
  onSelectOption: (optionKey: OptionKey) => void;
  onToggleFlag: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const categoryStyles: Record<Category, string> = {
  'React': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  'TypeScript': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'Tailwind CSS': 'bg-teal-500/10 text-teal-400 border-teal-500/30',
  'Basic Optimization': 'bg-amber-500/10 text-amber-400 border-amber-500/30'
};

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  isFlagged,
  onSelectOption,
  onToggleFlag,
  onPrev,
  onNext,
}) => {
  const isLastQuestion = currentIndex === totalQuestions - 1;

  return (
    <div className="space-y-6">
      {/* Active Question Box */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden transition-all duration-200">
        
        {/* Header: Category Badge & Flag Button */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${categoryStyles[question.category]}`}>
              {question.category}
            </span>
            <span className="text-xs font-medium text-slate-400 font-mono">
              კითხვა {question.id} / {totalQuestions}
            </span>
          </div>

          <button
            onClick={onToggleFlag}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition ${
              isFlagged 
                ? 'border-amber-500/50 bg-amber-500/10 text-amber-400' 
                : 'border-slate-700 bg-slate-800/70 hover:bg-slate-700 text-slate-300'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-400 text-amber-400' : 'text-slate-400'}`} />
            <span>{isFlagged ? 'მონიშნულია' : 'მონიშვნა'}</span>
          </button>
        </div>

        {/* Question Title */}
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-100 leading-relaxed mb-4">
          {question.title}
        </h2>

        {/* Code Snippet Box */}
        {question.code && (
          <div className="mb-6 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner">
            <div className="px-4 py-2 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>{question.codeLang || 'Code'}</span>
              <span className="text-slate-500 text-[11px]">Snippet</span>
            </div>
            <pre className="p-4 text-xs sm:text-sm text-sky-200 overflow-x-auto leading-relaxed">
              <code>{question.code}</code>
            </pre>
          </div>
        )}

        {/* Options Grid */}
        <div className="space-y-3">
          {(Object.entries(question.options) as [OptionKey, string][]).map(([key, text]) => {
            const isSelected = selectedOption === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => onSelectOption(key)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3 group ${
                  isSelected 
                    ? 'bg-sky-500/15 border-sky-500 text-white shadow-md shadow-sky-500/10' 
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 text-slate-300'
                }`}
              >
                <span className={`w-7 h-7 shrink-0 rounded-lg flex items-center justify-center font-mono font-bold text-xs border transition ${
                  isSelected 
                    ? 'bg-sky-500 border-sky-400 text-white' 
                    : 'bg-slate-900 border-slate-700 text-slate-400 group-hover:border-slate-600'
                }`}>
                  {key}
                </span>
                <span className="text-xs sm:text-sm font-medium leading-relaxed pt-0.5">
                  {text}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-sm transition flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>წინა</span>
        </button>

        <div className="text-xs text-center font-medium">
          {selectedOption ? (
            <span className="text-sky-400 font-semibold flex items-center gap-1.5">
              <Check className="w-4 h-4" />
              <span>არჩეულია: ვარიანტი {selectedOption}</span>
            </span>
          ) : (
            <span className="text-slate-500">პასუხგაუცემელი</span>
          )}
        </div>

        <button
          onClick={onNext}
          className={`px-6 py-2.5 rounded-xl font-medium text-sm shadow-lg transition flex items-center gap-2 ${
            isLastQuestion
              ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-500/20'
              : 'bg-sky-500 hover:bg-sky-400 text-white shadow-sky-500/20'
          }`}
        >
          <span>{isLastQuestion ? 'დასრულება' : 'შემდეგი'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

