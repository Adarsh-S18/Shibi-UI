const Feedback = require("../models/feedbackSchema");

class FeedbacksController {
  getAllFeedbacks = async (req, res, next) => {
    try {
      const feedbacks = await Feedback.find();
      res.status(200).json(feedbacks[0]?.images || []);
    } catch (error) {
      next(error);
    }
  };

  addFeedbacks = async (req, res, next) => {
    try {
      const filePaths = req.files.map(
        (file) => `/api/uploads/${file.filename}`
      );
      let feedback = await Feedback.findOne();
      if (feedback) {
        feedback.images.push(...filePaths);
      } else {
        feedback = new Feedback({
          images: filePaths,
        });
      }
      const savedFeedback = await feedback.save();
      res.status(201).json(savedFeedback);
    } catch (error) {
      next(error);
    }
  };

  deleteFeedback = async (req, res, next) => {
    try {
      const feedbackIndex = parseInt(req.params?.id);
      const feedback = await Feedback.findOne({}); 
      if (!feedback) {
        return res.status(404).json({ message: "Feedback not found" });
      }
      if (feedbackIndex < 0 || feedbackIndex >= feedback.images.length) {
        return res.status(400).json({ message: "Invalid image index" });
      }
      feedback.images.splice(feedbackIndex, 1);
      await feedback.save();
      return res
        .status(200)
        .json({
          message: "Image deleted successfully",
          images: feedback.images,
        });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = FeedbacksController;
