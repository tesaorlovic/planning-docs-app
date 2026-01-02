import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Header from '../components/layout/Header';
import ProjectHeader from '../components/projects/ProjectHeader';
import SummaryTab from '../components/projects/SummaryTab';
import DocumentsTab from '../components/projects/DocumentsTab';
import AnalysisLog from '../components/projects/AnalysisLog';
import { Project, TabType } from '../types';

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
  onViewDocument: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack, onViewDocument }) => {
  const [activeTab, setActiveTab] = useState<TabType>('summary');

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

        <div className="flex gap-6 w-full">
          <div className="flex-1">
            <ProjectHeader project={project} />

            <div className="flex gap-2 mb-6 border-b">
              <button
                onClick={() => setActiveTab('summary')}
                className={`px-4 py-2 font-medium ${activeTab === 'summary' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
              >
                Summary
              </button>
              <button
                onClick={() => setActiveTab('documents')}
                className={`px-4 py-2 font-medium ${activeTab === 'documents' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
              >
                Documents
              </button>
            </div>

            {activeTab === 'summary' ? (
              <SummaryTab onViewDocument={onViewDocument} />
            ) : (
              <DocumentsTab onViewDocument={onViewDocument} />
            )}
          </div>

          <AnalysisLog />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
