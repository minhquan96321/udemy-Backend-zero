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
  getAllCustomers,
  putUpdateCustomers,
  DeleteCustomers,
  DeleteAPluginCustomer,
  DeleteArrayCustomer,
} = require("../controllers/customesController");

//router : điểu hướng trang
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

routerAPI.post("/file", potUploadSingleFileAPI);
routerAPI.post("/files", potUpoadMultipleFiles);
// Mongoose
routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomer);
routerAPI.get("/customers", getAllCustomers);
routerAPI.put("/customersl", putUpdateCustomers);
routerAPI.delete("/customers", DeleteCustomers);
routerAPI.delete("/customers1", DeleteAPluginCustomer);
routerAPI.delete("/customers-many", DeleteArrayCustomer);

// Qure string : dùng nhiều data
routerAPI.get("/info", (req, res) => {
  console.log("Check >>>", req.query);
  return res.status(200).json({
    data: req.query,
  });
});

// Prams: Sử dụng khi dùng ít data
routerAPI.get("/info/:name/:adress", (req, res) => {
  console.log("Check pararms>>>", req.params);
  return res.status(200).json({
    data: req.params,
  });
});

module.exports = routerAPI;
