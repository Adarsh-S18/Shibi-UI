const express = require("express");
const router = express.Router();
const WorkshopsController = require("../controller/workshopsController");

const workshopsController = new WorkshopsController();

//ROUTES
router.get("/workshops", workshopsController.getAllWorkshops);

module.exports = { authRoutes: router };
