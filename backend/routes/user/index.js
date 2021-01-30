const express = require('express');
const router = new express.Router();
const { sampleFunction } = require('./user');

router.get('/', sampleFunction);

module.exports = router;
