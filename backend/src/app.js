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
app.use("/images", express.static(path.join(__dirname, "/images")));

// Importing routesæ

// Using routes
app.use("/api/auth", authRoutes);
app.use("/api/feedbacks", feedbackRoutes);
app.use("/api/vlogs", vlogRoutes);
app.use("/api/workshops", workshopRoutes);

mongoose
  .connect("mongodb://localhost:27017/Shibi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen("5000", () => {
  console.log("Backend is running on port 5000.");
});
