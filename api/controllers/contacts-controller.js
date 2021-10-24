const Contact = require("../models/contact-model");

class ContactsController {
  getAll = () => {
    return async (req, res, next) => {
      const userId = req.userData.id;
      const { count, rows } = await Contact.findAndCountAll({
        where: {
          user_id: userId,
        },
        order: [
          ["lname", "ASC"],
          ["fname", "ASC"],
        ],
      });
      res.status(200).json({
        data: rows,
        total: count,
      });
    };
  };

  create = () => {
    return async (req, res, next) => {
      try {
        const userId = req.userData.id;
        const contact = await Contact.create({
          fname: req.body.fname,
          lname: req.body.lname,
          email: req.body.email,
          phone: req.body.phone,
          user_id: userId,
        });
        res.status(200).json({
          success: true,
          contact,
        });
      } catch (error) {
        res.status(422).json(error.errors);
      }
    };
  };

  findById = () => {
    return async (req, res, next) => {
      const id = req.params.id;
      const userId = req.userData.id;
      const contact = await Contact.findOne({
        where: {
          id: id,
          user_id: userId,
        },
      });
      res.status(200).json({ success: true, contact });
    };
  };

  update = () => {
    return async (req, res, next) => {
      const id = req.params.id;
      const userId = req.userData.id;
      const data = await Contact.findOne({
        where: {
          id: id,
          user_id: userId,
        },
      });
      if (data) {
        const contact = await data.update({
          fname: req.body.fname,
          lname: req.body.lname,
          email: req.body.email,
          phone: req.body.phone,
        });
        await contact.reload();
        res
          .status(200)
          .json({ success: true, contact, msg: "updated contact" });
      }
      res.status(200).json({ success: false, msg: "not found" });
    };
  };

  delete = () => {
    return async (req, res, next) => {
      const id = req.params.id;
      const userId = req.userData.id;
      const data = await Contact.findOne({
        where: {
          id: id,
          user_id: userId,
        },
      });
      if (data) {
        await data.destroy({ where: { id } });
        res.status(200).json({ success: true, msg: "deleted contact" });
      }
      res.status(200).json({ success: false, msg: "not found" });
    };
  };
}

module.exports = new ContactsController();
