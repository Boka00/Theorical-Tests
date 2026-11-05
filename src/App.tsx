import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { QuestionCard } from './components/QuestionCard';
import { QuestionNavigation } from './components/QuestionNavigation';
import { SubmitModal } from './components/SubmitModal';
import { ResultsDashboard } from './components/ResultsDashboard';
import { useTimer } from './hooks/useTimer';
import { generateExamQuestions } from './data/questions';
import { Question, OptionKey, ExamResult, Category } from './types/quiz';

export const App: React.FC = () => {
  // Fresh randomized 30-question pool on mount
  const [questions, setQuestions] = useState<Question[]>(() => generateExamQuestions());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, OptionKey>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);

  const calculateResult = useCallback((): ExamResult => {
    let score = 0;
    const categoryScores: Record<Category, { correct: number; total: number }> = {
      'React': { correct: 0, total: 8 },
      'TypeScript': { correct: 0, total: 8 },
      'Tailwind CSS': { correct: 0, total: 7 },
      'Basic Optimization': { correct: 0, total: 7 }
    };

    questions.forEach((q) => {
      const ans = userAnswers[q.id];
      if (ans === q.correct) {
        score++;
        categoryScores[q.category].correct++;
      }
    });

    const total = questions.length;
    const correctCount = score;
    const incorrectCount = total - score;
    const percentage = Number(((score / total) * 100).toFixed(1));

    const weakCategories = (Object.keys(categoryScores) as Category[]).filter(
      (cat) => (categoryScores[cat].correct / categoryScores[cat].total) < 0.75
    );

    return {
      score,
      total,
      percentage,
      correctCount,
      incorrectCount,
      categoryScores,
      weakCategories
    };
  }, [questions, userAnswers]);

  const handleTimeUp = useCallback(() => {
    alert('⏱️ 45-წუთიანი დრო ამოიწურა! გამოცდა ავტომატურად სრულდება.');
    const res = calculateResult();
    setExamResult(res);
    setIsSubmitted(true);
    setIsSubmitModalOpen(false);
  }, [calculateResult]);

  const { formatted, isWarning, stopTimer, resetTimer } = useTimer(45 * 60, handleTimeUp);

  const handleSelectOption = (key: OptionKey) => {
    if (isSubmitted) return;
    const qId = questions[currentIndex].id;
    setUserAnswers((prev) => ({ ...prev, [qId]: key }));
  };

  const handleToggleFlag = () => {
    const qId = questions[currentIndex].id;
    setFlaggedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(qId)) {
        next.delete(qId);
      } else {
        next.add(qId);
      }
      return next;
    });
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setIsSubmitModalOpen(true);
    }
  };

  const handleConfirmSubmit = () => {
    stopTimer();
    const res = calculateResult();
    setExamResult(res);
    setIsSubmitted(true);
    setIsSubmitModalOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate completely new random 30 questions when restarting
  const handleRestart = () => {
    const newQuestions = generateExamQuestions();
    setQuestions(newQuestions);
    setUserAnswers({});
    setFlaggedQuestions(new Set());
    setCurrentIndex(0);
    setIsSubmitted(false);
    setExamResult(null);
    resetTimer();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Shuffle on demand
  const handleShuffle = () => {
    const hasAnswers = Object.keys(userAnswers).length > 0;
    if (hasAnswers) {
      if (!confirm("ნამდვილად გსურს ახალი ვარიანტის გენერირება? არსებული პასუხები განულდება.")) {
        return;
      }
    }
    const newQuestions = generateExamQuestions();
    setQuestions(newQuestions);
    setUserAnswers({});
    setFlaggedQuestions(new Set());
    setCurrentIndex(0);
    resetTimer();
  };

  // Keyboard Navigation
  useEffect(() => {
    if (isSubmitted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement).tagName.toLowerCase())) {
        return;
      }

      if (e.key === 'ArrowRight') {
        if (currentIndex < questions.length - 1) setCurrentIndex((i) => i + 1);
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) setCurrentIndex((i) => i - 1);
      } else if (['a', 'A', '1'].includes(e.key)) {
        handleSelectOption('A');
      } else if (['b', 'B', '2'].includes(e.key)) {
        handleSelectOption('B');
      } else if (['c', 'C', '3'].includes(e.key)) {
        handleSelectOption('C');
      } else if (['d', 'D', '4'].includes(e.key)) {
        handleSelectOption('D');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isSubmitted, questions]);

  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-sky-500 selection:text-white">
      {/* Sticky Header */}
      <Header
        formattedTime={formatted}
        isWarning={isWarning}
        answeredCount={answeredCount}
        totalCount={questions.length}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        onToggleMobileNav={() => setIsMobileNavOpen(true)}
        onShuffle={!isSubmitted ? handleShuffle : undefined}
      />

      {/* Main Content Area */}
      {!isSubmitted ? (
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Active Question */}
          <div className="lg:col-span-8">
            <QuestionCard
              question={questions[currentIndex]}
              currentIndex={currentIndex}
              totalQuestions={questions.length}
              selectedOption={userAnswers[questions[currentIndex].id]}
              isFlagged={flaggedQuestions.has(questions[currentIndex].id)}
              onSelectOption={handleSelectOption}
              onToggleFlag={handleToggleFlag}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </div>

          {/* Right Column: Question Navigator */}
          <div className="hidden lg:block lg:col-span-4">
            <QuestionNavigation
              questions={questions}
              currentIndex={currentIndex}
              userAnswers={userAnswers}
              flaggedQuestions={flaggedQuestions}
              onSelectQuestion={(idx) => setCurrentIndex(idx)}
            />
          </div>
        </main>
      ) : (
        examResult && (
          <ResultsDashboard
            result={examResult}
            questions={questions}
            userAnswers={userAnswers}
            onRestart={handleRestart}
          />
        )
      )}

      {/* Submit Confirmation Modal */}
      <SubmitModal
        isOpen={isSubmitModalOpen}
        answeredCount={answeredCount}
        totalCount={questions.length}
        onClose={() => setIsSubmitModalOpen(false)}
        onConfirm={handleConfirmSubmit}
      />

      {/* Mobile Grid Modal */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 lg:hidden">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-sm w-full p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">კითხვების რუკა</h3>
              <button
                onClick={() => setIsMobileNavOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {questions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = Boolean(userAnswers[q.id]);
                const isFlagged = flaggedQuestions.has(q.id);

                let btnClasses = "h-8 rounded-lg font-mono text-xs font-bold transition flex items-center justify-center relative ";

                if (isCurrent) {
                  btnClasses += "ring-2 ring-white ring-offset-2 ring-offset-slate-900 bg-sky-500 text-white ";
                } else if (isFlagged) {
                  btnClasses += "bg-amber-500/20 border border-amber-500 text-amber-300 ";
                } else if (isAnswered) {
                  btnClasses += "bg-sky-500/20 border border-sky-500/40 text-sky-300 ";
                } else {
                  btnClasses += "bg-slate-950 border border-slate-800 text-slate-400 ";
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsMobileNavOpen(false);
                    }}
                    className={btnClasses}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
