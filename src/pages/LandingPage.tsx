import React, { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import Header from '../components/layout/Header';
import FileUpload from '../components/upload/FileUpload';

interface LandingPageProps {
  uploadedFiles: File[];
  onFilesAdded: (files: File[]) => void;
  onFileRemove: (index: number) => void;
  onStartAnalysis: () => void;
  isAnalyzing: boolean;
  onResetAnalysis?: () => void; // Add optional reset callback
}

const LandingPage: React.FC<LandingPageProps> = ({
  uploadedFiles,
  onFilesAdded,
  onFileRemove,
  onStartAnalysis,
  isAnalyzing,
  onResetAnalysis,
}) => {
  // Reset analysis state when component mounts
  useEffect(() => {
    if (onResetAnalysis) {
      onResetAnalysis();
    }
  }, [onResetAnalysis]);

  return (
    <div className="min-h-screen font-['Helvetica_Neue',Helvetica,Arial,sans-serif]">
      <Header isLandingPage />

      <div className="px-6 py-12 w-full" style={{ backgroundColor: '#1D70B8' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Analyse planning documents</h1>
            <p className="text-lg">
              To start the analysis, please upload all the documents needed for a project.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 w-full">
            <FileUpload
              uploadedFiles={uploadedFiles}
              onFilesAdded={onFilesAdded}
              onFileRemove={onFileRemove}
            />

            {uploadedFiles.length > 0 && (
              <button
                onClick={e => {
                  e.stopPropagation();
                  onStartAnalysis();
                }}
                disabled={isAnalyzing}
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-medium disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Start analysis'
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="px-6 pb-12 w-full">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white py-12 w-full">
            <div className="text-center mb-8 max-w-5xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-2">How this works?</h2>
              <p className="text-gray-600">
                A quick guide to preparing your documents for AI analysis.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-xl">
                  1
                </div>
                <h3 className="font-bold mb-2">Prepare files</h3>
                <p className="text-sm text-gray-600">
                  Gather all relevant PDF, DWG, or IFC planning documents for the specific project.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mx-auto mb-4 text-gray-400 font-bold text-xl">
                  2
                </div>
                <h3 className="font-bold mb-2">Upload Documents</h3>
                <p className="text-sm text-gray-600">
                  Drag and drop your files into the intake zone above. Supports bulk uploading.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mx-auto mb-4 text-gray-400 font-bold text-xl">
                  3
                </div>
                <h3 className="font-bold mb-2">Review & Rate</h3>
                <p className="text-sm text-gray-600">
                  Tag each file correctly to enable the AI compliance engine to cross-reference
                  efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
