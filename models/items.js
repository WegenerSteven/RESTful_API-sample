const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  quantityUnit: {
    type: String,
    enum: ["kg", "g", "l", "ml", "unit", "pcs"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateBought: {
    type: Date,
    required: true,
  },
});

//this function formats tje price as currency when displayed
itemSchema.methods.formatPrice = function () {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  }).format(this.price);
};

module.exports = mongoose.model("Item", itemSchema);
