const bcrypt = require("bcrypt");

const { loginPostServices, getLogin } = require("../services/LoginServices");

module.exports = {
  postUser: async (req, res) => {
    let result = await loginPostServices(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  // tìm tài khoản Login
  LoginUser: async (req, res) => {
    let result = await getLogin(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
