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

// @route Post api/stats
// @desc Create a post
// @access Private
router.post('/', async (req, res) => {
  try {
    const newStat = new Stat({
      id: req.body.id,
      name: req.body.name,
      time: req.body.time,
      date: req.body.date,
      light: req.body.light,
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
