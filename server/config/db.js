import mongoose from "mongoose";
import "dotenv/config";

const { connect, connection } = mongoose;
const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = () => {
  try {
    connect(MONGODB_URI);
    connection.on("error", console.error.bind("Connection"));
    connection.once("open", () => {
      console.log("Connected to MongoDB!");
    });
  } catch (error) {
    console.error("Mongodb connection error!", error);
  }
};

export default connectDB;
