class VlogsController {
  getAllVlogs = async (req, res, next) => {
    try {
      res.status(200).json({ message: "Fetched all vlogs!" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = VlogsController;
