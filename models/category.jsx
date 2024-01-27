import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
