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
      const filePaths = req.files.map((file) => `/uploads/${file.filename}`);
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
}

module.exports = FeedbacksController;
