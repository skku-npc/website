const express = require('express');
const router = new express.Router();
const {
  getMembers,
  getMemberProfile,
  getPendingMembers,
  deleteMember,
  allowPendingMember,
  refusePendingMember,
} = require('./member');
const { auth, admin } = require('../../middleware/auth');

router.get('/member', getMembers);
router.get('/member/pending', [auth, admin], getPendingMembers);
router.patch('/member/accept/:memberId', [auth, admin], allowPendingMember);
router.patch('/member/refuse/:memberId', [auth, admin], refusePendingMember);
router.get('/member/:memberId', getMemberProfile);
router.delete('/member/:memberId', [auth, admin], deleteMember);

module.exports = router;
