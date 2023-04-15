const express = require("express");
const router = express.Router();
//inport
const { getHomepage, hoiDanit } = require("../controllers/homeController");

//router : điểu hướng trang

router.get("/", getHomepage);

router.get("/hoidanit", hoiDanit);

module.exports = router;
