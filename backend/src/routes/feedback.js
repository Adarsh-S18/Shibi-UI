const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const FeedbacksController = require("../controller/feedbacksController");

const feedbacksController = new FeedbacksController();

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
router.get("/get-feedbacks", feedbacksController.getAllFeedbacks);
router.post(
  "/add-feedback",
  upload.array("files[]", 10),
  feedbacksController.addFeedbacks
);

module.exports = { feedbackRoutes: router };
