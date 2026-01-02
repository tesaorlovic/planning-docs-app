export interface Issue {
  title: string;
  description: string;
  regulation: string;
}

export type ViewType = 'landing' | 'analysis' | 'document';
export type TabType = 'summary' | 'documents';
export type ResultsTabType = 'results' | 'sources';
