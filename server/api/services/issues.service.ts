import L from '../../common/logger';

interface Issue {
  id: string;
  summary: string;
  description: string;
  reporter: string;
  assignee: string;
  priority;
}

export class IssuesService {
  all(): string {
    return 'all issues';
  }
}

export default new IssuesService();
