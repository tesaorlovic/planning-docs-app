import { ROUTES } from '../routes';

export const generateProjectPath = (projectId: string) => {
  return ROUTES.PROJECT.replace(':projectId', projectId);
};

export const generateDocumentPath = (projectId: string) => {
  return ROUTES.DOCUMENT.replace(':projectId', projectId);
};
