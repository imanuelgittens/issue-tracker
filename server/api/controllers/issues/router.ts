import express from 'express';
import IssuesController from './controller';

export default express.Router().get('/', IssuesController.all);
