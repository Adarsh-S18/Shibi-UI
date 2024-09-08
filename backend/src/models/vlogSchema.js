const mongoose = require("mongoose");

const vlogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Vlog = mongoose.model("Vlog", vlogSchema);

module.exports = Vlog;
