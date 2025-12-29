import React, { useState } from 'react';
import { generateDigitalLessonPlan } from './services/gemini';
import InputForm from './components/InputForm';
import PlanResult from './components/PlanResult';
import { LessonInput, LessonPlanResponse } from './types';
import { Layout, GraduationCap, Github, Sparkles } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col bg-slate-50 relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-200/30 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-200/30 blur-[100px]" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-pink-200/20 blur-[80px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-indigo-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.reload()}>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-xl shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
              <Layout className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 tracking-tight">
                DigiPlan AI
              </h1>
              <p className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase hidden sm:block">Trợ lý Giáo viên 4.0</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all text-sm font-medium text-gray-700 group">
               <GraduationCap className="w-4 h-4 text-indigo-500 group-hover:text-indigo-600" />
               Giáo viên
             </button>
             <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-900/20 transition-all text-sm font-medium">
               <Sparkles className="w-3 h-3 text-yellow-300" />
               <span>Pro</span>
             </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full z-10 relative">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Input */}
          <div className={`xl:col-span-4 transition-all duration-700 ease-in-out ${result ? '' : 'xl:col-start-4 xl:col-span-6'}`}>
            <div className="mb-8 text-center xl:text-left space-y-3">
               <h2 className={`font-extrabold text-gray-900 tracking-tight leading-tight ${result ? 'text-2xl' : 'text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900'}`}>
                 {result ? 'Thiết lập' : 'Thiết kế bài giảng tích hợp Năng lực số'}
               </h2>
               {!result && (
                 <p className="text-lg text-gray-600 max-w-2xl mx-auto xl:mx-0 font-light">
                   Nhập thông tin bài dạy, AI sẽ tự động phân tích và đề xuất các hoạt động tích hợp khung năng lực số theo <span className="font-semibold text-indigo-600">Thông tư 02/2025/TT-BGDĐT</span>.
                 </p>
               )}
            </div>
            
            <InputForm onSubmit={handleGenerate} isLoading={loading} />
            
            {error && (
              <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 flex items-start gap-3 shadow-sm animate-pulse">
                <div className="bg-red-100 p-1 rounded-full flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span className="text-sm font-medium">{error}</span>
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
      <footer className="mt-16 border-t border-gray-200/60 bg-white/50 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-gray-900">DigiPlan AI © 2024</p>
            <p className="text-xs text-gray-500 mt-1">Hỗ trợ giáo viên trong kỷ nguyên số.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
              <span className="sr-only">Github</span>
              <Github className="w-5 h-5" />
            </a>
            <div className="h-4 w-px bg-gray-300"></div>
            <p className="text-xs text-gray-500">Powered by Google Gemini 2.5</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;