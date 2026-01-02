import React from 'react';

interface DocumentsTabProps {
  progress: number;
  uploadedFiles: File[];
  onDocumentClick: (index: number) => void;
}

const DocumentsTab: React.FC<DocumentsTabProps> = ({
  progress,
  uploadedFiles,
  onDocumentClick,
}) => {
  return (
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
              onClick={() => onDocumentClick(idx)}
              className="border border-gray-300 overflow-hidden bg-white hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="bg-gray-100 h-32 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gray-200 opacity-50"></div>
                <svg
                  className="w-16 h-16 text-gray-500 relative z-10"
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
                <div className="text-xs text-gray-500">{(file.size / 1024).toFixed(0)} KB</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentsTab;
