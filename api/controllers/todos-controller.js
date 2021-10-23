const Todo = require("../models/todo-model");

class TodosController {
  getAll = () => {
    return (req, res, next) => {
      res.status(200).json({
        success: true,
        data: [{ todo: "Learn Javascript" }, { todo: "Get Job" }],
      });
    };
  };

  create = () => {
    return (req, res, next) => {
      res.status(200).json({ success: true });
    };
  };

  findById = () => {
    return (req, res, next) => {
      const id = req.params.id;
      res.status(200).json({ success: true, findbyid: id });
    };
  };

  update = () => {
    return (req, res, next) => {
      const id = req.params.id;
      res.status(200).json({ success: true, update: id });
    };
  };

  delete = () => {
    return (req, res, next) => {
      const id = req.params.id;
      res.status(200).json({ success: true, delete: id });
    };
  };
}

module.exports = new TodosController();
