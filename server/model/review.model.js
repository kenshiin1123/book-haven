import { Schema, model, Types } from "mongoose";

const reviewSchema = new Schema({
  stars: Number,
  description: String,
  userId: {
    type: Types.ObjectId,
    ref: "user",
  },
  datetime: Date,
  pictures: [
    {
      type: Buffer,
    },
  ],
});

export default model("review", reviewSchema);
