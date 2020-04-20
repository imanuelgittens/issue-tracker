import L from '../../common/logger';
import { IssueModel } from '../../models/issue';
import { Request, Response } from 'express';

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
  async insert(): Promise<any> {
    const issue = new IssueModel({
      name: 'test2',
    });
    await issue.save();
    console.log('issue saved');
    return issue;
  }
}

export default new IssuesService();
