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

  deleteVlog = async (req, res, next) => {
    try {
      const vlogId = req.params?.id;
      if (!vlogId) {
        return res.status(400).json({
          message: "Vlog ID is required.",
        });
      }
      const deletedVlog = await Vlog.findByIdAndDelete(vlogId);
      if (!deletedVlog) {
        return res.status(404).json({
          message: "Vlog not found.",
        });
      }
      return res.status(200).json({
        message: "Vlog deleted successfully!",
        vlog: deletedVlog,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = VlogsController;
