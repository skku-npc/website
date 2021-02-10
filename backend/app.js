const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/api/user', require('./routes/user/index'));
app.use('/api/calendar', require('./routes/calendar/index'));

app.use(express.static(path.join(path.resolve(), 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'build', 'index.html'));
});

module.exports = app;
