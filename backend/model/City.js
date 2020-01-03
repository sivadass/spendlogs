const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
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

module.exports = mongoose.model("City", citySchema);
