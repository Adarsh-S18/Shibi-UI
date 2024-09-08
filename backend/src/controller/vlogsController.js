const Vlog = require("../models/vlogSchema");

class VlogsController {
  getAllVlogs = async (req, res, next) => {
    try {
      const vlogs = await Vlog.find();
      res.status(200).json(vlogs);
    } catch (error) {
      next(error);
    }
  };

  postVlog = async (req, res, next) => {
    try {
      const { name, link } = req.body;
      const newVlog = new Vlog({
        name,
        link,
      });
      const savedVlog = await newVlog.save();
      res.status(201).json(savedVlog);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = VlogsController;
