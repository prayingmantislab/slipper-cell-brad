const express = require('express');
const uuid = require('uuid');
const router = express.Router();
// const app = express();
const members = require('../../Members');

// Body Parser Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// Create Member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active',
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  members.push(newMember);
  res.json(members);
});

router.get('/', (req, res) => {
  res.status(200).send('success get')
});

module.exports = router;
