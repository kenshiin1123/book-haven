import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

// Routes
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import bookRoute from "./routes/book.route.js";

// Middleware
import errorHandler from "./middleware/errorHandler.js";

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

// Authentication Route
app.use("/api/auth", authRoute);

// User Routes
app.use("/api/users", userRoute);

// Book Routes
app.use("/api/books", bookRoute);

// Error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Listening to port", PORT);
  connectDB();
});
