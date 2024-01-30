const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  quation: String,
  ans: String,
  qnImg: String,
  qnImg: {
    type: String,
require : true,
  },
  quation: {
    type: String,
require : true,
  },
  ans: {
    type: String,
require : true,
  }
});

module.exports = mongoose.model('qnData', taskSchema);
