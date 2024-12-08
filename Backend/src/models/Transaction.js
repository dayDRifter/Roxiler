const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price positive number"],
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    dateOfSale: {
      type: Date,
      required: true,
    },
    sold: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

transactionSchema.index({ title: 1, description: 1, price: 1, dateOfSale: 1 });

module.exports = mongoose.model("Transaction", transactionSchema);
