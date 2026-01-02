import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText } from 'lucide-react';

interface FileUploadProps {
  uploadedFiles: File[];
  onFilesAdded: (files: File[]) => void;
  onFileRemove: (index: number) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ uploadedFiles, onFilesAdded, onFileRemove }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onFilesAdded,
    accept: {
      'application/pdf': ['.pdf'],
      'application/x-dwg': ['.dwg'],
      'application/x-ifc': ['.ifc'],
    },
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
        isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
      }`}
    >
      <input {...getInputProps()} />
      {uploadedFiles.length === 0 ? (
        <div>
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <div className="mb-4 text-gray-600">
            {isDragActive ? 'Drop files here...' : 'No file chosen'}
          </div>
          <div>
            <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 inline-block cursor-pointer">
              Choose file
            </span>
            <span className="ml-2 text-gray-600">or drag and drop</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">PDF, DWG, or IFC files</p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="mb-4">
            <Upload className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 inline-block cursor-pointer">
              Add more files
            </span>
            <span className="ml-2 text-gray-600">or drag and drop</span>
          </div>

          {uploadedFiles.map((file, idx) => (
            <div key={idx} className="flex items-center justify-between bg-gray-50 p-3 rounded">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-gray-600" />
                <div className="text-left">
                  <div className="font-medium">{file.name}</div>
                  <div className="text-sm text-gray-500">{(file.size / 1024).toFixed(0)}KB</div>
                </div>
              </div>
              <button
                onClick={e => {
                  e.stopPropagation();
                  onFileRemove(idx);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
