import React from 'react';

interface TabsProps {
  activeTab: 'summary' | 'documents';
  onTabChange: (tab: 'summary' | 'documents') => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="p-6 pb-0 bg-gray-100 mb-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-2">
          <button
            onClick={() => onTabChange('summary')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'summary'
                ? 'border-t border-l border-r border-gray-300 bg-white'
                : 'text-gray-600'
            }`}
          >
            Summary
          </button>
          <button
            onClick={() => onTabChange('documents')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'documents'
                ? 'border-t border-l border-r border-gray-300 bg-white'
                : 'text-gray-600'
            }`}
          >
            Documents
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
