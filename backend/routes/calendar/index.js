const express = require('express');
const {
  getEvents,
  updateEventById,
  removeEventById,
  createNewEvent,
} = require('./event');
const { auth, admin } = require('../../middleware/auth');
const router = new express.Router();

router.get('/events', getEvents);
router.post('/event', [auth, admin], createNewEvent);
router.patch('/event/:eventId', [auth, admin], updateEventById);
router.delete('/event/:eventId', [auth, admin], removeEventById);

module.exports = router;
