import mongoose from "mongoose";

// MongoDB URI from the environment variables
const uri = process.env.MONGODB_URI!;

declare global {
  var _mongooseClientPromise: Promise<typeof mongoose> | undefined;
}

let clientPromise: Promise<typeof mongoose>;

if (process.env.NODE_ENV === "development") {
  // In development, use global _mongooseClientPromise to prevent multiple connections
  if (!globalThis._mongooseClientPromise) {
    globalThis._mongooseClientPromise = mongoose.connect(uri);
  }
  clientPromise = globalThis._mongooseClientPromise;
} else {
  // In production, create a fresh mongoose connection for each request
  clientPromise = mongoose.connect(uri);
}

export default clientPromise;
