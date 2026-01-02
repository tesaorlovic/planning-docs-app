import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Issue, ResultsTabType } from '../../types';

interface AnnotationSidebarProps {
  issues: Issue[];
  activeTab: ResultsTabType;
  onTabChange: (tab: ResultsTabType) => void;
}

const AnnotationSidebar: React.FC<AnnotationSidebarProps> = ({
  issues,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="w-96">
      <div className="bg-white border rounded-lg">
        <div className="flex border-b">
          <button
            onClick={() => onTabChange('results')}
            className={`flex-1 px-4 py-3 font-medium ${activeTab === 'results' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          >
            Results
          </button>
          <button
            onClick={() => onTabChange('sources')}
            className={`flex-1 px-4 py-3 font-medium ${activeTab === 'sources' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          >
            Sources
          </button>
        </div>

        <div className="p-4 space-y-4">
          {issues.map((issue, idx) => (
            <div key={idx} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span className="font-semibold text-sm">Status: Issues Identified</span>
                </div>
                <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">
                  Compare
                </button>
              </div>

              <h3 className="font-semibold mb-2">{issue.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{issue.description}</p>

              <div className="text-sm">
                <span className="text-gray-600">Regulation reference</span>
                <div className="text-blue-600 underline cursor-pointer">{issue.regulation}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnotationSidebar;
