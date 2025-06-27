import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(PORT, () => {
  console.log("Listening to port", PORT);
});
