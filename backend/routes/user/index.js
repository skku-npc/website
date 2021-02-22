const express = require('express');
const multer = require('multer');
const router = new express.Router();
const {
  registerUser,
  login,
  logout,
  getUserProfile,
  patchUserProfile,
  deleteUser,
  uploadImage,
  deleteImage,
  requestResetPassword,
  resetPassword
} = require('./user');
const { auth, hash, emailValidator } = require('../../middleware/auth');

const upload = multer({
  limits: {
    fileSize: 10000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload an image'));
    }

    cb(undefined, true);
  },
});

router.post('/register', [emailValidator, hash], registerUser);
router.post('/login', emailValidator, login);
router.post('/logout', auth, logout);
router.post('/requestResetPassword', emailValidator, requestResetPassword);
router.post('/resetPassword/:passwordResetToken', resetPassword);
router.get('/profile', auth, getUserProfile);
router.patch('/profile', auth, patchUserProfile);
router.patch('/profile/upload-image', [auth, upload.single('image')], uploadImage);
router.patch('/profile/remove-image', auth, deleteImage);
router.delete('/profile', auth, deleteUser);
module.exports = router;
