

const connection = require("../config/database");

const getAllUsers = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");

  return results;
};

const postCreateUserID = async (email, name, city) => {
  let [results, fields] = await connection.query(
    `   INSERT INTO Users (email, name, city) VALUES
       ( ?, ?, ?)`,
    [email, name, city]
  );
  // connection.query(
  //   `   INSERT INTO Users (email, name, city) VALUES
  //      ( ?, ?, ?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     res.send("Created user successfully");
  //   }
  // );
};

const getUsersById = async (userID) => {
  let [results, fields] = await connection.query(
    "SELECT * FROM Users where id = ?",
    [userID]
  );

  let user = results && results.length > 0 ? results[0] : {};

  return user;
};

const postUpdated = async (email, name, city, userID) => {
  let [results, fields] = await connection.query(
    `   UPDATE Users 
    SET email = ?, name = ?, city = ?
    WHERE id  = ?;`,
    [email, name, city, userID]
  );
};

const deleteUserById = async (userID) => {
  let [results, fields] = await connection.query(
    `   DELETE FROM Users  WHERE id = ?`,
    [userID]
  );
};

module.exports = {
  getAllUsers,
  postCreateUserID,
  getUsersById,
  postUpdated,
  deleteUserById,
};
