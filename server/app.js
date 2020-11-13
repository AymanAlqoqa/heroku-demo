const express = require("express");
const Products = require("./src/model/products");

const app = express();
app.get("/", async (req, res) => {
  try {
    const product = await Products.create({
      title: "Book",
      description: "this is the first book",
    });
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 5000;

app.set("port", PORT);

module.exports = app;
