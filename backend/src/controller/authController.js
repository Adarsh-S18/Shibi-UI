class AuthController {
  logIn = async (req, res, next) => {
    try {
      const userData = req.body;
      res.status(200).json({ message: "User logged in successfully!", token });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AuthController;
