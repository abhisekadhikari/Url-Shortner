const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortedUrl: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  timeSpan: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Shorted_URL", urlSchema);
