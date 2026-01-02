import { useEffect } from 'react';

export const useDragPrevention = () => {
  useEffect(() => {
    const preventDefaults = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      document.body.addEventListener(eventName, preventDefaults as EventListener);
    });

    return () => {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        document.body.removeEventListener(eventName, preventDefaults as EventListener);
      });
    };
  }, []);
};
