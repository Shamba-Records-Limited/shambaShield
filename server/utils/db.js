import mongoose from 'mongoose';



const MONGODB_URI = process.env.MONGODB_URI; 
export async function connectDB() {
    if (mongoose.connection.readyState >= 1) {
      // Already connected to MongoDB
      return;
    }
  
    try {
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('✅ Connected to MongoDB Atlas');
    } catch (error) {
      console.error('❌ MongoDB connection error:', error);
      throw error;
    }
  }