const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const SliderController = require("../controller/sliderController");

const sliderController = new SliderController();

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
router.get("/get-sliders", sliderController.getAllSliders);
router.post(
  "/add-slider",
  upload.array("files[]", 10),
  sliderController.addSliders
);
router.delete("/delete-slider/:id", sliderController.deleteSliders);

module.exports = { sliderRoutes: router };
