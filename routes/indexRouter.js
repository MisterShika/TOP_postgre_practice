const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.getUsernames);

indexRouter.get("/new", indexController.createUsernameGet);
indexRouter.post("/new", indexController.createUsernamePost);

indexRouter.get("/delete-user", indexController.deleteUser);

module.exports = indexRouter;