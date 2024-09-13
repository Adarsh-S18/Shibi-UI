const mongoose = require("mongoose");

const LatestUpdateSchema = new mongoose.Schema({
  youtubeLink: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("LatestUpdate", LatestUpdateSchema);
