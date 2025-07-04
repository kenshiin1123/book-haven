import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

// Routes
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/auth", authRoute);

//TODO: Add token validation middleware here

app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log("Listening to port", PORT);
  connectDB();
});
