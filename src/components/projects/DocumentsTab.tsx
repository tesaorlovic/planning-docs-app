import React from 'react';

interface DocumentsTabProps {
  onViewDocument: () => void;
}

const DocumentsTab: React.FC<DocumentsTabProps> = ({ onViewDocument }) => {
  return (
    <div className="space-y-6">
      <div className="border rounded-lg p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Analysis in progress</h3>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '37%' }}></div>
            </div>
            <span className="font-semibold">37%</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Uploaded Documents</h3>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={onViewDocument}
            >
              <div className="bg-green-100 h-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-full h-24 bg-green-200 mb-2"></div>
                </div>
              </div>
              <div className="p-2 bg-white">
                <div className="text-sm font-medium">Site Plan</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentsTab;
