const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/User');

const FormStat = require('../../models/FormStat');

// @route Get api/formStats
// @desc get all fromStats
// @access Public

const sendDates = async (req, res) => {
  try {
    const { startDate } = req.query;

    console.log('start date', startDate);

    let start = new Date(startDate);
    start.setHours(0);
    start.setMinutes(0);

    let end = new Date(start);
    end.setHours(0);
    end.setMinutes(0);

    end.setDate(end.getDate() + 1);

    const findQuery = {
      sleepTime: { $gte: start, $lt: end },
    };
    console.log('start and end', start, end);

    console.log(findQuery);

    const fromStats = await FormStat.find(findQuery);
    console.log('fromStats', fromStats);
    res.json(fromStats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route Post api/form-stats
// @desc Create a post
// @access Private
const createDates = async (req, res) => {
  try {
    console.log(req.body);
    const newFormStat = new FormStat({
      //   id: req.body.id,
      sleepTime: req.body.sleepTime,
      deepSleep: req.body.deepSleep,
      lightSleep: req.body.lightSleep,
      wakeTime: req.body.wakeTime,
      sleepScore: req.body.sleepScore,
      userName: req.body.userName,
      userEmail: req.body.userEmail,
    });

    console.log('about to save', newFormStat);
    const formStat = await newFormStat.save();
    res.json(formStat);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Eror');
  }
};

module.exports = {
  sendDates,
  createDates,
};
