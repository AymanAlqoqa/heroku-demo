const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
});

module.exports = model("Product", productSchema);
