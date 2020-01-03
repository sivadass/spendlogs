const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
      min: 1,
      max: 99999999
    },
    payee: {
      type: String,
      required: true,
      min: 1,
      max: 50
    },
    categoryId: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      max: 200
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

expenseSchema.virtual("category", {
  ref: "Category",
  localField: "categoryId",
  foreignField: "value",
  justOne: true
});

module.exports = mongoose.model("Expense", expenseSchema);
