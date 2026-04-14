const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "iPhone", price: 80000 },
    { id: 2, name: "Laptop", price: 120000 }
  ]);
});

app.listen(3000, () => {
  console.log("Product service running on port 3000");
});