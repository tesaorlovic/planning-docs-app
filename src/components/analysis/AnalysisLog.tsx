import React from 'react';

interface AnalysisStep {
  id: number;
  name: string;
  description?: string;
}

interface AnalysisLogProps {
  steps: AnalysisStep[];
}

const AnalysisLog: React.FC<AnalysisLogProps> = ({ steps }) => {
  return (
    <div className="bg-white p-8 pt-12 sticky top-6">
      <h3 className="mb-8">Analysis Log</h3>
      <div className="space-y-2 text-sm">
        {steps.map(step => (
          <div key={step.id} className="pb-6">
            <div className="flex items-start gap-2">
              <div className="flex-1">
                <div>{step.name}</div>
                <div className="text-xs text-gray-500 mt-1">{step.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalysisLog;
