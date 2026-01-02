import React from 'react';
import { Project } from '../../types';

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>

      <div className="bg-gray-50 border rounded p-4 mb-6 flex gap-8">
        <div>
          <div className="text-sm text-gray-600">Location</div>
          <div className="font-semibold">{project.location}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Project ID</div>
          <div className="font-semibold">{project.id}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Customer ID</div>
          <div className="font-semibold">{project.customerId}</div>
        </div>
        <div className="ml-auto">
          <div className="text-sm text-gray-600 mb-1">Rate AI</div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <button key={i} className="text-blue-600 hover:text-blue-800">
                ★
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
