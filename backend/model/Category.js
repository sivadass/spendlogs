const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    value: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 30
    },
    label: {
      type: String,
      required: true,
      unique: true,
      min: 1,
      max: 30
    },
    icon: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 30
    },
    color: {
      type: String,
      unique: true,
      min: 7,
      max: 7
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Category", categorySchema);
