const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tourSchema = new Schema({
  title: String,
  description: String,
  name: String,
  creator: String,
  tags: [String],
  imageFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likeCount: {
    type: Number,
    default: 0,
  }
});


module.exports = mongoose.model("Tour", tourSchema);
