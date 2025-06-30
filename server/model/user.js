import { Schema, model, Types } from "mongoose";

const userSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    birthday: Date,
    phone: String,
    address: String,
    darktheme: Boolean,
    picture: Buffer,
    cart: [
      {
        bookId: {
          type: Types.ObjectId,
          ref: "book",
        },
        quantity: Number,
      },
    ],
    checkout: [
      {
        bookId: {
          type: Types.ObjectId,
          ref: "book",
        },
        quantity: Number,
        checked: Boolean,
      },
    ],
    purchases: [
      {
        bookId: {
          type: Types.ObjectId,
          ref: "book",
        },
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
