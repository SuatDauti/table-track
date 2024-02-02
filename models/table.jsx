import mongoose, { Schema } from "mongoose";

const tableSchema = new Schema(
  {
    usedBy: {
      type: String,
    },
    tableNO: {
      type: Number,
    },
    tableTotal: {
      type: Number,
    },
    tableContent: [
      {
        productName: String,
        productAmmount: Number,
        productPrice: Number,
        size: String,
        toppings: [String],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.models.Table || mongoose.model("Table", tableSchema);
