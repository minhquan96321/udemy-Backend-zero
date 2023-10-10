const aqp = require("api-query-params");
const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const migrationJWT = require("../migration/generateAccesstoken");

let refreshTokens = [];

module.exports = {
  loginPostServices: async (data) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(data.password, salt);
      // tạo username
      const newUser = await new Admin({
        username: data.username,
        email: data.email,
        password: hashed,
      });

      // save new user
      let user = await newUser.save();
      return user;
    } catch (error) {
      return null;
    }
  },

  getLogin: async (data, res) => {
    try {
      let user = await Admin.findOne({ username: data.username });
      if (!user) {
        return "Không tìm thấy User";
      }
      const validerPassword = await bcrypt.compare(
        data.password,
        user.password
      );

      if (!validerPassword) {
        return "Mật khẩu sai vui lòng nhập lại";
      }
      if (user && validerPassword) {
        // Tạo jwk
        let accessToken = migrationJWT.AccessToken(user);
        let refreshToken = migrationJWT.Refreshtk(user);
        refreshTokens.push(refreshToken);
        // console.log("Checck refer:", refreshTokens);
        // lưu Refresh Token vào cookie
        let url = res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });
        // console.log("cookie:", url);
        // console.log("Checck cooki:", userl);
        const { password, ...other } = user._doc;
        return {
          ...other,
          accessToken,
          // refreshToken,
        };
      }
    } catch (er) {
      return null;
    }
    // console.log("Refresh",refreshToken )
  },
  requetsRefresh: async (req, res) => {
    // lấy resfesh tại user
    // console.log("Cookies: ", req.cookies.refreshToken);
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return "your not authenticated ";
    }
    if (!refreshTokens.includes(refreshToken)) {
      return "Refresh token is not valid";
    }
    let result = "";
    // xác nhận token có đúng hay không
    jwt.verify(refreshToken, process.env.JWT_REST_TOKEN, (err, user) => {
      if (err) {
        console.log("Error: ", err);
      }
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
      // Create new AccessToken and refresh tokeN
      const newAccessToken = migrationJWT.AccessToken(user);
      const newRefreshToken = migrationJWT.Refreshtk(user);
      refreshTokens.push(newRefreshToken);
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      // console.log("Refresh token", newRefreshToken);
      result = newAccessToken;
    });
    // console.log("check thanh cong :", check);
    return result;
  },

  userLogoutToken: async (req, res) => {
    // xóa cookie
    res.clearCookie("refreshToken");
    refreshTokens = refreshTokens.filter(
      (token) => token !== req.cookies.refreshToken
    );
    return "Đăng xuất thành công"
  },
};
