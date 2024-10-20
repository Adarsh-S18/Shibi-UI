const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const AccountController = require("../controller/accountController");

const accountController = new AccountController();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "static/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

router.get("/get-details", accountController.getDetails);
router.post("/add-details", accountController.addDetails);
router.delete("/delete-details/:id", accountController.deleteDetails);
router.post(
  "/add-profile",
  upload.array("files[]", 10),
  accountController.addProfile
);

module.exports = { accountRoutes: router };
