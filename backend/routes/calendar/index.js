const express = require('express');
const {
  getEvents,
  updateEventById,
  removeEventById,
  createNewEvent,
} = require('./event');
const router = new express.Router();

router.get('/events', getEvents);
router.post('/event', createNewEvent);
router.patch('/event/:eventId', updateEventById);
router.delete('/event/:eventId', removeEventById);

module.exports = router;
