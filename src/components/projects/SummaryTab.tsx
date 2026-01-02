import React from 'react';
import { AlertTriangle, Info, CheckCircle } from 'lucide-react';

interface SummaryTabProps {
  onViewDocument: () => void;
}

const SummaryTab: React.FC<SummaryTabProps> = ({ onViewDocument }) => {
  return (
    <div className="space-y-6">
      <div className="border-2 border-red-600 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Rejected with Objections</h2>
        <p className="text-red-600">
          The proposal conflicts with adopted design guidance and results in unacceptable harm to
          residential amenity.
        </p>
      </div>

      <div className="border rounded-lg">
        <button
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
          onClick={() => {}}
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="font-semibold">Supporting documents & comments</span>
          </div>
        </button>
        <div className="border-t p-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-semibold">Status:</span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-800 rounded text-sm">
              <AlertTriangle className="w-3 h-3" />
              Issues identified
            </span>
            <button className="ml-auto px-3 py-1 text-sm border rounded hover:bg-gray-50">
              Add note
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Key issues:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Neighbour objections regarding loss of daylight and outlook</li>
                <li>
                  <button onClick={onViewDocument} className="text-blue-600 hover:underline">
                    View Comments
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Why:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Four representations cite reduced daylight to habitable rooms</li>
                <li>Concerns relate to the scale and siting of the extension</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Impact on decision:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  Considered as material planning considerations that reinforce identified design
                  harm.
                </li>
              </ul>
            </div>

            <button className="text-blue-600 hover:underline">View All Details</button>
          </div>
        </div>
      </div>

      <div className="border rounded-lg">
        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-600" />
            <span className="font-semibold">National Policy</span>
          </div>
        </button>
      </div>

      <div className="border rounded-lg">
        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="font-semibold">Local / Regional Policy</span>
          </div>
        </button>
      </div>

      <div className="border rounded-lg">
        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="font-semibold">Geospatial cConstraints</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SummaryTab;
