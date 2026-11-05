import React from 'react';
import { Question, OptionKey, Category } from '../types/quiz';

interface QuestionNavigationProps {
  questions: Question[];
  currentIndex: number;
  userAnswers: Record<number, OptionKey>;
  flaggedQuestions: Set<number>;
  onSelectQuestion: (index: number) => void;
}

export const QuestionNavigation: React.FC<QuestionNavigationProps> = ({
  questions,
  currentIndex,
  userAnswers,
  flaggedQuestions,
  onSelectQuestion,
}) => {
  const answeredCount = Object.keys(userAnswers).length;
  const total = questions.length;

  // Category counts
  const categoryStats: Record<Category, { answered: number; total: number }> = {
    'React': { answered: 0, total: 8 },
    'TypeScript': { answered: 0, total: 8 },
    'Tailwind CSS': { answered: 0, total: 7 },
    'Basic Optimization': { answered: 0, total: 7 }
  };

  questions.forEach(q => {
    if (userAnswers[q.id]) {
      categoryStats[q.category].answered++;
    }
  });

  return (
    <div className="space-y-6">
      {/* 30 Questions Grid */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            კითხვების რუკა (30)
          </h3>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            {answeredCount}/{total}
          </span>
        </div>

        <div className="grid grid-cols-6 gap-2">
          {questions.map((q, idx) => {
            const isCurrent = idx === currentIndex;
            const isAnswered = Boolean(userAnswers[q.id]);
            const isFlagged = flaggedQuestions.has(q.id);

            let btnClasses = "h-8 sm:h-9 rounded-lg font-mono text-xs font-bold transition flex items-center justify-center relative ";

            if (isCurrent) {
              btnClasses += "ring-2 ring-white ring-offset-2 ring-offset-slate-900 bg-sky-500 text-white shadow-lg ";
            } else if (isFlagged) {
              btnClasses += "bg-amber-500/20 border border-amber-500/80 text-amber-300 hover:bg-amber-500/30 ";
            } else if (isAnswered) {
              btnClasses += "bg-sky-500/20 border border-sky-500/40 text-sky-300 hover:bg-sky-500/30 ";
            } else {
              btnClasses += "bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200 ";
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => onSelectQuestion(idx)}
                className={btnClasses}
              >
                {q.id}
                {isFlagged && !isCurrent && (
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-slate-800 border border-slate-700" />
            <span>შეუვსებელი</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-sky-500/20 border border-sky-500 text-sky-400" />
            <span>პასუხგაცემული</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-amber-500/20 border border-amber-500 text-amber-400" />
            <span>მონიშნული</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded ring-2 ring-white bg-slate-700" />
            <span>აქტიური</span>
          </div>
        </div>
      </div>

      {/* Category breakdown stats */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          თემები და განაწილება
        </h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/50 border border-cyan-500/20">
            <span className="flex items-center gap-2 font-medium text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              React
            </span>
            <span className="font-mono text-slate-300">
              {categoryStats['React'].answered}/{categoryStats['React'].total}
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/50 border border-blue-500/20">
            <span className="flex items-center gap-2 font-medium text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              TypeScript
            </span>
            <span className="font-mono text-slate-300">
              {categoryStats['TypeScript'].answered}/{categoryStats['TypeScript'].total}
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/50 border border-teal-500/20">
            <span className="flex items-center gap-2 font-medium text-teal-400">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              Tailwind CSS
            </span>
            <span className="font-mono text-slate-300">
              {categoryStats['Tailwind CSS'].answered}/{categoryStats['Tailwind CSS'].total}
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/50 border border-amber-500/20">
            <span className="flex items-center gap-2 font-medium text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Basic Optimization
            </span>
            <span className="font-mono text-slate-300">
              {categoryStats['Basic Optimization'].answered}/{categoryStats['Basic Optimization'].total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

