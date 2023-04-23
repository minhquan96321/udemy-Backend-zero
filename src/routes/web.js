const express = require("express");
const router = express.Router();
//inport
const { getHomepage, hoiDanit, getHomepage2 } = require("../controllers/homeController");

//router : điểu hướng trang

router.get("/", getHomepage);

router.get("/hoidanit", hoiDanit);

router.get("/home", getHomepage2);

module.exports = router;
