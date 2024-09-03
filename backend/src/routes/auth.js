const express = require("express");
const router = express.Router();
const AuthController = require("../controller/authController");

const authController = new AuthController();

//ROUTES
router.post("/login", authController.logIn);

module.exports = { authRoutes: router };
