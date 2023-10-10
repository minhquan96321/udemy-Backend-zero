const jwt = require("jsonwebtoken");

const migrationJWT = {
  AccessToken: (user) => {
    // tạo access jwt
    return jwt.sign(
      {
        id: user.id,
        admin: user.admin,
      },
      process.env.JSON_ACCESS_KEY,
      {
        expiresIn: "60s",
      }
    );
  },
  Refreshtk: (user) => {
    return jwt.sign(
      {
        id: user.id,
        admin: user.admin,
      },
      process.env.JWT_REST_TOKEN,
      {
        expiresIn: "365d",
      }
    );
  },
};
// STORE TOKEN
// 1) LC

module.exports = migrationJWT;
