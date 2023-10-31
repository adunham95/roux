import mongoose from 'mongoose';

const MongoDb = process.env.DATABASE_URL || '';

const connectDb = async () => {
  try {
    if (!MongoDb) throw Error('DATABASE_URL not set');
    await mongoose.connect(MongoDb);
    console.log('db success connect');
  } catch (err) {
    console.log('error connecting to database');
    console.log(err);
    process.exit(1);
  }
};

export default connectDb;
