import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Header from '../components/layout/Header';
import ProjectHeaderInfo from '../components/projects/ProjectHeaderInfo';
import Tabs from '../components/common/Tabs';
import SummaryTab from '../components/analysis/SummaryTab';
import DocumentsTab from '../components/analysis/DocumentsTab';
import AnalysisLog from '../components/analysis/AnalysisLog';
import { ROUTES } from '../routes';

interface AnalysisProgressProps {
  uploadedFiles: File[];
}

const analysisSteps = [
  { id: 1, name: 'pdf uploaded' },
  { id: 2, name: 'pdf uploaded' },
  { id: 3, name: 'pdf uploaded' },
  { id: 4, name: 'pdf uploaded' },
  {
    id: 5,
    name: 'OCR Extraction',
    description: 'Successfully extracted text from documents.',
  },
  {
    id: 6,
    name: 'Local Zoning Verification',
    description: 'Verified against Newcastle City Plan 2024.',
  },
  {
    id: 7,
    name: 'Analysing Environmental Impact',
    description: 'Checking air quality and noise pollution metrics.',
  },
];

const AnalysisProgress: React.FC<AnalysisProgressProps> = ({ uploadedFiles }) => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(35);
  const [activeTab, setActiveTab] = useState<'summary' | 'documents'>('documents');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [navigate]);

  const handleBack = () => {
    navigate(ROUTES.HOME);
  };

  const handleDocumentClick = (index: number) => {
    navigate(ROUTES.ANALYSIS_DOCUMENT.replace(':documentIndex', index.toString()));
  };

  return (
    <div className="min-h-screen font-['Helvetica_Neue',Helvetica,Arial,sans-serif]">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Left side - Main content */}
        <div className="lg:col-span-2">
          <div className="p-6 bg-gray-100">
            <div className="max-w-5xl mx-auto">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-black hover:underline"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            </div>
          </div>

          <ProjectHeaderInfo
            projectName="House NW - 2nd Floor Addition"
            location="NW, 13987"
            projectId="481726891279"
            customerId="142871289749"
          />

          <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="max-w-5xl mx-auto p-6">
            {activeTab === 'summary' ? (
              <SummaryTab />
            ) : (
              <DocumentsTab
                progress={progress}
                uploadedFiles={uploadedFiles}
                onDocumentClick={handleDocumentClick}
              />
            )}
          </div>
        </div>

        {/* Right side - Analysis Log */}
        <div className="lg:col-span-1 border-l border-gray-300">
          <AnalysisLog steps={analysisSteps} />
        </div>
      </div>
    </div>
  );
};

export default AnalysisProgress;
