const aqp = require("api-query-params");
const Admin = require("../models/admin");
const bcrypt = require("bcrypt");

module.exports = {
  userAdminServicer: async (data) => {
    try {
      let user = await Admin.find();
      return user;
    } catch (err) {
      return null;
    }
  },

  deleUserSrevices: async (data) => {
    try {
      const id = aqp.id;
      const user = await Admin.findById(id);
      return "Delete sucessfully";
    } catch (err) {
      return null;
    }
  },
};
