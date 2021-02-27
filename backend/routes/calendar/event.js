const prisma = require('../../lib/prisma');

async function getEvents(req, res) {
  const year = req.query.year ? parseInt(req.query.year) : null;
  const month = req.query.month ? parseInt(req.query.month) : null;
  try {
    let events;
    if (req.query.year !== undefined) {
      if (year < 1000 || 9999 < year) {
        return res.status(400).send({
          error: "The 'year' parameter must be a four-digit natural number.",
        });
      }
      if (req.query.month !== undefined) {
        if (month < 1 || 12 < month) {
          return res.status(400).send({
            error:
              "The 'month' parameter must be a natural number between 1 and 12.",
          });
        }
        const firstDay = new Date(year, month - 1);
        const lastDay = new Date(year, month);
        events = await prisma.event.findMany({
          where: {
            start: {
              lt: lastDay,
            },
            end: {
              gte: firstDay,
            },
          },
        });
      } else {
        const firstDay = new Date(year, 0);
        const lastDay = new Date(year + 1, 0);
        events = await prisma.event.findMany({
          where: {
            start: {
              lt: lastDay,
            },
            end: {
              gte: firstDay,
            },
          },
        });
      }
    } else {
      events = await prisma.event.findMany();
    }
    res.status(200).send(events);
  } catch (e) {
    res.status(400).send(e);
  }
}

async function createNewEvent(req, res) {
  try {
    const eventCreated = await prisma.event.create({
      data: {
        ...req.body,
        start: new Date(req.body.start),
        end: new Date(req.body.end),
      },
    });
    res.status(201).send(eventCreated);
  } catch (e) {
    res.status(400).send(e);
  }
}

async function removeEventById(req, res) {
  try {
    const eventId = parseInt(req.params.eventId);
    const eventRemoved = await prisma.event.delete({
      where: {
        id: eventId,
      },
    });
    res.status(200).send(eventRemoved);
  } catch (e) {
    res.status(400).send(e);
  }
}

async function updateEventById(req, res) {
  try {
    const eventId = parseInt(req.params.eventId);
    const eventUpdated = await prisma.event.update({
      where: {
        id: eventId,
      },
      data: req.body,
    });
    res.status(200).send(eventUpdated);
  } catch (e) {
    res.status(400).send(e);
  }
}

module.exports = {
  getEvents,
  createNewEvent,
  removeEventById,
  updateEventById,
};
