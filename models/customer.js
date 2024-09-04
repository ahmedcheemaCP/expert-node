const mongoose = require("mongoose");
const CustomerSchemea = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dealer",
  },
});

module.exports = mongoose.model("Customer", CustomerSchemea);
