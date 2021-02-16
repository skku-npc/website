const express = require('express');
const router = new express.Router();
const {
  studyNote,
  studyNoteList,
  createStudyNote,
  updateStudyNote,
  deleteStudyNote,
} = require('./study');
const { auth, admin } = require('../../middleware/auth');

router.get('/note/:id', auth, studyNote);
router.get('/notes', auth, studyNoteList);
router.post('/note', [auth, admin], createStudyNote);
router.put('/note/:id', [auth, admin], updateStudyNote);
router.delete('/note/:id', [auth, admin], deleteStudyNote);
module.exports = router;
