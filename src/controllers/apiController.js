const User = require("../models/User");
const {
  uploadMultipleFile,
  uploadSingleFile,
} = require("../services/fileServices");

const getUsersAPI = async (req, res) => {
  // MongoDB
  let results = await User.find({});

  //API
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const postCreateUserAPI = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  // API
  let user = await User.create({
    email: email,
    name: name,
    city: city,
  });
  //res.send("Created user successfully");
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const putUpdateUserAPI = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let userID = req.body.id;

  // SQL Monggodb
  let user = await User.updateOne(
    { _id: userID },
    { email: email, name: name, city: city }
  );

  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const deleteUserAPI = async (req, res) => {
  let userID = req.body.id;
  // SQL DB
  // await deleteUserById(userID);
  let user = await User.deleteOne({ _id: userID });
  // res.redirect("/home");
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};
// đồ án đồ án đồ án đồ án đồ án đồ án đồ án đồ án đồ án đồ đán đồ án
const potUploadSingleFileAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let result = await uploadSingleFile(req.files.image);
  // console.log(">> check result : ", result);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
  //  return res.send("Ok single ");
};

const potUpoadMultipleFiles = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  // upload single file : Trả ra một Objec
  // upload multiple files : Trả ra một ở Array
  if (Array.isArray(req.files.image)) {
    // upload multiple
    let result = await uploadMultipleFile(req.files.image);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  } else {
    // upload single file
    return await uploadSingleFile(req, res);
  }
};

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  potUploadSingleFileAPI,
  potUpoadMultipleFiles,
};
