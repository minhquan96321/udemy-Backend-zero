const express = require("express");
const routerADM = express.Router();

const modellJwt = require("../middleware/middleware");
const { userController, deleController } = require("../controllers/userLogin");
// LẤY TẤT CẢ USER

routerADM.get("/", modellJwt.verifyToKen, userController);
routerADM.delete("/:id",modellJwt.verifyToKenDelete, deleController);

module.exports = routerADM;
