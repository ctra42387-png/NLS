import React from 'react';
import { LessonPlanResponse } from '../types';
import { 
  Laptop, 
  BookOpen, 
  CheckCircle, 
  Target, 
  MonitorPlay,
  Share2,
  FileText,
  Printer,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface PlanResultProps {
  plan: LessonPlanResponse;
}

const PlanResult: React.FC<PlanResultProps> = ({ plan }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleExportWord = () => {
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Giáo án</title></head><body>";
    const footer = "</body></html>";
    const contentHTML = document.getElementById('lesson-plan-content')?.innerHTML;
    
    if (contentHTML) {
      const sourceHTML = header + contentHTML + footer;
      const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
      const fileDownload = document.createElement("a");
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = `Giao_an_${plan.title.replace(/\s+/g, '_')}.doc`;
      fileDownload.click();
      document.body.removeChild(fileDownload);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in-up pb-10">
      {/* Action Buttons */}
      <div className="flex justify-between items-center no-print">
        <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-500">Đã tạo xong kế hoạch</span>
        </div>
        <div className="flex gap-3">
            <button 
            onClick={handleExportWord}
            className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all text-sm font-semibold border border-indigo-100 shadow-sm hover:shadow-md"
            >
            <FileText className="w-4 h-4" />
            Word
            </button>
            <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all text-sm font-semibold shadow-md shadow-indigo-500/30 hover:shadow-lg"
            >
            <Printer className="w-4 h-4" />
            In / PDF
            </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div id="lesson-plan-content" className="space-y-8">
        {/* Header Hero Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-xl text-white p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/30 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/20 text-xs font-medium mb-4 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 text-yellow-300" />
                <span>Kế hoạch bài dạy số hóa</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">{plan.title}</h2>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-3xl">{plan.overview}</p>
            
            <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-white/20 p-2 rounded-lg shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm opacity-90">Trọng tâm năng lực số</h4>
                <p className="text-indigo-50 text-sm leading-relaxed">{plan.competencySummary}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tools Column (Left) */}
          <div className="lg:col-span-4 space-y-6">
             <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-50 rounded-xl">
                        <Laptop className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Công cụ số</h3>
                </div>
              
                <div className="space-y-4">
                    {plan.suggestedTools.map((tool, idx) => (
                    <div key={idx} className="group p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-md hover:bg-white transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-blue-700 text-lg group-hover:text-blue-600">{tool.name}</span>
                        {tool.link && (
                            <a href={tool.link} target="_blank" rel="noreferrer" className="p-1.5 bg-white rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors no-print">
                            <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                        </div>
                        <p className="text-xs text-gray-500 mb-3">{tool.description}</p>
                        <div className="flex items-start gap-2 bg-blue-50/50 p-2 rounded-lg">
                            <ArrowRight className="w-3 h-3 text-blue-400 mt-1 shrink-0" />
                            <p className="text-sm text-gray-700 italic">"{tool.usage}"</p>
                        </div>
                    </div>
                    ))}
                </div>
             </div>
          </div>

          {/* Activities Column (Right/Center) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Activities Section */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-indigo-50 rounded-xl">
                        <BookOpen className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Tiến trình hoạt động</h3>
                </div>
              
                <div className="space-y-8 pl-2">
                    {plan.activities.map((act, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-10 border-l-2 border-indigo-100 last:border-0 pb-2">
                        {/* Timeline dot */}
                        <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-white border-4 border-indigo-500 shadow-sm z-10"></div>
                        
                        <div className="mb-3">
                            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase rounded-lg tracking-wide mb-2">
                                {act.phase}
                            </span>
                            <h4 className="text-lg font-bold text-gray-900 leading-snug">{act.description}</h4>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-indigo-50/30 p-5 rounded-2xl border border-gray-100 hover:border-indigo-200 transition-colors">
                            <div className="flex items-start gap-3 mb-4">
                                <div className="p-1.5 bg-orange-100 rounded-lg shrink-0 mt-0.5">
                                    <MonitorPlay className="w-4 h-4 text-orange-600" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Hoạt động số hóa</span>
                                    <p className="text-gray-700 leading-relaxed font-medium">{act.digitalIntegration}</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200/50">
                                {act.competencyFocus.map((comp, cIdx) => (
                                <span key={cIdx} className="px-3 py-1 bg-white text-emerald-700 text-xs font-medium rounded-full border border-emerald-100 shadow-sm flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    {comp}
                                </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            {/* Assessment Section */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-emerald-400"></div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-teal-50 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Đánh giá kết quả</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {plan.assessments.map((assess, idx) => (
                    <div key={idx} className="p-5 rounded-2xl border border-teal-100 bg-teal-50/30 hover:bg-teal-50 hover:shadow-md transition-all">
                        <h5 className="font-bold text-teal-900 text-base mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-teal-200 text-teal-800 flex items-center justify-center text-xs font-extrabold">{idx + 1}</span>
                            {assess.method}
                        </h5>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-600 uppercase tracking-wide mb-3 pl-8">
                            <Share2 className="w-3 h-3" />
                            Công cụ: {assess.tool}
                        </div>
                        <p className="text-sm text-gray-700 pl-8 leading-relaxed">{assess.criteria}</p>
                    </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanResult;