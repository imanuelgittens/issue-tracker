import mongoose, { Mongoose } from 'mongoose';

export async function getDatabaseConnection(url): Promise<Mongoose> {
  const cxn = await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return cxn;
}
