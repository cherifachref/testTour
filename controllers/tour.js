const TourModal = require ("../models/Tour.js")

exports.getTours = async (req, res) => {
    try {
      const tours = await TourModal.find();
      res.status(200).json(tours);
    } catch (error) {
      res.status(404).json({ message: "Something went wrong" });
    }
  };