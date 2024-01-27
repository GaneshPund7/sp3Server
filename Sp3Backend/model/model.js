const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  email: String,
  password: String,
  userName: String,
  userName: {
    type: String,
require : true,
  },
  email: {
    type: String,
require : true,
  },
  password: {
    type: String,
require : true,
  }
});

module.exports = mongoose.model('g', taskSchema);
