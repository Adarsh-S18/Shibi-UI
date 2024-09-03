class WorkshopsController {
    getAllWorkshops = async (req, res, next) => {
      try {
        res.status(200).json({ message: "Fetched all Workshops!" });
      } catch (error) {
        next(error);
      }
    };
  }
  
  module.exports = WorkshopsController;
  