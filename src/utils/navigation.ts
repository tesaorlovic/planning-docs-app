import { ROUTES } from '../routes';

export const generateProjectPath = (projectId: string) => {
  return ROUTES.PROJECT.replace(':projectId', projectId);
};
