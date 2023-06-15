const { render } = require("ejs");
const connection = require("../config/database");

const {
  getAllUsers,
  postCreateUserID,
  getUsersById,
  postUpdated,
  deleteUserById,
} = require("../services/CRUDservices");

const hoiDanit = (req, res) => {
  res.render("sample.ejs");
};

const getHomepage2 = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results }); // x <- y
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  console.log(">> email :", email, "name = ", name, "citi = ", city);

  await postCreateUserID(email, name, city);

  // res.send("Created user successfully");
  res.redirect("/home");
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

const deleteUser = async (req, res) => {
  const userID = req.params.id;
  let user = await getUsersById(userID);
  res.render("delete.ejs", { userEdit: user });
};

const deleteHandleRemoUser = async (req, res) => {
  let userID = req.body.id;
  await deleteUserById(userID);
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
