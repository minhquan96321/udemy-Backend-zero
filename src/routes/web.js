const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World! & cái gì vậy hề ");
});

router.get("/hoidanit", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;
