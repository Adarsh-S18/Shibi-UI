const express = require("express");
const router = express.Router();
const VlogsController = require("../controller/vlogsController");

const vlogsController = new VlogsController();

//ROUTES
router.get("/get-vlogs", vlogsController.getAllVlogs);
router.post('/post-vlogs',vlogsController.postVlog)

module.exports = { vlogRoutes: router };
