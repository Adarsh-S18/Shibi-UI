const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const WorkshopsController = require("../controller/workshopsController");

const workshopsController = new WorkshopsController();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "static/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

//ROUTES
router.get("/get-workshops", workshopsController.getAllWorkshops);
router.post(
  "/add-workshop",
  upload.array("files[]", 10),
  workshopsController.addWorkshop
);
router.post(
  "/new-updates",
  upload.single("image"),
  workshopsController.addNewUpdate
);
router.get("/get-new-updates", workshopsController.getNewUpdates);

module.exports = { workshopRoutes: router };
