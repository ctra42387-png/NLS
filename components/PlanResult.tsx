import React from 'react';
import { LessonPlanResponse } from '../types';
import { 
  Laptop, 
  BookOpen, 
  CheckCircle, 
  Target, 
  MonitorPlay,
  Share2,
  Download
} from 'lucide-react';

interface PlanResultProps {
  plan: LessonPlanResponse;
}

const PlanResult: React.FC<PlanResultProps> = ({ plan }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-md border-t-4 border-indigo-600 p-6 md:p-8">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{plan.title}</h2>
            <p className="text-gray-600 leading-relaxed">{plan.overview}</p>
          </div>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium no-print"
          >
            <Download className="w-4 h-4" />
            Lưu / In PDF
          </button>
        </div>
        
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3">
          <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-blue-800">Trọng tâm năng lực số</h4>
            <p className="text-blue-700 text-sm mt-1">{plan.competencySummary}</p>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
           <div className="bg-white rounded-xl shadow-md p-6 h-full">
            <div className="flex items-center gap-2 mb-4">
              <Laptop className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-bold text-gray-800">Công cụ đề xuất</h3>
            </div>
            <div className="space-y-4">
              {plan.suggestedTools.map((tool, idx) => (
                <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-purple-200 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-purple-700">{tool.name}</span>
                    {tool.link && (
                      <a href={tool.link} target="_blank" rel="noreferrer" className="text-xs text-gray-400 hover:text-purple-600">
                        Link
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{tool.description}</p>
                  <p className="text-sm text-gray-700 italic border-l-2 border-purple-300 pl-2">"{tool.usage}"</p>
                </div>
              ))}
            </div>
           </div>
        </div>

        {/* Activities Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg font-bold text-gray-800">Tiến trình hoạt động</h3>
            </div>
            
            <div className="relative border-l-2 border-indigo-100 ml-3 space-y-8">
              {plan.activities.map((act, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-indigo-500"></div>
                  
                  <div className="mb-1">
                    <span className="inline-block px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase rounded tracking-wide mb-1">
                      {act.phase}
                    </span>
                    <h4 className="text-base font-semibold text-gray-900">{act.description}</h4>
                  </div>

                  <div className="mt-3 bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border border-gray-100">
                    <div className="flex items-start gap-3 mb-2">
                      <MonitorPlay className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-gray-700 block mb-1">Tích hợp công nghệ:</span>
                        <p className="text-sm text-gray-600">{act.digitalIntegration}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {act.competencyFocus.map((comp, cIdx) => (
                        <span key={cIdx} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-100">
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
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-teal-600" />
              <h3 className="text-lg font-bold text-gray-800">Đánh giá kết quả</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {plan.assessments.map((assess, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-teal-100 bg-teal-50/50">
                  <h5 className="font-semibold text-teal-800 text-sm mb-1">{assess.method}</h5>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                    <Share2 className="w-3 h-3" />
                    Công cụ: {assess.tool}
                  </div>
                  <p className="text-sm text-gray-700">{assess.criteria}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanResult;
