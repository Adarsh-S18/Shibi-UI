class FeedbacksController {
  getAllFeedbacks = async (req, res, next) => {
    try {
      res.status(200).json({ message: "Feedbacks Fetched!" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = FeedbacksController;
