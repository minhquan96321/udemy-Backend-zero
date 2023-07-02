const { render } = require("ejs");
const connection = require("../config/database");
const User = require("../models/User");

const {
  getAllUsers,
  getUsersById,
  postUpdated,
  postCreateUserID,
  deleteUserById,
} = require("../services/CRUDservices");

const hoiDanit = (req, res) => {
  res.render("sample.ejs");
};

const getHomepage2 = async (req, res) => {
  // SQL DB
  //let results = await getAllUsers();
  // MongoDB
  let results = await User.find({});
  return res.render("home.ejs", { listUsers: results }); // x <- y
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  // SQL SEVER DB
  //await postCreateUserID(email, name, city);
  // MongoDB
  await User.create({
    email: email,
    name: name,
    city: city,
  });
  //res.send("Created user successfully");
  res.redirect("/home");
};

const getCreatePage = (req, res) => {
  res.render("creage.ejs");
};

const getEditpage = async (req, res) => {
  const userID = req.params.id;
  //SQL DB Query
  //let user = await getUsersById(userID);
  //SQL MONGODB Query
  let user = await User.findById(userID).exec();
  res.render("edit.ejs", { userEdit: user }); // x <- y
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let userID = req.body.id;
  //await postUpdated(email, name, city, userID);
  // SQL Monggodb
  await User.updateOne(
    { _id: userID },
    { email: email, name: name, city: city }
  );
  //res.send("Updated user successfully");
  res.redirect("/home");
};

const deleteUser = async (req, res) => {
  const userID = req.params.id;
  // // SQL DB
  // //let user = await getUsersById(userID);
  // // SQL MongoDB
  let user = await User.findById(userID).exec();
  res.render("delete.ejs", { userEdit: user });
  // res.send("Updated user successfully");
};

const deleteHandleRemoUser = async (req, res) => {
  let userID = req.body.id;
  // SQL DB
  // await deleteUserById(userID);
  await User.deleteOne({ _id: userID });
  res.redirect("/home");
};

module.exports = {
  hoiDanit,
  getHomepage2,
  postCreateUser,
  getCreatePage,
  getEditpage,
  postUpdateUser,
  deleteUser,
  deleteHandleRemoUser,
};
