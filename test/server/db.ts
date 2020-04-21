import { expect } from 'chai';
import { getDatabaseConnection } from '../../server/db';

describe('The database connection function', () => {
  // mongodb should be running in the background locally for this test to pass
  it('should return a valid connection object', async () => {
    const testDbUrl = 'mongodb://localhost:27017/test';
    const { connections } = await getDatabaseConnection(testDbUrl);
    const [NativeConnection] = connections;
    expect(NativeConnection.readyState).to.eq(1);
    NativeConnection.close();
  });
});
