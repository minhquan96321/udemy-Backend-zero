const {
  userAdminServicer,
  deleUserSrevices,
} = require("../services/userLoginServices");

module.exports = {
  userController: async (req, res) => {
    let result = await userAdminServicer(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  deleController: async (req, res) => {
    let result = await deleUserSrevices(req.params);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
