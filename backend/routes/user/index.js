const express = require('express');
const router = new express.Router();
const { sampleFunction, signUpUser } = require('./user');

router.get('/', sampleFunction);
router.post('/', signUpUser)

module.exports = router;
