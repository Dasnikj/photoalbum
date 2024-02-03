// src/utils/db.ts
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const dbUri: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/photoalbum';
    await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
