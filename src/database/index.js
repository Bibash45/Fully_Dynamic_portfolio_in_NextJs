import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin123@cluster0.c4p0b.mongodb.net/portfolio"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
