import React from 'react';
import { ChevronLeft } from 'lucide-react';
import Header from '../components/layout/Header';
import { Project } from '../types';

interface ProjectOverviewProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  onBack: () => void;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ projects, onProjectClick, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-['Helvetica_Neue',Helvetica,Arial,sans-serif]">
      <Header />

      <div className="p-6 w-full">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 mb-4 hover:underline"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>

        <h1 className="text-3xl font-bold mb-6">Project Overview</h1>

        <div className="bg-white rounded-lg border w-full">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Project Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Project ID
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Completed
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {projects.map(project => (
                  <tr
                    key={project.id}
                    onClick={() => onProjectClick(project)}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-6 py-4 text-sm font-medium">{project.name}</td>
                    <td className="px-6 py-4 text-sm">{project.id}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{project.completed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
