import { Schema, model, Types } from "mongoose";

const userSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    email: {
      type: String,
      unique: true,
    },
    hashedPassword: String,
    birthday: Date,
    phone: String,
    address: String,
    darktheme: Boolean,
    picture: Buffer,
    cart: [
      {
        bookId: String,
        quantity: Number,
        checked: Boolean,
      },
    ],
    purchases: [
      {
        bookId: String,
        quantity: Number,
        status: String,
        datetime: Date,
      },
    ],
    reviews: [{ type: Types.ObjectId, ref: "review" }],
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
