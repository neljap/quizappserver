import mongoose from "mongoose";

export default async function connect() {
  await mongoose.connect(
    "mongodb+srv://quizapp:quizapp1234@cluster0.3lyn60a.mongodb.net/"
  );
  console.log("Database Connected");
}