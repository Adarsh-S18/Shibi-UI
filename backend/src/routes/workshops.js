const express = require("express");
const router = express.Router();
const WorkshopsController = require("../controller/workshopsController");

const workshopsController = new WorkshopsController();

//ROUTES
router.get("/get-workshops", workshopsController.getAllWorkshops);
router.post("/add-workshop", workshopsController.addWorkshop);


module.exports = { workshopRoutes: router };
