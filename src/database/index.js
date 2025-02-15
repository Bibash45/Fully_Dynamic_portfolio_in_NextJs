import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
