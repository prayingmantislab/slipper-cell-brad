const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const StatSchema = new Schema({
  id: {},
  dateTime: {
    type: Date,
  },
  name: {
    type: String,
  },
  light: {
    type: Number,
  },
  sound: {
    type: Number,
  },
  sleepTime: {
    type: Date,
  },
  wakeTime: {
    type: Date,
  },
  totalSleep: {
    type: Number,
  },
  sleepScore: {
    type: Number,
  },
  userEmail: {
    type: String,
  },
});

module.exports = Stat = mongoose.model('stat', StatSchema);
