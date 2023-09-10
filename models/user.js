const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/internetfolksDB");

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
    maxLength: 64,
    default: null,
  },
  email: {
    type: String,
    unique: true,
    maxLength: 128,
  },
  password: {
    type: String,
  },
  created_at: {
    type: Date
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;