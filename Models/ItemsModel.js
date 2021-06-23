import mongoose from "mongoose";

const ItemsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: Number,
    sold: { type: Number, default: 0 },
    bill: {
      billID: String,
      billDate: Date,
      billAmt: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Item", ItemsSchema);
