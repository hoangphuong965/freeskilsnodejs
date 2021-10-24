const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users-controller");
const checkAuth = require("../moddleware/check-auth");

router.post("/signup", UsersController.signup());
router.post("/login", UsersController.login());
router.patch("/update/:id", checkAuth, UsersController.update());
router.get("/logged", UsersController.loggedInUser());

module.exports = router;
