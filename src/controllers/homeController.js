const { render } = require("ejs");
const connection = require("../config/database");

const { getAllUsers } = require("../services/CRUDservices");

const getHomepage = (req, res) => {
  //proces data
  // call model
  let user = [];
  connection.query("select * from Users ;", function (err, results, fields) {
    user = results;
    //console.log(">>>results =", results); // results contains rows returned by server
    res.send(JSON.stringify(user));
  });
};

const hoiDanit = (req, res) => {
  res.render("sample.ejs");
};

const getHomepage2 = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  console.log(">> email :", email, "name = ", name, "citi = ", city);

  // connection.query(
  //   `   INSERT INTO Users (email, name, city) VALUES
  //      ( ?, ?, ?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     res.send("Created user successfully");
  //   }
  // );

  let [results, fields] = await connection.query(
    `   INSERT INTO Users (email, name, city) VALUES
       ( ?, ?, ?)`,
    [email, name, city]
  );
  console.log(">>results:", results);
  res.send("Created user successfully");
};

const getCreatePage = (req, res) => {
  res.render("creage.ejs");
};

module.exports = {
  getHomepage,
  hoiDanit,
  getHomepage2,
  postCreateUser,
  getCreatePage,
};
