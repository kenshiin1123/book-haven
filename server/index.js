import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

// Routes
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";

// Middleware
import authMiddleware from "./middleware/authMiddleware.js";

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

// This is used to validate the token
app.use(authMiddleware);

app.use("/api/users", userRoute);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";

  res.status(status).json({
    success: false,
    message,
  });
});

app.listen(PORT, () => {
  console.log("Listening to port", PORT);
  connectDB();
});
