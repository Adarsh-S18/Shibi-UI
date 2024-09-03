const express = require("express");
const router = express.Router();
const VlogsController = require("../controller/vlogsController");

const vlogsController = new VlogsController();

//ROUTES
router.get("/vlogsController", vlogsController.getAllVlogs);

module.exports = { authRoutes: router };
