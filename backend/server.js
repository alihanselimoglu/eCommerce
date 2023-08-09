import express from "express";
import dotenv from "dotenv";
dotenv.config();

import products from "./data/products.js";
const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
