const express = require('express');
const User = require('../../models/User');
const router = express.Router();

const Stat = require('../../models/Stat');
const User = require('../../models/User');
// @route Post api/stats
// @desc Create a post
// @access Public
router.post('/', async (req, res) => {
  try {
    const user = await User.findById(req.user.id.select('-password'));

    const newStat = new Stat({
        date: Date.now,
        user: req.body.id,
        name: req.body.name,
        avatar: user.avatar,
        light: req.body.light,
        noise: req.body.noise,
        sleepTime: req.body.sleepTime,
        wakeTime: req.body.wakeTime,
        totalSleep: wakeTime - sleepTime,
        sleepScore: sleepScore,
    });

    const stat = await newStat.save();
    res.json(stat);
  } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Eror');
  }
}
);

module.exports = routr;