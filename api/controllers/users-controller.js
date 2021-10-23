const User = require("../models/user-model");

class UsersController {
  signup = () => {
    return (req, res, next) => {
      res.status(200).send("signup");
    };
  };
  login = () => {
    return (req, res, next) => {
      res.status(200).send("login");
    };
  };
  update = () => {
    return (req, res, next) => {
      res.status(200).send("update");
    };
  };
  loggedInUser = () => {
    return (req, res, next) => {
      res.status(200).send("loggedInUser");
    };
  };
}

module.exports = new UsersController();
