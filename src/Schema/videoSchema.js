const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
});

const Video = mongoose.model("Video", videoSchema);

module.experts = Video;
