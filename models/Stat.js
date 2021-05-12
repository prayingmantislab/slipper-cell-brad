const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatSchema = new Schema({
  id: {},
  date: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
  },
  light: {
    type: Number,
  },
  noise: {
    type: Number,
  },
  sleepTime: {
    type: String,
  },
  wakeTime: {
    type: String,
  },
  totalSleep: {
    type: Number,
  },
  sleepScore: {
    type: Number,
  },
});

module.exports = Stat = mongoose.model('stat', StatSchema);
