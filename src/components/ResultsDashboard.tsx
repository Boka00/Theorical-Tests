import React, { useState } from 'react';
import { RotateCcw, CheckCircle, BarChart3, Target } from 'lucide-react';
import { Question, OptionKey, ExamResult, Category } from '../types/quiz';
import { ReviewCard } from './ReviewCard';

interface ResultsDashboardProps {
  result: ExamResult;
  questions: Question[];
  userAnswers: Record<number, OptionKey>;
  onRestart: () => void;
}

type FilterType = 'all' | 'incorrect' | 'correct';

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({
  result,
  questions,
  userAnswers,
  onRestart,
}) => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredQuestions = questions.filter(q => {
    const isCorrect = userAnswers[q.id] === q.correct;
    if (filter === 'incorrect') return !isCorrect;
    if (filter === 'correct') return isCorrect;
    return true;
  });

  // Verdict config
  let resultIcon = '🎉';
  let verdictTitle = 'გამოცდა წარმატებით ჩაბარებულია!';
  let verdictSubtitle = 'კარგი საბაზისო ცოდნა გაქვს, თუმცა რამდენიმე ნიუანსზე დამატებითი პრაქტიკა გაგიუმჯობესებს შედეგს.';

  if (result.percentage >= 85) {
    resultIcon = '🏆';
    verdictTitle = 'შესანიშნავი შედეგი! მზად ხარ Junior Developer-ის პოზიციისთვის';
    verdictSubtitle = 'შენ აჩვენე თეორიისა და პრაქტიკული კოდის ღრმა გააზრება ოთხივე საკვანძო მიმართულებაში.';
  } else if (result.percentage >= 70) {
    resultIcon = '🎉';
    verdictTitle = 'გამოცდა წარმატებით ჩაბარებულია!';
    verdictSubtitle = 'სოლიდური შედეგია Junior დონისთვის, თუმცა რამდენიმე შეცდომაზე ყურადღების გამახვილება წაგადგება.';
  } else if (result.percentage >= 50) {
    resultIcon = '⚠️';
    verdictTitle = 'საბაზისო დონე დამაკმაყოფილებელია, თუმცა გჭირდება გამეორება';
    verdictSubtitle = 'რეკომენდებულია იმ თემების გადახედვა, სადაც შეცდომები დაუშვი (იხილე ქვემოთ მოცემული რეკომენდაციები).';
  } else {
    resultIcon = '📚';
    verdictTitle = 'გამოცდა ვერ ჩაბარდა — საჭიროა ინტენსიური მომზადება';
    verdictSubtitle = 'ნუ იდარდებ! ყურადღებით გაეცანი თითოეული კითხვის ახსნას და სცადე თავიდან.';
  }

  // Category advice tips map
  const categoryAdvice: Record<Category, string> = {
    'React': 'გაიმეორე React Hooks-ის წესები (closure-ები, state-ის ასინქრონულობა), Conditional Rendering (განსაკუთრებით 0 && ...) და Reconciliation / Key-ს როლი.',
    'TypeScript': 'ყურადღება გაამახვილე Union Narrowing-ზე (typeof, instanceof), interface vs type განსხვავებებზე და Generics-ის პრაქტიკულ გამოყენებაზე.',
    'Tailwind CSS': 'დააკვირდი Tailwind-ის Mobile-first პრინციპს (min-width), JIT კომპილატორის მუშაობას (არ დანაწევრო კლასები დინამიურად) და default spacing scale-ს.',
    'Basic Optimization': 'გადაიმეორე React.memo-ს Shallow comparison, ობიექტების Reference Inequality რენდერებში, Tree Shaking და Virtualization დიდი სიებისთვის.'
  };

  return (
    <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-slate-800/80 border border-slate-700 mb-4 shadow-inner text-4xl">
          {resultIcon}
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          {verdictTitle}
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-6">
          {verdictSubtitle}
        </p>

        {/* Big Numbers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
            <div className="text-xs text-slate-400 uppercase font-semibold">მიღებული ქულა</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              <span className="text-sky-400">{result.score}</span>
              <span className="text-slate-500 text-lg"> / {result.total}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
            <div className="text-xs text-slate-400 uppercase font-semibold">პროცენტი</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">
              {result.percentage}%
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
            <div className="text-xs text-slate-400 uppercase font-semibold">სწორი პასუხი</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 mt-1">
              {result.correctCount}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
            <div className="text-xs text-slate-400 uppercase font-semibold">არასწორი</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-rose-400 mt-1">
              {result.incorrectCount}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setFilter('incorrect')}
            className="px-5 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-sm font-semibold transition"
          >
            მხოლოდ შეცდომების ნახვა ({result.incorrectCount})
          </button>
          <button
            onClick={() => setFilter('all')}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold transition"
          >
            ყველა კითხვის გადახედვა
          </button>
          <button
            onClick={onRestart}
            className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm shadow-lg shadow-sky-500/20 transition flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>თავიდან დაწყება</span>
          </button>
        </div>

      </div>

      {/* Category Breakdown Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-sky-400" />
          <span>თემატური შეფასება</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(Object.entries(result.categoryScores) as [Category, { correct: number; total: number }][]).map(([catName, score]) => {
            const catPct = Math.round((score.correct / score.total) * 100);
            let colorBg = 'bg-emerald-500';
            if (catPct < 50) colorBg = 'bg-rose-500';
            else if (catPct < 75) colorBg = 'bg-amber-500';

            return (
              <div key={catName} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-bold text-slate-200">{catName}</span>
                    <span className="font-mono">{score.correct}/{score.total}</span>
                  </div>
                  <div className="text-xl font-black text-white mb-2 font-mono">
                    {catPct}%
                  </div>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className={`${colorBg} h-full rounded-full transition-all duration-500`} style={{ width: `${catPct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Target className="w-5 h-5 text-amber-400" />
          <span>რეკომენდაციები და მომზადების არეალი</span>
        </h3>

        {result.weakCategories.length === 0 ? (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong>შესანიშნავია!</strong> შენ გადალახე 75%-იანი ზღვარი ოთხივე თემატიკაში. მზად ხარ რეალურ ტექნიკურ გასაუბრებაზე თეორიული კითხვების თავდაჯერებულად გადასალახად.
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-slate-300 text-sm">
              შენი შედეგების მიხედვით, შემდეგი მიმართულებები საჭიროებს დამატებით გამეორებას:
            </p>
            <ul className="space-y-2.5">
              {result.weakCategories.map((cat) => (
                <li key={cat} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm">
                  <strong className="text-sky-400">{cat}:</strong>{' '}
                  <span className="text-slate-300">{categoryAdvice[cat]}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Detailed Review Section */}
      <div className="space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">კითხვების დეტალური ანალიზი</h3>
            <p className="text-xs text-slate-400">
              გაეცანი სწორ პასუხებსა და დეტალურ ახსნას თითოეული კითხვისთვის
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition ${
                filter === 'all' ? 'bg-slate-800 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              ყველა ({questions.length})
            </button>
            <button
              onClick={() => setFilter('incorrect')}
              className={`px-3 py-1.5 rounded-lg font-medium transition ${
                filter === 'incorrect' ? 'bg-slate-800 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              შეცდომები ({result.incorrectCount})
            </button>
            <button
              onClick={() => setFilter('correct')}
              className={`px-3 py-1.5 rounded-lg font-medium transition ${
                filter === 'correct' ? 'bg-slate-800 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              სწორი ({result.correctCount})
            </button>
          </div>
        </div>

        {/* Review Cards List */}
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="text-center p-8 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 text-sm">
              ამ ფილტრით კითხვები არ მოიძებნა.
            </div>
          ) : (
            filteredQuestions.map((q) => (
              <ReviewCard
                key={q.id}
                question={q}
                userAnswer={userAnswers[q.id]}
              />
            ))
          )}
        </div>
      </div>

    </div>
  );
};

