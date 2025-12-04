import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.error("❌ MONGO_URI missing");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB Error:", err);
    process.exit(1);
  }
};

export default connectDB;



