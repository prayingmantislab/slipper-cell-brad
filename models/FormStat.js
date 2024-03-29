const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormStatSchema = new Schema({
  // id: {},
  sleepTime: {
    type: Date,
    default: Date.now,
  },
  wakeTime: {
    type: Date,
  },
  //   totalSleep: {
  //     type: Number,
  //   },
  sleepScore: {
    type: Number,
  },
  fileLink: {
    type: String,
  },
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  deepSleep: {
    type: Date,
  },
  lightSleep: {
    type: Date,
  },
});

module.exports = FormStat = mongoose.model('form-stats', FormStatSchema);
