const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 6,
      max: 200
    },
    description: {
      type: String,
      required: true,
      min: 6
    },
    categoryId: {
      type: String,
      required: true
    },
    cityId: {
      type: String,
      required: true
    },
    perks: {
      type: String,
      min: 6
    },
    pay: {
      minimum: {
        type: Number,
        required: true,
        min: 0
      },
      maximum: {
        type: Number,
        required: true,
        min: 0
      }
    },
    experience: {
      type: Number,
      required: true,
      min: 0
    },
    isActive: {
      type: Boolean,
      default: false
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

jobSchema.virtual("category", {
  ref: "Category",
  localField: "categoryId",
  foreignField: "value",
  justOne: true
});

jobSchema.virtual("city", {
  ref: "City",
  localField: "cityId",
  foreignField: "value",
  justOne: true
});

module.exports = mongoose.model("Job", jobSchema);
