const express = require("express");
const app = express();

app.use(express.json());

app.post("/order", (req, res) => {
  res.json({
    message: "Order placed successfully",
    orderId: Math.floor(Math.random() * 10000)
  });
});

app.listen(3001, () => {
  console.log("Order service running on port 3001");
});