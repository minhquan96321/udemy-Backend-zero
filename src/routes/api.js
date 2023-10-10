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

// Dự án Project
const {
  postCreateProject,
  getAllProject,
  putProject,
  deleteProject,
} = require("../controllers/projectController");
// Task
const {
  postCreateTask,
  getFetchTask,
  putTask,
  deleteTask,
} = require("../controllers/taskController");
// login
const loginController = require("../controllers/loginController");

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

// Dự án proje
routerAPI.post("/projects", postCreateProject);
routerAPI.get("/projects", getAllProject);
routerAPI.put("/projects", putProject);
routerAPI.delete("/projects", deleteProject);
// Task
//routerAPI.post("/task", postCreateTask);
routerAPI.post("/task", postCreateTask);
routerAPI.get("/task", getFetchTask);
routerAPI.put("/task", putTask);
routerAPI.delete("/task", deleteTask);

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

// Login API request
const modellJwt = require("../middleware/middleware");
routerAPI.post("/login", loginController.postUser);
routerAPI.post("/login1", loginController.LoginUser);
// RERESH
routerAPI.post("/refresh", loginController.refreshRequets);
// Login out
routerAPI.post("/logout", modellJwt.verifyToKen, loginController.logoutToken);
module.exports = routerAPI;
