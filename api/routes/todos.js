const express = require("express");
const router = express.Router();
const TodosController = require("../controllers/todos-controller");
const checkAuth = require("../moddleware/check-auth");

router.get("/", checkAuth, TodosController.getAll());
router.post("/", checkAuth, TodosController.create());
router.get("/:id", checkAuth, TodosController.findById());
router.patch("/:id", checkAuth, TodosController.update());
router.delete("/:id", checkAuth, TodosController.delete());

module.exports = router;
