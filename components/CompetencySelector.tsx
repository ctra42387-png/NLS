import React, { useState, useMemo, useEffect } from 'react';
import { COMPETENCY_FRAMEWORK, CompetencyComponent, CompetencyDomain } from '../data/competencies';
import { X, ChevronDown, ChevronRight, Check, ShieldCheck, Search } from 'lucide-react';

interface CompetencySelectorProps {
  selectedCompetencies: string[];
  onChange: (competencies: string[]) => void;
}

const CompetencySelector: React.FC<CompetencySelectorProps> = ({ selectedCompetencies, onChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [expandedDomains, setExpandedDomains] = useState<number[]>([]);
  const [expandedComponents, setExpandedComponents] = useState<string[]>([]);

  const toggleDomain = (id: number) => {
    setExpandedDomains(prev => 
      prev.includes(id) ? prev.filter(dId => dId !== id) : [...prev, id]
    );
  };

  const toggleComponent = (code: string) => {
    setExpandedComponents(prev => 
      prev.includes(code) ? prev.filter(cCode => cCode !== code) : [...prev, code]
    );
  };

  const addCompetency = (compStr: string) => {
    if (!selectedCompetencies.includes(compStr)) {
      onChange([...selectedCompetencies, compStr]);
    }
  };

  const removeCompetency = (index: number) => {
    const newDeps = [...selectedCompetencies];
    newDeps.splice(index, 1);
    onChange(newDeps);
  };

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
        return { framework: COMPETENCY_FRAMEWORK, autoExpandDomains: [], autoExpandComponents: [] };
    }

    const lowerCaseSearch = searchTerm.toLowerCase();
    const newExpandedDomains = new Set<number>();
    const newExpandedComponents = new Set<string>();

    const filteredFramework = COMPETENCY_FRAMEWORK.map(domain => {
        const matchingComponents = domain.components.map(component => {
            const matchingIndicators = component.indicators?.filter(indicator =>
                indicator.code.toLowerCase().includes(lowerCaseSearch) ||
                indicator.description.toLowerCase().includes(lowerCaseSearch)
            ) || [];

            if (
                matchingIndicators.length > 0 ||
                component.code.toLowerCase().includes(lowerCaseSearch) ||
                component.name.toLowerCase().includes(lowerCaseSearch)
            ) {
                newExpandedDomains.add(domain.id);
                if (matchingIndicators.length > 0) {
                    newExpandedComponents.add(component.code);
                }
                return {
                    ...component,
                    indicators: matchingIndicators.length > 0 ? matchingIndicators : component.indicators,
                };
            }
            return null;
        }).filter((c): c is CompetencyComponent => c !== null);

        if (matchingComponents.length > 0 || domain.name.toLowerCase().includes(lowerCaseSearch)) {
            return { ...domain, components: matchingComponents };
        }

        return null;
    }).filter((d): d is CompetencyDomain => d !== null);

    return {
        framework: filteredFramework,
        autoExpandDomains: Array.from(newExpandedDomains),
        autoExpandComponents: Array.from(newExpandedComponents),
    };
}, [searchTerm]);

useEffect(() => {
    if (searchTerm.trim()) {
        setIsExpanded(true); // Tự động mở bảng tra cứu khi tìm kiếm
        setExpandedDomains(searchResults.autoExpandDomains);
        setExpandedComponents(searchResults.autoExpandComponents);
    }
}, [searchTerm, searchResults]);


  return (
    <div className="border border-indigo-100 rounded-xl bg-indigo-50/30 p-5 transition-all duration-300 hover:bg-indigo-50/50 hover:border-indigo-200">
      <div className="flex justify-between items-center mb-4">
        <label className="text-sm font-semibold text-indigo-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-indigo-600" />
          Năng lực số mục tiêu
        </label>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 hover:underline flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-indigo-100 shadow-sm"
        >
          {isExpanded ? 'Đóng tra cứu' : 'Tra cứu & Chọn'}
          {isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
        </button>
      </div>

      {/* Selected Tags */}
      <div className="flex flex-wrap gap-2 mb-4 min-h-[40px]">
        {selectedCompetencies.length === 0 && (
          <div className="w-full text-center py-4 border-2 border-dashed border-indigo-200 rounded-lg bg-white/50">
            <span className="text-sm text-gray-400 italic">Chưa chọn năng lực nào. Mở bảng tra cứu để chọn...</span>
          </div>
        )}
        {selectedCompetencies.map((comp, idx) => (
          <div key={idx} className="group animate-fade-in-up bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-2 shadow-md shadow-indigo-500/20 pr-1">
            <span>{comp}</span>
            <button
              type="button"
              onClick={() => removeCompetency(idx)}
              className="p-0.5 rounded-full hover:bg-white/20 transition-colors focus:outline-none"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
      
      {/* Lookup Framework */}
      {isExpanded && (
        <div className="mt-4 border-t border-indigo-200 pt-4 animate-fade-in-up">
          {/* Search Input */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tra cứu mã hoặc nội dung năng lực (VD: 1.1.TC1a, tìm kiếm...)"
              className="w-full text-sm border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto pr-1 custom-scrollbar">
            {searchResults.framework.length === 0 && searchTerm.trim() && (
                <div className="text-center py-6 text-sm text-gray-500">
                    Không tìm thấy kết quả phù hợp.
                </div>
            )}
            {searchResults.framework.map((domain) => (
              <div key={domain.id} className="border border-indigo-100 rounded-xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md">
                {/* Domain Level */}
                <button
                  type="button"
                  onClick={() => toggleDomain(domain.id)}
                  className="w-full text-left px-4 py-3 text-sm font-bold text-gray-800 flex justify-between items-center hover:bg-indigo-50/50 bg-gray-50/30 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 flex items-center justify-center bg-indigo-100 text-indigo-700 rounded text-xs">{domain.id}</span>
                    {domain.name.replace(/^[IVX]+\.\s/, '')}
                  </span>
                  {expandedDomains.includes(domain.id) ? <ChevronDown className="w-4 h-4 text-indigo-500" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                </button>
                
                {expandedDomains.includes(domain.id) && (
                  <div className="border-t border-indigo-50 bg-white">
                    {domain.components.map((comp) => (
                      <div key={comp.code}>
                        {/* Component Level */}
                        <div className="flex items-center justify-between px-4 py-2 hover:bg-indigo-50/50 border-b border-gray-50 last:border-0 group">
                          <button
                            type="button"
                            onClick={() => toggleComponent(comp.code)}
                            className="flex-1 text-left text-xs sm:text-sm text-gray-700 flex items-center gap-3 font-medium py-1"
                          >
                            <span className="w-4 h-4 flex items-center justify-center transition-transform duration-200">
                                {comp.indicators && comp.indicators.length > 0 ? (
                                    expandedComponents.includes(comp.code) ? <ChevronDown className="w-3 h-3 text-indigo-500" /> : <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-indigo-500" />
                                ) : <div className="w-1.5 h-1.5 rounded-full bg-indigo-200"></div>}
                            </span>
                            <span className="group-hover:text-indigo-700 transition-colors">
                              <span className="font-bold text-indigo-600 mr-1">{comp.code}</span> 
                              {comp.name}
                            </span>
                          </button>
                          
                          <button 
                            type="button"
                            onClick={() => addCompetency(`${comp.code} - ${comp.name}`)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-indigo-50 border border-indigo-100 text-indigo-600 px-2 py-1 rounded hover:bg-indigo-600 hover:text-white"
                          >
                            Chọn chung
                          </button>
                        </div>

                        {/* Indicator Level */}
                        {expandedComponents.includes(comp.code) && comp.indicators && (
                          <div className="bg-slate-50/80 px-4 py-2 space-y-1 shadow-inner">
                            {comp.indicators.map((ind) => {
                              const valueStr = `${ind.code} - ${ind.description}`;
                              const isSelected = selectedCompetencies.includes(valueStr);
                              return (
                                <button
                                  key={ind.code}
                                  type="button"
                                  onClick={() => addCompetency(valueStr)}
                                  className={`block w-full text-left text-xs py-2 px-3 rounded-lg transition-all flex items-start gap-3 border ${
                                    isSelected 
                                      ? 'bg-indigo-100 border-indigo-200 text-indigo-900 font-semibold shadow-sm' 
                                      : 'border-transparent text-gray-600 hover:bg-white hover:border-gray-200 hover:text-indigo-700 hover:shadow-sm'
                                  }`}
                                >
                                  {isSelected ? 
                                    <div className="mt-0.5 bg-indigo-600 rounded-full p-0.5"><Check className="w-2.5 h-2.5 text-white" /></div> : 
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                  }
                                  <div>
                                    <span className="font-bold mr-1.5 text-indigo-600">{ind.code}</span>
                                    {ind.description}
                                    {ind.level && <span className="ml-2 text-[9px] text-gray-400 uppercase tracking-wider bg-white border border-gray-200 px-1.5 py-0.5 rounded-md shadow-sm">{ind.level}</span>}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompetencySelector;
