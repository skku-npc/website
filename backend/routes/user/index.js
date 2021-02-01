const express = require('express');
const router = new express.Router();
const { registerUser, login, logout, getProfile } = require('./user');
const { auth, hash } = require('../../middleware/auth');

// router.get('/', sampleFunction);
router.post('/register', hash, registerUser);
router.post('/login', login);
router.post('/logout', auth, logout);
router.get('/profile', auth, getProfile);
module.exports = router;
