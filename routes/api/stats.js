const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/User');

const Stat = require('../../models/Stat');

// @route Get api/auth
// @desc Test route
// @access Public
router.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// @route Post api/stats
// @desc Create a post
// @access Private
router.post('/', async (req, res) => {
  try {
    const newStat = new Stat({
      name: req.body.name,
      light: req.body.light,
      noise: req.body.noise,
      sleepTime: req.body.sleepTime,
      wakeTime: req.body.wakeTime,
      // totalSleep: wakeTime - sleepTime,
      sleepScore: req.body.sleepScore,
    });

    const stat = await newStat.save();
    res.json(stat);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Eror');
  }
});

module.exports = router;
