const express = require('express');
const router = new express.Router();
const { createUser, login, logout } = require('./user');
const { auth, hash } = require('../../middleware/auth');


// router.get('/', sampleFunction);
router.post('/', hash, createUser);
router.post('/login', login);
router.post('/logout', auth, logout);
module.exports = router;
