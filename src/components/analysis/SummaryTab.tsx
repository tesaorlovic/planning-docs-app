import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, Info, CheckCircle } from 'lucide-react';

const SummaryTab: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    supporting: true, // Default open like in the screenshot
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
    <div className="space-y-0">
      {/* Rejected Status Box */}
      <div className="border-2 border-red-600 bg-white p-6 mb-6">
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
          className="w-full flex items-start gap-3 py-4 text-left"
        >
          <AlertTriangle className="w-5 h-5 text-red-600 mt-1 shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">Supporting documents & comments</h3>
          </div>
          {expandedSections.supporting ? (
            <ChevronUp className="w-5 h-5 text-blue-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-blue-600" />
          )}
        </button>
        {expandedSections.supporting && (
          <div className="pb-6 pl-11">
            <div className="mb-4">
              <span className="font-semibold">Status: </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-800 rounded text-sm font-semibold">
                <AlertTriangle className="w-3 h-3" />
                Issues identified
              </span>
              <button className="ml-4 px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                Add note
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Key issues:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Neighbour objections regarding loss of daylight and outlook</li>
                  <li>
                    <button className="text-blue-600 underline hover:text-blue-800">
                      View Comments
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Why:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Four representations cite reduced daylight to habitable rooms</li>
                  <li>Concerns relate to the scale and siting of the extension</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Impact on decision:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    Considered as material planning considerations that reinforce identified design
                    harm.
                  </li>
                </ul>
              </div>

              <button className="text-blue-600 underline hover:text-blue-800">
                View All Details
              </button>
            </div>
          </div>
        )}
      </div>

      {/* National Policy */}
      <div className="border-t border-gray-300">
        <button
          onClick={() => toggleSection('national')}
          className="w-full flex items-start gap-3 py-4 text-left"
        >
          <Info className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">National Policy</h3>
          </div>
          {expandedSections.national ? (
            <ChevronUp className="w-5 h-5 text-blue-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-blue-600" />
          )}
        </button>
        {expandedSections.national && (
          <div className="pb-6 pl-11 text-sm text-gray-600">
            <p>Content for national policy...</p>
          </div>
        )}
      </div>

      {/* Local / Regional Policy */}
      <div className="border-t border-gray-300">
        <button
          onClick={() => toggleSection('local')}
          className="w-full flex items-start gap-3 py-4 text-left"
        >
          <AlertTriangle className="w-5 h-5 text-red-600 mt-1 shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">Local / Regional Policy</h3>
          </div>
          {expandedSections.local ? (
            <ChevronUp className="w-5 h-5 text-blue-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-blue-600" />
          )}
        </button>
        {expandedSections.local && (
          <div className="pb-6 pl-11 text-sm text-gray-600">
            <p>Content for local policy...</p>
          </div>
        )}
      </div>

      {/* Geospatial Constraints */}
      <div className="border-t border-gray-300">
        <button
          onClick={() => toggleSection('geospatial')}
          className="w-full flex items-start gap-3 py-4 text-left"
        >
          <CheckCircle className="w-5 h-5 text-green-600 mt-1 shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">Geospatial Constraints</h3>
          </div>
          {expandedSections.geospatial ? (
            <ChevronUp className="w-5 h-5 text-blue-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-blue-600" />
          )}
        </button>
        {expandedSections.geospatial && (
          <div className="pb-6 pl-11 text-sm text-gray-600">
            <p>Content for geospatial constraints...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryTab;
