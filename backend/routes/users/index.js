const express = require('express');
const router = new express.Router();
const {
  getMembers,
  getMemberProfile,
  deleteMember,
} = require('./member');
const { auth, admin } = require('../../middleware/auth');

// getMemberProfile,
// deleteMember,

router.get('/member', getMembers);
router.get('/member/:memberId', getMemberProfile);
router.delete('/member/:memberId', [auth, admin], deleteMember);

module.exports= router;