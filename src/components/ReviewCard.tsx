import React from 'react';
import { Check, X, Lightbulb } from 'lucide-react';
import { Question, OptionKey, Category } from '../types/quiz';

interface ReviewCardProps {
  question: Question;
  userAnswer?: OptionKey;
}

const categoryStyles: Record<Category, string> = {
  'React': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  'TypeScript': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'Tailwind CSS': 'bg-teal-500/10 text-teal-400 border-teal-500/30',
  'Basic Optimization': 'bg-amber-500/10 text-amber-400 border-amber-500/30'
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ question, userAnswer }) => {
  const isCorrect = userAnswer === question.correct;

  return (
    <div className={`bg-slate-900 border rounded-2xl p-6 shadow-md space-y-4 ${
      isCorrect ? 'border-emerald-500/30' : 'border-rose-500/30'
    }`}>
      {/* Category & Status */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${categoryStyles[question.category]}`}>
            {question.category}
          </span>
          <span className="text-xs text-slate-400 font-medium">კითხვა {question.id}</span>
        </div>
        <div>
          {isCorrect ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Check className="w-3.5 h-3.5" />
              <span>სწორია (+1)</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <X className="w-3.5 h-3.5" />
              <span>არასწორია (0)</span>
            </span>
          )}
        </div>
      </div>

      {/* Question Title */}
      <h4 className="text-sm sm:text-base font-semibold text-white leading-relaxed">
        {question.title}
      </h4>

      {/* Code Snippet if present */}
      {question.code && (
        <div className="my-3 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
          <pre className="p-3.5 text-xs text-sky-200 overflow-x-auto font-mono">
            <code>{question.code}</code>
          </pre>
        </div>
      )}

      {/* Options */}
      <div className="space-y-1.5">
        {(Object.entries(question.options) as [OptionKey, string][]).map(([key, text]) => {
          const isSelected = userAnswer === key;
          const isRight = question.correct === key;

          let badgeClass = "border-slate-800 bg-slate-950/60 text-slate-400";
          let rowClass = "border-transparent";

          if (isRight) {
            badgeClass = "bg-emerald-500 text-white font-bold border-emerald-400";
            rowClass = "bg-emerald-500/10 border-emerald-500/30 text-emerald-200";
          } else if (isSelected && !isRight) {
            badgeClass = "bg-rose-500 text-white font-bold border-rose-400";
            rowClass = "bg-rose-500/10 border-rose-500/30 text-rose-200";
          }

          return (
            <div
              key={key}
              className={`p-2.5 rounded-xl border flex items-start gap-2.5 text-xs sm:text-sm ${rowClass}`}
            >
              <span className={`w-6 h-6 shrink-0 rounded flex items-center justify-center font-mono text-xs border ${badgeClass}`}>
                {key}
              </span>
              <span className="flex-1 pt-0.5">{text}</span>
              {isRight && (
                <span className="text-emerald-400 text-xs font-bold uppercase ml-2 flex items-center gap-1">
                  ✓ სწორი
                </span>
              )}
              {isSelected && !isRight && (
                <span className="text-rose-400 text-xs font-bold uppercase ml-2 flex items-center gap-1">
                  ✗ შენი არჩევანი
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Explanation Box */}
      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-1">
        <div className="font-bold text-sky-400 flex items-center gap-1.5">
          <Lightbulb className="w-4 h-4 text-amber-400" />
          <span>ახსნა და განმარტება:</span>
        </div>
        <p className="leading-relaxed pl-5 text-slate-300">
          {question.explanation}
        </p>
      </div>
    </div>
  );
};

