const User = require("../models/User");

const getUsersAPI = async (req, res) => {
  // MongoDB
  let results = await User.find({});

  //API
  return res.status(200).json({
    errorCode: 404,
    data: results,
  });
};

module.exports = { getUsersAPI };
