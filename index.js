const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Mango" });
});

app.listen(8888, () => {
  console.log("Listening on port 8888");
});
