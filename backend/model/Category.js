const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    value: {
      type: String,
      required: true,
      unique: true
    },
    label: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Category", categorySchema);
