import React, { useState } from 'react';
import { ChevronDown, AlertTriangle, Info, CheckCircle } from 'lucide-react';

const SummaryTab: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    supporting: false,
    national: false,
    local: false,
    geospatial: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Rejected Status Box */}
      <div className="border-2 border-red-600 bg-white p-6">
        <h2 className="text-xl font-bold mb-2">Rejected with Objections</h2>
        <p className="text-red-600 underline">
          The proposal conflicts with adopted design guidance and results in unacceptable harm to
          residential amenity.
        </p>
      </div>

      {/* Supporting documents & comments */}
      <div className="border-t border-gray-300">
        <button
          onClick={() => toggleSection('supporting')}
          className="w-full flex items-start gap-3 py-4 text-left hover:bg-gray-50"
        >
          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">Supporting documents & comments</h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-blue-600 transition-transform ${
              expandedSections.supporting ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSections.supporting && (
          <div className="pb-4 px-12 text-sm text-gray-600">
            <p>Content for supporting documents...</p>
          </div>
        )}
      </div>

      {/* National Policy */}
      <div className="border-t border-gray-300">
        <button
          onClick={() => toggleSection('national')}
          className="w-full flex items-start gap-3 py-4 text-left hover:bg-gray-50"
        >
          <Info className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">National Policy</h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-blue-600 transition-transform ${
              expandedSections.national ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSections.national && (
          <div className="pb-4 px-12 text-sm text-gray-600">
            <p>Content for national policy...</p>
          </div>
        )}
      </div>

      {/* Local / Regional Policy */}
      <div className="border-t border-gray-300">
        <button
          onClick={() => toggleSection('local')}
          className="w-full flex items-start gap-3 py-4 text-left hover:bg-gray-50"
        >
          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">Local / Regional Policy</h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-blue-600 transition-transform ${
              expandedSections.local ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSections.local && (
          <div className="pb-4 px-12 text-sm text-gray-600">
            <p>Content for local policy...</p>
          </div>
        )}
      </div>

      {/* Geospatial cConstraints */}
      <div className="border-t border-gray-300">
        <button
          onClick={() => toggleSection('geospatial')}
          className="w-full flex items-start gap-3 py-4 text-left hover:bg-gray-50"
        >
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">Geospatial cConstraints</h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-blue-600 transition-transform ${
              expandedSections.geospatial ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSections.geospatial && (
          <div className="pb-4 px-12 text-sm text-gray-600">
            <p>Content for geospatial constraints...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryTab;
