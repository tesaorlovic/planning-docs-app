import React from 'react';

interface ProjectHeaderInfoProps {
  projectName: string;
  location: string;
  projectId: string;
  customerId: string;
}

const ProjectHeaderInfo: React.FC<ProjectHeaderInfoProps> = ({
  projectName,
  location,
  projectId,
  customerId,
}) => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="pt-2">
          <h1 className="text-3xl font-bold py-4">{projectName}</h1>

          <div className="py-4 flex gap-8 relative">
            <div className="border-l border-gray-300 pl-5">
              <div className="text-sm text-gray-600">Location</div>
              <div className="font-semibold">{location}</div>
            </div>
            <div className="border-l border-gray-300 pl-5">
              <div className="text-sm text-gray-600">Project ID</div>
              <div className="font-semibold">{projectId}</div>
            </div>
            <div className="border-l border-gray-300 pl-5">
              <div className="text-sm text-gray-600">Customer ID</div>
              <div className="font-semibold">{customerId}</div>
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
  );
};

export default ProjectHeaderInfo;
