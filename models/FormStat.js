const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormStatSchema = new Schema({
 
  // id: {},
  sleepTime: {
    type: Date,
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
  userName: {
    type: String,
  },
  userMail: {
    type: String,
  },
});

module.exports = FormStat = mongoose.model('form-stats', FormStatSchema);
