import IssuesService from '../../services/issues.service';
import { IssueModel } from '../../../models/issue';
import { Request, Response } from 'express';

export class IssuesController {
  async all(req: Request, res: Response): Promise<void> {
    const issue = new IssueModel({
      name: 'test2',
    });
    await issue.save();
    const result = await IssueModel.findOne();
    console.log('IssuesController -> result', result);
    res.send(result);
  }

  create() {
    const result = IssuesService.insert();
  }
}

export default new IssuesController();
