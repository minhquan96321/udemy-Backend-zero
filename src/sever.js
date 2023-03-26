const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME || 8888;


// comfig temlate engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  //res.send("Yeu em qua di");
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
