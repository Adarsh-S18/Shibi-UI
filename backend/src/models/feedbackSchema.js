const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    images: [String],
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
