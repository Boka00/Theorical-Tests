export type Category = 'React' | 'TypeScript' | 'Tailwind CSS' | 'Basic Optimization';

export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: number;
  category: Category;
  title: string;
  code?: string | null;
  codeLang?: string;
  options: Record<OptionKey, string>;
  correct: OptionKey;
  explanation: string;
}

export interface CategoryScore {
  correct: number;
  total: number;
}

export interface ExamResult {
  score: number;
  total: number;
  percentage: number;
  correctCount: number;
  incorrectCount: number;
  categoryScores: Record<Category, CategoryScore>;
  weakCategories: Category[];
}

