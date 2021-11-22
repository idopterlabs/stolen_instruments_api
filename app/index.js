const express = require("express");
const app = express();
const auth = require("./auth");

app.get("/search", auth, (req, res) => {
  const { model, year } = req.query;

  if (!model || !year) {
    res.json({ error: "Invalid model and year" });
    return;
  }

  // Dummy implementation.
  // Returns true for all model + string total character
  // count which are even
  const isStolen = !!(("" + model + year).length % 2);
  setTimeout(() => {
    res.json({ isStolen });
  }, randomSleep());
});

function randomSleep() {
  return Math.floor(Math.random() * 7) * 1000;
}
module.exports = app;
