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
  getEditpage,
  postUpdateUser,
  deleteUser,
  deleteHandleRemoUser,
} = require("../controllers/homeController");

//router : điểu hướng trang

router.get("/hoidanit", hoiDanit);

router.get("/home", getHomepage2);

router.get("/creage", getCreatePage);

router.post("/create-user", postCreateUser);

router.get("/edit/:id", getEditpage);

router.post("/update-user", postUpdateUser);

//router.post("/delete-user/:id", deleteUser);
router.get("/delete-user/:id", deleteUser);
router.post("/delete-user", deleteHandleRemoUser);

module.exports = router;
