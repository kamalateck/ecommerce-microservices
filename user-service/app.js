const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  res.json({
    message: "Login successful",
    token: "abc123-token"
  });
});

app.listen(3002, () => {
  console.log("User service running on port 3002");
});