const connection = require("../config/database");

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

const getHomepage2 = (req, res) => {
  return res.render('home.ejs');
}

module.exports = {
  getHomepage,
  hoiDanit,
  getHomepage2,
};
