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
  console.log(req);
  try {
    const { startDate } = req.query;

    console.log(startDate);

    let start = new Date(startDate);
    let end = new Date(start);
    end.setDate(end.getDate() + 1);
    console.log(start);
    console.log(end);

    const fromStats = await FormStat.find({
      sleepTime: { $gte: start, $lt: end },
    });
    console.log(fromStats);
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
