const express = require("express");
const Products = require("./src/model/products");

const app = express();
app.get("/api/v1/products", async (req, res) => {
  try {
    const products = await Products.find()
    res.status(201).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 5000;

app.set("port", PORT);

module.exports = app;
