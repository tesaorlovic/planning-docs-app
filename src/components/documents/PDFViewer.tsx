import React from 'react';
import { Document, Page } from 'react-pdf';
import { ChevronLeft, ChevronRight, FileText, Loader2 } from 'lucide-react';

interface PDFViewerProps {
  pdfFile: File | null;
  currentPage: number;
  numPages: number | null;
  isLoading: boolean;
  onLoadSuccess: ({ numPages }: { numPages: number }) => void;
  onLoadError: () => void;
  onPageChange: (page: number) => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({
  pdfFile,
  currentPage,
  numPages,
  isLoading,
  onLoadSuccess,
  onLoadError,
  onPageChange,
}) => {
  return (
    <div className="flex-1">
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{pdfFile ? pdfFile.name : 'Site Map.pdf'}</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
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
              onClick={() => onPageChange(Math.min(numPages || currentPage, currentPage + 1))}
              disabled={currentPage >= (numPages || currentPage)}
              className="text-blue-600 hover:text-blue-800 disabled:text-gray-300 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="border rounded overflow-auto bg-gray-100 relative flex justify-center p-8">
          {isLoading && (
            <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
          )}
          {pdfFile ? (
            <Document
              file={pdfFile}
              onLoadSuccess={onLoadSuccess}
              onLoadError={onLoadError}
              loading={
                <div className="flex items-center justify-center h-96">
                  <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
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
                width={800}
              />
            </Document>
          ) : (
            <div className="bg-gray-200 h-[600px] rounded flex items-center justify-center">
              <div className="text-center">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                <span className="text-gray-500">No PDF loaded</span>
                <p className="text-sm text-gray-400 mt-2">Upload a PDF file to view it here</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
