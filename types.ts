export interface LessonInput {
  subject: string;
  grade: string;
  topic: string;
  objectives: string;
  duration: string; // e.g., 45 phút
}

export interface DigitalTool {
  name: string;
  description: string;
  usage: string; // How to use in this specific lesson
  link?: string;
}

export interface Activity {
  phase: string; // Khởi động, Hình thành kiến thức, Luyện tập, Vận dụng
  description: string;
  digitalIntegration: string; // How digital competency is integrated
  competencyFocus: string[]; // e.g., "Tư duy thông tin", "Sáng tạo nội dung"
}

export interface Assessment {
  method: string;
  tool: string;
  criteria: string;
}

export interface LessonPlanResponse {
  title: string;
  overview: string;
  suggestedTools: DigitalTool[];
  activities: Activity[];
  assessments: Assessment[];
  competencySummary: string; // Summary of digital competencies addressed
}
