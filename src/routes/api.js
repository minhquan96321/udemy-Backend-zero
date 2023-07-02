const express = require("express");
const routerAPI = express.Router();
//inport
const { getUsersAPI } = require("../controllers/apiController");

//router : điểu hướng trang
routerAPI.get("/", (req, res) => {
  res.send("Hello world");
});

routerAPI.get("/users", getUsersAPI );

module.exports = routerAPI;
