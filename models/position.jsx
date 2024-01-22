import mongoose, { Schema } from "mongoose";

const positionSchema = new Schema(
  {
    position: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Position || mongoose.model("Position", positionSchema);
