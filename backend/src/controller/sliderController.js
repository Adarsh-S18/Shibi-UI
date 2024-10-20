const Slider = require("../models/sliderSchema");

class SliderController {
  getAllSliders = async (req, res, next) => {
    try {
      const sliders = await Slider.find();
      res.status(200).json(sliders[0]?.images || []);
    } catch (error) {
      next(error);
    }
  };

  addSliders = async (req, res, next) => {
    try {
      const filePaths = req.files.map(
        (file) => `/api/uploads/${file.filename}`
      );
      let sliders = await Slider.findOne();
      if (sliders) {
        sliders.images.push(...filePaths);
      } else {
        sliders = new Slider({
          images: filePaths,
        });
      }
      console.log("🚀 ~ SliderController ~ addSliders:", sliders);
      const savedSlider = await sliders.save();
      console.log(savedSlider);
      res.status(201).json(savedSlider);
    } catch (error) {
      next(error);
    }
  };

  deleteSliders = async (req, res, next) => {
    try {
      const sliderIndex = parseInt(req.params?.id);
      const slider = await Slider.findOne({});
      if (!slider) {
        return res.status(404).json({ message: "Sliders not found" });
      }
      if (sliderIndex < 0 || sliderIndex >= slider.images.length) {
        return res.status(400).json({ message: "Invalid image index" });
      }
      slider.images.splice(sliderIndex, 1);
      await slider.save();
      return res.status(200).json({
        message: "Image deleted successfully",
        images: slider.images,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = SliderController;
