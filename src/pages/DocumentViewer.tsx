import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Document, Page } from 'react-pdf';
import toast from 'react-hot-toast';
import Header from '../components/layout/Header';
import { Issue, ResultsTabType } from '../types';

interface DocumentViewerProps {
  pdfFile: File | null;
  issues: Issue[];
  onBack: () => void;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ pdfFile, issues, onBack }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [isLoadingPdf, setIsLoadingPdf] = useState(false);
  const [resultsTab, setResultsTab] = useState<ResultsTabType>('results');
  const [activeTab, setActiveTab] = useState<'summary' | 'documents'>('documents');

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setCurrentPage(1);
    setIsLoadingPdf(false);
    toast.success('Document loaded successfully', { id: 'pdf-load' });
  };

  const onDocumentLoadError = () => {
    setIsLoadingPdf(false);
    toast.error('Failed to load document', { id: 'pdf-load' });
  };

  return (
    <div className="min-h-screen font-['Helvetica_Neue',Helvetica,Arial,sans-serif]">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-gray-100">
        {/* Left side - Main content */}
        <div className="lg:col-span-2">
          <div className="p-6 bg-gray-100">
            <div className="max-w-3xl mx-auto">
              {/* Back Button */}
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-black hover:underline"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            </div>
          </div>

          {/* Tabs */}
          {/* <div className="p-6 pb-0 bg-gray-100 mb-6">
            <div className="max-w-3xl mx-auto">
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
          </div> */}

          {/* PDF Viewer */}
          <div className="max-w-3xl mx-auto p-6">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">{pdfFile ? pdfFile.name : 'Site Map.pdf'}</h2>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage <= 1}
                    className="text-blue-600 hover:text-blue-800 disabled:text-gray-300 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">
                      Page {currentPage} of {numPages || '?'}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      setCurrentPage(Math.min(numPages || currentPage, currentPage + 1))
                    }
                    disabled={currentPage >= (numPages || currentPage)}
                    className="text-blue-600 hover:text-blue-800 disabled:text-gray-300 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="overflow-auto bg-gray-300 relative flex justify-center p-8">
                {pdfFile ? (
                  <Document
                    file={pdfFile}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={
                      <div className="flex items-center justify-center h-96">
                        <div className="text-gray-500">Loading PDF...</div>
                      </div>
                    }
                    error={
                      <div className="flex items-center justify-center h-96">
                        <div className="text-red-500">Failed to load PDF</div>
                      </div>
                    }
                  >
                    <Page
                      pageNumber={currentPage}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      width={undefined}
                      className="max-w-full"
                    />
                  </Document>
                ) : (
                  <div className="bg-gray-200 h-150 rounded flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-gray-500">No PDF loaded</span>
                      <p className="text-sm text-gray-400 mt-2">
                        Upload a PDF file to view it here
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Results/Sources */}
        <div className="lg:col-span-1 border-l border-gray-300">
          <div className="bg-white p-8 pt-12 sticky top-6">
            {/* Tabs */}
            <div className="flex border-b mb-6">
              <button
                onClick={() => setResultsTab('results')}
                className={`flex-1 px-4 py-3 font-medium ${
                  resultsTab === 'results'
                    ? 'border-t border-l border-r border-gray-300 bg-white'
                    : 'text-gray-600'
                }`}
              >
                Results
              </button>
              <button
                onClick={() => setResultsTab('sources')}
                className={`flex-1 px-4 py-3 font-medium ${
                  resultsTab === 'sources'
                    ? 'border-t border-l border-r border-gray-300 bg-white'
                    : 'text-gray-600'
                }`}
              >
                Sources
              </button>
            </div>

            {/* Issues */}
            <div className="space-y-4">
              {issues.map((issue, idx) => (
                <div key={idx} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-800 rounded text-sm font-semibold">
                        Issues Identified
                      </span>
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
      </div>
    </div>
  );
};

export default DocumentViewer;
