const express = require("express");
const routerAPI = express.Router();
//inport
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  potUploadSingleFileAPI ,
} = require("../controllers/apiController");

//router : điểu hướng trang
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);
routerAPI.post("/file", potUploadSingleFileAPI);

module.exports = routerAPI;
