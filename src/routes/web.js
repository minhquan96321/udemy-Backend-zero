const { Router } = require("express");
const express = require("express");
const router = express.Router();
//inport
const {
  getHomepage,
  hoiDanit,
  getHomepage2,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");

//router : điểu hướng trang

router.get("/", getHomepage);

router.get("/hoidanit", hoiDanit);

router.get("/home", getHomepage2);

router.get("/creage", getCreatePage);

router.post("/create-user", postCreateUser);

module.exports = router;
