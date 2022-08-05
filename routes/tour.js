const express = require ("express");
const { getTours } = require("../controllers/tour.js");
const router = express.Router();


router.get("/", getTours);

module.exports = router;