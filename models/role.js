const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/internetfolksDB");

const roleSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
    maxLength: 64,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
});

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;