const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();
const cors = require('cors');

//controllers: consider to change the server structure like below
const formStats = require('./routes/api/form-stats');
const aggregation = require('./aggregation');

// Connect Database
connectDB();
//Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());
// app.options('*', cors());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/stats', require('./routes/api/stats'));

app.get('/api/form-stats', formStats.sendDates);
app.post('/api/form-stats', formStats.createDates);
app.post('/api/avg', aggregation.dailyAverage);
//serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
