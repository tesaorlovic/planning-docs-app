import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import AnalysisProgress from './pages/AnalysisProgress';
import DocumentViewer from './pages/DocumentViewer';
import { useDragPrevention } from './hooks/useDragPrevention';
import { mockIssues } from './data/mockData';
import { ROUTES } from './routes';
import './utils/pdfSetup';

function AppContent() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
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
        path={ROUTES.PROJECT}
        element={<ProjectDocumentWrapper uploadedFiles={uploadedFiles} issues={mockIssues} />}
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

// Wrapper for project document viewer (for direct access like /project/45655891279)
function ProjectDocumentWrapper({
  uploadedFiles,
  issues,
}: {
  uploadedFiles: File[];
  issues: typeof mockIssues;
}) {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  // For demo purposes, use first uploaded file or null
  const pdfFile = uploadedFiles[0] || null;

  return (
    <DocumentViewer pdfFile={pdfFile} issues={issues} onBack={() => navigate(ROUTES.ANALYSIS)} />
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
