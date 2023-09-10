const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/internetfolksDB");

const memberSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  community: {
    type: String,
  },
  user: {
    type: String,
  },
  role: {
    type: String,
  },
  created_at: {
    type: Date,
  },
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;