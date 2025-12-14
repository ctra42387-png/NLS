import React, { useState } from 'react';
import { generateDigitalLessonPlan } from './services/gemini';
import InputForm from './components/InputForm';
import PlanResult from './components/PlanResult';
import { LessonInput, LessonPlanResponse } from './types';
import { Layout, GraduationCap, Github } from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<LessonPlanResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (input: LessonInput) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const plan = await generateDigitalLessonPlan(input);
      setResult(plan);
    } catch (err: any) {
      setError(err.message || "Đã có lỗi xảy ra khi tạo kế hoạch. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <Layout className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                DigiPlan AI
              </h1>
              <p className="text-xs text-gray-500 font-medium hidden sm:block">Tích hợp Năng lực số vào Bài giảng</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Hướng dẫn</a>
             <button className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-xs font-semibold text-gray-700">
               <GraduationCap className="w-4 h-4" />
               Dành cho Giáo viên
             </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          {/* Left Column: Input */}
          <div className={`xl:col-span-4 transition-all duration-500 ${result ? '' : 'xl:col-start-4 xl:col-span-6'}`}>
            <div className="mb-6 text-center xl:text-left">
               <h2 className={`text-3xl font-bold text-gray-900 mb-3 ${result ? 'text-xl' : ''}`}>
                 {result ? 'Thiết lập bài dạy' : 'Bắt đầu thiết kế bài giảng số'}
               </h2>
               {!result && (
                 <p className="text-gray-600">
                   Nhập thông tin bài học của bạn, AI sẽ gợi ý các công cụ và hoạt động số phù hợp nhất để nâng cao năng lực cho học sinh.
                 </p>
               )}
            </div>
            <InputForm onSubmit={handleGenerate} isLoading={loading} />
            
            {error && (
              <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-100 flex items-center gap-2 animate-pulse">
                <span>⚠️ {error}</span>
              </div>
            )}
          </div>

          {/* Right Column: Result */}
          {result && (
            <div className="xl:col-span-8 animate-fade-in-right">
              <PlanResult plan={result} />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2024 DigiPlan AI. Powered by Google Gemini.</p>
          <div className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
            <Github className="w-5 h-5 text-gray-700" />
            <span className="text-sm font-medium text-gray-600">Open Source Education</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
