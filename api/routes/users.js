const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users-controller");

router.post("/signup", UsersController.signup());
router.post("/login", UsersController.login());
router.patch("/update/:id", UsersController.update());
router.get("/loggedInUser", UsersController.loggedInUser());

module.exports = router;
