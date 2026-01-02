import React, { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import AnalysisProgress from './pages/AnalysisProgress';
import ProjectOverview from './pages/ProjectOverview';
import ProjectDetails from './pages/ProjectDetails';
import DocumentViewer from './pages/DocumentViewer';
import { useDragPrevention } from './hooks/useDragPrevention';
import { mockProjects, mockIssues } from './data/mockData';
import { Project } from './types';
import { ROUTES } from './routes';
import './utils/pdfSetup';

function AppContent() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useDragPrevention();

  const handleFilesAdded = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles(prev => [...prev, ...acceptedFiles]);
    toast.success(`${acceptedFiles.length} file(s) added successfully`);
  }, []);

  const handleFileRemove = useCallback((index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  }, []);

  const handleResetAnalysis = useCallback(() => {
    setIsAnalyzing(false);
  }, []);

  const handleStartAnalysis = () => {
    if (uploadedFiles.length === 0) {
      toast.error('Please upload at least one file');
      return;
    }

    setIsAnalyzing(true);
    toast.success('Starting analysis...');
    navigate(ROUTES.ANALYSIS);
  };

  const handleBackToHome = () => {
    setIsAnalyzing(false);
    navigate(ROUTES.HOME);
  };

  const handleProjectClick = (project: Project) => {
    toast.success(`Opened ${project.name}`);
    navigate(ROUTES.PROJECT.replace(':projectId', project.id));
  };

  const handleViewDocument = (projectId: string) => {
    if (uploadedFiles.length > 0) {
      setPdfFile(uploadedFiles[0]);
      toast.loading('Loading document...', { id: 'pdf-load' });
    } else {
      toast.error('No documents uploaded');
    }
    navigate(ROUTES.DOCUMENT.replace(':projectId', projectId));
  };

  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <LandingPage
            uploadedFiles={uploadedFiles}
            onFilesAdded={handleFilesAdded}
            onFileRemove={handleFileRemove}
            onStartAnalysis={handleStartAnalysis}
            isAnalyzing={isAnalyzing}
            onResetAnalysis={handleResetAnalysis}
          />
        }
      />

      <Route path={ROUTES.ANALYSIS} element={<AnalysisProgress uploadedFiles={uploadedFiles} />} />

      <Route
        path={ROUTES.ANALYSIS_DOCUMENT}
        element={<AnalysisDocumentWrapper uploadedFiles={uploadedFiles} issues={mockIssues} />}
      />

      <Route
        path={ROUTES.OVERVIEW}
        element={
          <ProjectOverview
            projects={mockProjects}
            onProjectClick={handleProjectClick}
            onBack={handleBackToHome}
          />
        }
      />

      <Route
        path={ROUTES.PROJECT}
        element={<ProjectDetailsWrapper onViewDocument={handleViewDocument} />}
      />

      <Route
        path={ROUTES.DOCUMENT}
        element={<DocumentViewerWrapper pdfFile={pdfFile} issues={mockIssues} />}
      />

      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  );
}

// Wrapper for analysis document viewer
function AnalysisDocumentWrapper({
  uploadedFiles,
  issues,
}: {
  uploadedFiles: File[];
  issues: typeof mockIssues;
}) {
  const { documentIndex } = useParams<{ documentIndex: string }>();
  const navigate = useNavigate();

  const fileIndex = parseInt(documentIndex || '0', 10);
  const pdfFile = uploadedFiles[fileIndex] || null;

  return (
    <DocumentViewer pdfFile={pdfFile} issues={issues} onBack={() => navigate(ROUTES.ANALYSIS)} />
  );
}

function ProjectDetailsWrapper({
  onViewDocument,
}: {
  onViewDocument: (projectId: string) => void;
}) {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = mockProjects.find(p => p.id === projectId);

  if (!project) {
    return <Navigate to={ROUTES.OVERVIEW} replace />;
  }

  return (
    <ProjectDetails
      project={project}
      onBack={() => navigate(ROUTES.OVERVIEW)}
      onViewDocument={() => onViewDocument(projectId!)}
    />
  );
}

function DocumentViewerWrapper({
  pdfFile,
  issues,
}: {
  pdfFile: File | null;
  issues: typeof mockIssues;
}) {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  return (
    <DocumentViewer
      pdfFile={pdfFile}
      issues={issues}
      onBack={() => navigate(ROUTES.PROJECT.replace(':projectId', projectId!))}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
