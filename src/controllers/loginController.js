const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const {
  loginPostServices,
  getLogin,
  requetsRefresh,
  userLogoutToken,
} = require("../services/LoginServices");

const loginController = {
  postUser: async (req, res) => {
    let result = await loginPostServices(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  // tìm tài khoản Login
  LoginUser: async (req, res) => {
    let result = await getLogin(req.body, res);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  refreshRequets: async (req, res) => {
    let result = await requetsRefresh(req, res);
    // console.log("check: refreshing: ", req.cookis);
    return res.status(200).json({
      EC: 0,
      accessToken: result,
    });
  },

  logoutToken: async (req, res) => {
    let result = await userLogoutToken(req, res);
    return res.status(200).json({
      EC: 0,
      Logout: result,
    });
  },
};

module.exports = loginController;
