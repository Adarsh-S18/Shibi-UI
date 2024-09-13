const mongoose = require("mongoose");

const workshopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [String], // Array of strings to store image paths
  },
  { timestamps: true }
);

const Workshop = mongoose.model("Workshop", workshopSchema);

module.exports = Workshop;
