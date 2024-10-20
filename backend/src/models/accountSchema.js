const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    details: [String],
    images: [String],
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
