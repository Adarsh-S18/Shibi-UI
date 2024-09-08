const express = require("express");
const router = express.Router();
const FeedbacksController = require("../controller/feedbacksController");

const feedbacksController = new FeedbacksController();

//ROUTES
router.get("/feedbacks", feedbacksController.getAllFeedbacks);

module.exports = { feedbackRoutes: router };
