// const { builtinModules } = require("modules");
class ContactsController {
  getAll = () => {
    return (req, res, next) => {
      res.status(200).json({
        success: true,
        data: [
          { fname: "Toni", lname: "Parham", phone: "444-333-444" },
          { fname: "Jules", lname: "Parham", phone: "434-222-424" },
        ],
      });
    };
  };

  create = () => {
    return (req, res, next) => {
      const obj = {
        fname: req.body.fname,
        lname: req.body.lname,
        phone: req.body.phone,
      };
      res.status(200).json({ success: true, obj });
    };
  };

  findById = () => {
    return (req, res, next) => {
      const id = req.params.id;
      const page = req.query.page;
      res.status(200).json({ success: true, findbyid: id, page });
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

module.exports = new ContactsController();
