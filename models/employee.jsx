import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    Pin: {
      type: String,
      required: true,
    },
    IsEmployed: {
      type: Boolean,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Employee || mongoose.model("Employee", employeeSchema);
