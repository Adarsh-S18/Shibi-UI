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
        (file) => `/api/uploads/${file.filename}`
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
        newUpdateData.image = `/api/uploads/${req.file.filename}`;
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

  deleteWorkshop = async (req, res, next) => {
    try {
      const workshopId = req.params?.id;
      if (!workshopId) {
        return res.status(400).json({
          message: "Workshop ID is required.",
        });
      }
      const deletedWorkshop = await Workshop.findByIdAndDelete(workshopId);
      if (!deletedWorkshop) {
        return res.status(404).json({
          message: "Workshop not found.",
        });
      }
      return res.status(200).json({
        message: "Workshop deleted successfully!",
        workshop: deletedWorkshop,
      });
    } catch (error) {
      next(error);
    }
  };

  updateWorkshop = async (req, res, next) => {
    try {
      const workshopId = req.params?.id;
      if (!workshopId) {
        return res.status(400).json({ message: "Workshop ID is required." });
      }
      const { name, description } = req.body;
      let updatedImages = [];
      if (req.files && req.files.length > 0) {
        updatedImages = req.files.map(
          (file) => `/api/uploads/${file.filename}`
        );
      }

      const updatedWorkshop = await Workshop.findByIdAndUpdate(
        workshopId,
        {
          name,
          description,
          ...(updatedImages.length > 0 && { images: updatedImages }),
        },
        { new: true, useFindAndModify: false } // Option set here
      );

      if (!updatedWorkshop) {
        return res.status(404).json({ message: "Workshop not found." });
      }

      res.status(200).json(updatedWorkshop);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = WorkshopsController;
