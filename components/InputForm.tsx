import React, { useState } from 'react';
import { LessonInput } from '../types';
import { Loader2, Sparkles, Book, Layers, FileText } from 'lucide-react';
import CompetencySelector from './CompetencySelector';

interface InputFormProps {
  onSubmit: (data: LessonInput) => void;
  isLoading: boolean;
}

const SUBJECTS = [
  "Toán học", "Ngữ văn", "Tiếng Anh", "Khoa học tự nhiên", 
  "Lịch sử & Địa lý", "Tin học", "Công nghệ", "Giáo dục công dân", 
  "Nghệ thuật", "Hoạt động trải nghiệm"
];

const GRADES = [
  "Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5",
  "Lớp 6", "Lớp 7", "Lớp 8", "Lớp 9",
  "Lớp 10", "Lớp 11", "Lớp 12"
];

const InputForm: React.FC<InputFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<LessonInput>({
    subject: SUBJECTS[0],
    grade: GRADES[5], // Default Grade 6
    topic: '',
    selectedCompetencies: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCompetenciesChange = (competencies: string[]) => {
    setFormData(prev => ({ ...prev, selectedCompetencies: competencies }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-indigo-500/10 border border-white/50 p-6 md:p-8 relative overflow-hidden group">
      {/* Top decoration */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Book className="w-4 h-4 text-indigo-500" />
              Môn học
            </label>
            <div className="relative">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none font-medium text-gray-700"
              >
                {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-500" />
              Khối lớp
            </label>
            <div className="relative">
              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all appearance-none font-medium text-gray-700"
              >
                {GRADES.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <FileText className="w-4 h-4 text-pink-500" />
            Tên bài dạy / Chủ đề
          </label>
          <input
            type="text"
            name="topic"
            required
            placeholder="VD: Cấu tạo nguyên tử, Truyện Kiều..."
            value={formData.topic}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all placeholder:text-gray-400 font-medium"
          />
        </div>

        {/* Competency Selector */}
        <div className="pt-2">
          <CompetencySelector 
            selectedCompetencies={formData.selectedCompetencies}
            onChange={handleCompetenciesChange}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-white font-bold shadow-lg transition-all duration-300 transform
            ${isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:shadow-indigo-500/40 hover:-translate-y-1 active:scale-95'
            }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              <span className="text-base">Đang phân tích dữ liệu...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-6 h-6 animate-pulse-soft" />
              <span className="text-base">Tạo kế hoạch tích hợp ngay</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default InputForm;