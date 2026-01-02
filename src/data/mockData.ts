import { Project, Issue } from '../types';

export const mockProjects: Project[] = [
  {
    id: '481726891279',
    name: 'House NW - 2nd Floor Addition',
    status: 'AI compliant',
    statusColor: 'bg-green-100 text-green-800',
    completed: '3 min ago',
    location: 'NW, 13987',
    customerId: '142871289749',
  },
  {
    id: '5656426892',
    name: 'House NW - 1nd Floor Addition',
    status: 'Warning',
    statusColor: 'bg-yellow-100 text-yellow-800',
    completed: '3 min ago',
  },
  {
    id: '12312268912',
    name: 'House WW - 2nd Floor Addition',
    status: 'Rejected with objections',
    statusColor: 'bg-red-100 text-red-800',
    completed: '3 min ago',
  },
  {
    id: '45655891279',
    name: 'House AA - 2nd Floor Addition',
    status: 'Info',
    statusColor: 'bg-blue-100 text-blue-800',
    completed: '3 min ago',
  },
  {
    id: '79434326891',
    name: 'House BB - 2nd Floor Addition',
    status: 'Passed',
    statusColor: 'bg-green-100 text-green-800',
    completed: '3 min ago',
  },
];

export const mockIssues: Issue[] = [
  {
    title: 'Stairwell Width Non-Compliant',
    description:
      'Measured width 950mm does not meet the required minimum (1100mm) for occupancy load >200.',
    regulation: 'Approved Document B – Section 2.4',
  },
  {
    title: 'Stairwell Width Non-Compliant',
    description:
      'Measured width 950mm does not meet the required minimum (1100mm) for occupancy load >200.',
    regulation: 'Approved Document B – Section 2.4',
  },
  {
    title: 'Stairwell Width Non-Compliant',
    description:
      'Measured width 950mm does not meet the required minimum (1100mm) for occupancy load >200.',
    regulation: 'Approved Document B – Section 2.4',
  },
];
