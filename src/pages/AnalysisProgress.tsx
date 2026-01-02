import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Header from '../components/layout/Header';
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
    // Simulate progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Navigate to overview when complete
          setTimeout(() => {
            // navigate(ROUTES.OVERVIEW);
          }, 1000);
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
        <div className="lg:col-span-2">
          <div className="p-6 bg-gray-100">
            <div className="max-w-3xl mx-auto">
              {/* Back Button */}
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-black hover:underline"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>

              {/* Project Header */}
              <div className="pt-2">
                <h1 className="text-3xl font-bold py-4">House NW - 2nd Floor Addition</h1>

                <div className="py-4 flex gap-8 relative">
                  <div className="border-l-1 border-gray-300 pl-5">
                    <div className="text-sm text-gray-600">Location</div>
                    <div className="font-semibold">NW, 13987</div>
                  </div>
                  <div className="border-l-1 border-gray-300 pl-5">
                    <div className="text-sm text-gray-600">Project ID</div>
                    <div className="font-semibold">481726891279</div>
                  </div>
                  <div className="border-l-1 border-gray-300 pl-5">
                    <div className="text-sm text-gray-600">Customer ID</div>
                    <div className="font-semibold">142871289749</div>
                  </div>
                  <div className="ml-auto">
                    <div className="text-sm text-gray-600 mb-1">Rate AI</div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <button key={i} className="text-custom-blue hover:text-blue-800">
                          ★
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="p-6 pb-0 bg-gray-100 mb-6">
            <div className="max-w-3xl mx-auto ">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('summary')}
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'summary'
                      ? 'border-t-1 border-l-1 border-r-1 border-gray-300 bg-white'
                      : 'text-gray-600'
                  }`}
                >
                  Summary
                </button>
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'documents'
                      ? 'border-t-1 border-l-1 border-r-1 border-gray-300 bg-white'
                      : 'text-gray-600'
                  }`}
                >
                  Documents
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto p-6">
            {/* Content Grid - Progress & Documents */}
            <div>
              {/* Progress Box */}
              <div className="border-2 border-custom-blue p-6 bg-white mb-12">
                <h2 className="text-xl font-semibold mb-4">Analysis in progress</h2>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-custom-blue h-2 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <span className="font-semibold text-lg">{progress}%</span>
                </div>
              </div>

              {/* Uploaded Documents */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Uploaded Documents</h3>
                <div className="grid grid-cols-3 gap-4">
                  {uploadedFiles.map((file, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleDocumentClick(idx)}
                      className="border rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <div className="bg-green-100 h-32 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-green-200 opacity-50"></div>
                        <svg
                          className="w-16 h-16 text-green-600 relative z-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div className="p-2 bg-white">
                        <div className="text-sm font-medium truncate" title={file.name}>
                          {file.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {(file.size / 1024).toFixed(0)} KB
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Analysis Log */}
        <div className="lg:col-span-1 border-l-1 border-gray-300">
          <div className="bg-white p-8 pt-12 sticky top-6">
            <h3 className="mb-8">Analysis Log</h3>
            <div className="space-y-2 text-sm">
              {analysisSteps.map(step => (
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
        </div>
      </div>
    </div>
  );
};

export default AnalysisProgress;
