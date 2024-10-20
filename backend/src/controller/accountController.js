const Account = require("../models/accountSchema");

class AccountController {
  getDetails = async (req, res, next) => {
    try {
      const account = await Account.findOne();
      res.status(200).json(account ? account : []);
    } catch (error) {
      next(error);
    }
  };

  addDetails = async (req, res, next) => {
    try {
      console.log(req.body);
      const { entry } = req.body;
      const account = await Account.findOne();
      if (account) {
        account.details.push(entry);
        await account.save();
      } else {
        const newAccount = new Account({ details: [entry] });
        await newAccount.save();
      }

      res.status(201).json({ message: "Details added successfully" }); // Send success response
    } catch (error) {
      next(error); // Pass error to the error handler middleware
    }
  };

  deleteDetails = async (req, res, next) => {
    try {
      const detailIndex = parseInt(req.params?.id);
      const account = await Account.findOne();
      if (
        !account ||
        detailIndex < 0 ||
        detailIndex >= account.details.length
      ) {
        return res.status(400).json({ message: "Invalid detail index" });
      }
      account.details.splice(detailIndex, 1);
      await account.save();

      return res.status(200).json({
        message: "Detail deleted successfully",
        details: account.details,
      });
    } catch (error) {
      next(error);
    }
  };

  addProfile = async (req, res, next) => {
    try {
      const filePaths = req.files.map(
        (file) => `/api/uploads/${file.filename}`
      );

      let feedback = await Account.findOne();

      if (feedback) {
        // Replace the existing images with the new ones
        feedback.images = filePaths;
      } else {
        // Create a new feedback document if none exists
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

module.exports = AccountController;
