const jwt = require("jsonwebtoken");

const modellJwt = {
  verifyToKen: (req, res, next) => {
    const token = req.headers.token;
    //console.log("token: ", token);
    if (token) {
      const accessToken = token.split(" ")[1];
      // Chứng nhận jwk
      jwt.verify(accessToken, process.env.JSON_ACCESS_KEY, (err, user) => {
        if (err) {
          res.status(403).json("Token is not invalid");
        }
        req.user = user;
        //console.log("req.user: ", req.user.id);
        next();
      });
    } else {
      res.status(401).json("You're not authenticated");
    }
  },

  verifyToKenDelete: (req, res, next) => {
    modellJwt.verifyToKen(req, res, () => {
      //console.log("Verifying", req.user.id);
      if(req.user.id == req.params.id || req.user.admin) {
        next();
      }else {
        res.status(401).json("You're not authenticated");
      }
    });
  },
};

module.exports = modellJwt;
