const express = require('express');

const router = express.Router();
const { sampleFunction } = require('./user');

router.get('/', sampleFunction);

module.exports = router;
