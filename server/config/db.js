import mongoose from "mongoose";
import "dotenv/config";

const { connect, connection } = mongoose;
const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = () => {
  try {
    connect(MONGODB_URL);
    connection.on("error", console.error.bind("Connection"));
    connection.once("open", () => {
      console.log("Connected to MongoDB!");
    });
  } catch (error) {
    console.error("Mongodb connection error!", error);
  }
};

export default connectDB;
