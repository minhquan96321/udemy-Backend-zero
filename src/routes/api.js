const express = require("express");
const routerAPI = express.Router();
//inport
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  potUploadSingleFileAPI,
  potUpoadMultipleFiles,
} = require("../controllers/apiController");

const {
  postCreateCustomer,
  postCreateArrayCustomer,
} = require("../controllers/customesController");

//router : điểu hướng trang
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

routerAPI.post("/file", potUploadSingleFileAPI);
routerAPI.post("/files", potUpoadMultipleFiles);

routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomer);

module.exports = routerAPI;
