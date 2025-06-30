import { Schema, model, Types } from "mongoose";

const bookSchema = new Schema({
  title: String,
  author: String,
  category: String,
  description: String,
  price: Number,
  discount: Number,
  year: Date,
  image: Buffer,
  reviews: [{ type: Types.ObjectId, ref: "review" }],
});

export default model("book", bookSchema);
