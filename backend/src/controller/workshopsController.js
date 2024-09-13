const Workshop = require("../models/workshopSchema");
const path = require("path");
const fs = require("fs");
const latestUpdate = require("../models/latestUpdate");

class WorkshopsController {
  getAllWorkshops = async (req, res, next) => {
    try {
      const workshops = await Workshop.find();
      res.status(200).json(workshops);
    } catch (error) {
      next(error);
    }
  };

  addWorkshop = async (req, res, next) => {
    try {
      const { name, description } = req.body;
      const filePaths = req.files.map(
        (file) => `/uploads/${file.filename}`
      );
      const newWorkshop = new Workshop({
        name,
        description,
        images: filePaths,
      });
      const savedWorkshop = await newWorkshop.save();
      res.status(201).json(savedWorkshop);
    } catch (error) {
      next(error);
    }
  };

  addNewUpdate = async (req, res, next) => {
    try {
      const { youtubeLink } = req.body;
      let newUpdateData = {};
      if (req.file) {
        newUpdateData.image = `/uploads/${req.file.filename}`;
      }
      if (youtubeLink) {
        newUpdateData.youtubeLink = youtubeLink;
      }
      await latestUpdate.deleteMany({});
      const newUpdate = new latestUpdate(newUpdateData);
      await newUpdate.save();
      res.status(201).json({
        message: "New update added successfully!",
        data: newUpdate,
      });
    } catch (error) {
      next(error);
    }
  };

  getNewUpdates = async (req, res, next) => {
    try {
      const latestUpdateData = await latestUpdate.findOne();
      if (!latestUpdateData) {
        return res.status(404).json({ message: "No updates found." });
      }
      res.status(201).json(latestUpdateData);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = WorkshopsController;
