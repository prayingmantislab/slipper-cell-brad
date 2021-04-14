const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    },
    date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String
      },
    sleepScore: {
        type: Number
      },
    sleepTime: {
        type: Date
      },
    wakeTime: {
        type: Date
      },
    totalSleep: {
        type: Number
      },
    noise: {
        type: Number
      },
    light: {
        type: Number
      }


});

module.exports = Profile = mongoose.model('profile, ProfileSchema');