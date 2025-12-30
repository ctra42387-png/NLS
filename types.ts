
export enum ExamType {
  REGULAR = 'Thường xuyên',
  MID_TERM = 'Giữa kỳ',
  FINAL = 'Cuối kỳ',
  TOPICAL = 'Theo chủ đề',
}

export enum QuestionFormat {
  MCQ = 'Trắc nghiệm',
  ESSAY = 'Tự luận',
  COMBINED = 'Kết hợp (Trắc nghiệm + Tự luận)',
}

export type InputMode = 'manual' | 'upload';

export interface QuestionCounts {
  part1: number; // Nhiều lựa chọn
  part2: number; // Đúng/Sai
  part3: number; // Trả lời ngắn
  part4: number; // Tự luận
}

export interface LevelDistribution {
  awareness: number; // Nhận biết
  understanding: number; // Thông hiểu
  application: number; // Vận dụng
}

export interface ScopeItem {
  id: string;
  chapter: string; // Tên chương/chủ đề
  name: string; // Tên bài học/nội dung chi tiết
  periods: number; // Số tiết
}

export interface ExamConfig {
  subject: string;
  grade: string;
  textbook: string[];
  scopeType: 'chapter' | 'lesson';
  examType: ExamType;
  duration: number;
  scopeItems: ScopeItem[];
  format: QuestionFormat;
  
  inputMode: InputMode;
  uploadedContent?: string; // HTML content parsed from docx

  questionCounts: QuestionCounts;
  levelDistribution: LevelDistribution;
}

export interface GeneratedExamData {
  matrix: string;
  specification: string;
  examPaper: string;
  answers: string;
}

export interface GenerationState {
  isLoading: boolean;
  error: string | null;
  data: GeneratedExamData | null;
}

export interface SavedExam {
  id: string;
  title: string;
  savedAt: string;
  config: ExamConfig;
  data: GeneratedExamData;
}

export interface CurriculumLesson {
  name: string;
  defaultPeriods?: number;
}

export interface CurriculumChapter {
  chapter: string;
  lessons?: CurriculumLesson[];
}

export interface ChatMessage {
  role: 'user' | 'model' | 'systemError';
  content: string;
}

// FIX: Add missing type definitions to resolve import errors.
export interface LessonInput {
  subject: string;
  grade: string;
  topic: string;
  selectedCompetencies: string[];
}

export interface SuggestedTool {
  name: string;
  description: string;
  usage: string;
  link?: string | null;
}

export interface Activity {
  phase: string;
  description: string;
  digitalIntegration: string;
  competencyFocus: string[];
}

export interface Assessment {
  method: string;
  tool: string;
  criteria: string;
}

export interface LessonPlanResponse {
  title: string;
  overview: string;
  competencySummary: string;
  suggestedTools: SuggestedTool[];
  activities: Activity[];
  assessments: Assessment[];
}
