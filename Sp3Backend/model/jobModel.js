const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  applyNow: String,
  companyImg: String,
  companyName: String,
  description: String,
  responsibilities : String,
  qualification : String,
  role : String,
  role : String,
  experience : String,
  salary : String,
  batch : String,
  telegram: String,
  whatsapp: String,

  applyNow:{
    type: String,
    require : true,
  },
  companyImg:{
    type: String,
    require : true,
  },
  companyName: {
    type: String,
require : true,
  },
  description: {
    type: String,
require : true,
  },
  responsibilities: {
    type: String,
require : true,
  },
  qualification: {
    type: String,
require : true,
  },
  role: {
    type: String,
require : true,
  },
  location: {
    type: String,
require : true,
  },
  experience: {
    type: String,
require : true,
  },
  salary: {
    type: String,
require : true,
  },
  batch: {
    type: String,
require : true,
  }
});

module.exports = mongoose.model('jobs', taskSchema);
