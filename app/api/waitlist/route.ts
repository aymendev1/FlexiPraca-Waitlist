import { NextResponse } from "next/server";
import mongoose from "mongoose";
import clientPromise from "@/lib/mongodb";

// Waitlist Schema
const waitlistSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

// Model for the Waitlist collection
const Waitlist =
  mongoose.models.Waitlist || mongoose.model("Waitlist", waitlistSchema);

export async function POST(req: Request) {
  try {
    // Ensure the database connection is established
    await clientPromise;

    // Parse the request body (email)
    const { email } = await req.json();

    // Check if the email already exists in the waitlist
    const existingUser = await Waitlist.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists in the waitlist." },
        { status: 400 }
      );
    }

    // Create and save a new waitlist entry
    const newWaitlistEntry = new Waitlist({ email });
    await newWaitlistEntry.save();

    return NextResponse.json(
      { message: "Successfully added to waitlist!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error with MongoDB operation:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
