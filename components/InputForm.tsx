import React, { useState } from 'react';
import { LessonInput } from '../types';
import { Loader2, Sparkles, Info, ChevronDown, ChevronUp } from 'lucide-react';

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
    objectives: '',
    duration: '45 phút'
  });
  
  const [showCompetencies, setShowCompetencies] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-100 p-2 rounded-lg">
            <Sparkles className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Thông tin bài dạy</h2>
            <p className="text-xs text-gray-500">Tích hợp Khung năng lực số (Thông tư 02/2025/TT-BGDĐT)</p>
          </div>
        </div>

        <div className="mt-3 border-t border-gray-100 pt-3">
           <button 
             type="button"
             onClick={() => setShowCompetencies(!showCompetencies)}
             className="flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors focus:outline-none"
           >
             <Info className="w-3 h-3" />
             {showCompetencies ? "Ẩn tham khảo 6 miền năng lực số" : "Xem tham khảo 6 miền năng lực số"}
             {showCompetencies ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
           </button>
           
           {showCompetencies && (
             <div className="mt-2 p-4 bg-indigo-50 rounded-lg text-xs text-gray-700 border border-indigo-100 space-y-2 transition-all duration-300 ease-in-out">
               <p><strong className="text-indigo-700">1. Khai thác dữ liệu & thông tin:</strong> Biết cách tìm kiếm, đánh giá độ tin cậy và quản lý dữ liệu trên môi trường số.</p>
               <p><strong className="text-indigo-700">2. Giao tiếp & hợp tác:</strong> Tương tác qua mạng xã hội/email, chia sẻ tài liệu, làm việc nhóm trực tuyến, ứng xử văn minh.</p>
               <p><strong className="text-indigo-700">3. Sáng tạo nội dung số:</strong> Soạn thảo văn bản, thiết kế slide, chỉnh sửa video, hiểu về bản quyền và giấy phép.</p>
               <p><strong className="text-indigo-700">4. An toàn số:</strong> Bảo vệ thiết bị, dữ liệu cá nhân, nhận biết rủi ro mạng, bảo vệ sức khỏe thể chất/tinh thần.</p>
               <p><strong className="text-indigo-700">5. Giải quyết vấn đề:</strong> Xử lý lỗi kỹ thuật, xác định nhu cầu và lựa chọn công nghệ phù hợp để giải quyết vấn đề.</p>
               <p><strong className="text-indigo-700">6. Ứng dụng AI:</strong> Hiểu biết cơ bản về AI, sử dụng GenAI (Gemini, ChatGPT...) hỗ trợ học tập có trách nhiệm và đạo đức.</p>
             </div>
           )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Môn học</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-gray-50"
            >
              {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Khối lớp</label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-gray-50"
            >
              {GRADES.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tên bài dạy / Chủ đề</label>
          <input
            type="text"
            name="topic"
            required
            placeholder="VD: Cấu tạo nguyên tử, Truyện Kiều, Số nguyên tố..."
            value={formData.topic}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          />
        </div>

        <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">Thời lượng</label>
           <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="VD: 45 phút, 2 tiết"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
           />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mục tiêu bài học (Yêu cầu cần đạt)</label>
          <textarea
            name="objectives"
            required
            rows={4}
            placeholder="Nhập mục tiêu kiến thức, kỹ năng. Bạn có thể ghi chú thêm: 'Muốn học sinh dùng AI để vẽ tranh' hoặc 'Tập trung vào an toàn mạng'..."
            value={formData.objectives}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
          />
          <p className="text-xs text-gray-500 mt-1">Hệ thống sẽ tự động đối chiếu với 6 miền năng lực số (bao gồm cả AI) để gợi ý hoạt động.</p>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white font-semibold shadow-md transition-all
            ${isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-0.5'
            }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Đang phân tích & thiết kế...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Tạo kế hoạch tích hợp
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default InputForm;
