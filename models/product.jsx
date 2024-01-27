import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sentTo: {
      type: String,
      required: true,
    },
    inStorage: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    toppings: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Product || mongoose.model("Product", productSchema);
