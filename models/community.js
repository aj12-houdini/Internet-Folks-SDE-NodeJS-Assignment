const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/internetfolksDB");

const communitySchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
    maxLength: 128,
  },
  slug: {
    type: String,
    maxLength: 255,
    unique: true,
  },
  owner: {
    type: String, 
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
});

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;