import IssuesService from '../../services/issues.service';
import { Request, Response } from 'express';

export class IssuesController {
  all(req: Request, res: Response): void {
    const result = IssuesService.all();
    res.send(result);
  }
}

export default new IssuesController();
