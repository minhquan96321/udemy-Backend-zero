const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  // comfig temlate engine
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");

  // config static files : hiện thị images/css/js
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;


