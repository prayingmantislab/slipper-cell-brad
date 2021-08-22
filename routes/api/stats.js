const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/User');

const Stat = require('../../models/Stat');

// @route Get api/stats
// @desc get all stats
// @access Public
router.get('/', async (req, res) => {
  try {
    const stats = await Stat.find();
    res.json(stats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route Get api/mergestats
// @desc get all stats
// @access Public
router.get('/mergeStats', async (req, res) => {
  try {
    const mergeStats = await Stat.find();

    // db call 1
    // [{id:"liranmeir@gmail, dailyNoise:12, dailyLight:14}]

    // db call 2
    // [{id:"liranmeir@gmail, sleepTime:33, sleepScore:33, wakeTime:22}]

    const mergedUserData = []; //getMergedArrayByUser(statsArray, formStatsArray);

    res.json(mergedUserData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route Post api/stats
// @desc Create a post
// @access Private
router.post('/', async (req, res) => {
  try {
    const newStat = new Stat({
      id: req.body.id,
      dateTime: req.body.dateTime,
      light: req.body.light,
      sound: req.body.sound,
      userEmail: req.body.userEmail,
    });

    console.log('about to save ', newStat);
    const stat = await newStat.save();
    res.json(stat);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Eror');
  }
});

module.exports = router;
