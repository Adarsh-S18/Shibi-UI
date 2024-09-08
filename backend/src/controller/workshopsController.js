const Workshop = require("../models/workshopSchema");

class WorkshopsController {
  getAllWorkshops = async (req, res, next) => {
    try {
      const vlogs = await Workshop.find();
      res.status(200).json(vlogs);
    } catch (error) {
      next(error);
    }
  };

  addWorkshop = async (req, res, next) => {
    try {
      const { name, description } = req.body;
      const newWorkshop = new Workshop({
        name,
        description,
      });
      const savedVlog = await newWorkshop.save();
      res.status(201).json(savedVlog);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = WorkshopsController;
