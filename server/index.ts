import './common/env';
import Server from './common/server';
import routes from './routes';
import { getDatabaseConnection } from './db';

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/issue-tracker';
const cxn = getDatabaseConnection(dbUrl);

const port = parseInt(process.env.PORT);
export default new Server()
  .connectToDB(cxn)
  .router(routes)
  .listen(port);
