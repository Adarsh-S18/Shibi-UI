const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const { authRoutes } = require("./routes/auth");
const { feedbackRoutes } = require("./routes/feedback");
const { vlogRoutes } = require("./routes/vlogs");
const { workshopRoutes } = require("./routes/workshops");

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the uploads folder
app.use(
  "/api/uploads",
  express.static(path.join(__dirname, "routes", "static", "uploads"))
);

app.use("/api/auth", authRoutes);
app.use("/api/feedbacks", feedbackRoutes);
app.use("/api/vlogs", vlogRoutes);
app.use("/api/workshops", workshopRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/Shibi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}.`);
});
