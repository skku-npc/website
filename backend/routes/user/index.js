const express = require('express');
const router = new express.Router();
const {
  registerUser,
  login,
  logout,
  getUserProfile,
  patchUserProfile,
  deleteUser,
} = require('./user');
const { auth, hash, emailValidator } = require('../../middleware/auth');

// router.get('/', sampleFunction);
router.post('/register', [emailValidator, hash], registerUser);
router.post('/login', emailValidator, login);
router.post('/logout', auth, logout);
router.get('/profile', auth, getUserProfile);
// router.put('/profile', auth, putProfile);
router.patch('/profile', auth, patchUserProfile);
router.delete('/profile', auth, deleteUser);
module.exports = router;
