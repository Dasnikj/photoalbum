// src/utils/db.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/photoalbum';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB Connected');
  } catch (err: any) { // Explicitly type 'err' as an error object
    console.error('MongoDB Connection Error:', err.message);
    process.exit(1);
  }
}; // Add a semicolon here

export default connectDB;
