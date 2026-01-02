export interface Project {
  id: string;
  name: string;
  status: string;
  statusColor: string;
  completed: string;
  location?: string;
  customerId?: string;
}

export interface Issue {
  title: string;
  description: string;
  regulation: string;
}

export type ViewType = 'landing' | 'overview' | 'project' | 'document';
export type TabType = 'summary' | 'documents';
export type ResultsTabType = 'results' | 'sources';
