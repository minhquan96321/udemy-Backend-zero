const { render } = require("ejs");
const connection = require("../config/database");
const User = require("../models/User");

const {
  getAllUsers,
  getUsersById,
  postUpdated,
  postCreateUserID,
} = require("../services/CRUDservices");

const hoiDanit = (req, res) => {
  res.render("sample.ejs");
};

const getHomepage2 = async (req, res) => {
  // SQL DB
  //let results = await getAllUsers();
  // MongoDB
  let results = [];
  return res.render("home.ejs", { listUsers: results }); // x <- y
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

 
  // SQL SEVER DB
  //await postCreateUserID(email, name, city);
  // MongoDB
  await User.create( {
    email: email,
    name: name,
    city: city,
  })
   res.send("Created user successfully");
  //res.redirect("/home");
};

const getCreatePage = (req, res) => {
  res.render("creage.ejs");
};

const getEditpage = async (req, res) => {
  const userID = req.params.id;
  let user = await getUsersById(userID);
  res.render("edit.ejs", { userEdit: user }); // x <- y
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let userID = req.body.id;
  await postUpdated(email, name, city, userID);
  //res.send("Updated user successfully");
  res.redirect("/home");
};

module.exports = {
  hoiDanit,
  getHomepage2,
  postCreateUser,
  getCreatePage,
  getEditpage,
  postUpdateUser,
};
