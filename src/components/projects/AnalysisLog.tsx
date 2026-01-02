import React from 'react';

const AnalysisLog: React.FC = () => {
  return (
    <div className="w-80">
      <div className="bg-white border rounded-lg p-4">
        <h3 className="font-semibold mb-4">Analysis Log</h3>
        <div className="space-y-2 text-sm">
          <div className="text-gray-600">pdf uploaded</div>
          <div className="text-gray-600">pdf uploaded</div>
          <div className="text-gray-600">pdf uploaded</div>
          <div className="text-gray-600">pdf uploaded</div>
          <div className="border-t pt-2 mt-2">
            <div className="font-medium">OCR Extraction</div>
            <div className="text-gray-600">Successfully extracted text from documents.</div>
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="font-medium">Local Zoning Verification</div>
            <div className="text-gray-600">Verified against Newcastle City Plan 2024.</div>
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="font-medium">Analysing Environmental Impact</div>
            <div className="text-gray-600">Checking air quality and noise pollution metrics.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisLog;
