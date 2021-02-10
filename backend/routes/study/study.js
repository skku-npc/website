const prisma = require('../../lib/prisma');

async function studyNote(req, res) {
  try {
    const note = await prisma.note.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        author: true,
      },
    });

    if (!note) {
      res.status(404).send('Page does not exist.');
    }

    res.status(200).send(note);
  } catch (e) {
    res.status(400).send(e);
  }
}

async function studyNoteList(req, res) {
  try {
    const notes = await prisma.note.findMany({
      select: {
        id: true,
        title: true,
        author: true,
      },
    });
    res.status(200).send(notes);
  } catch (e) {
    res.status(400).send(e);
  }
}

async function createStudyNote(req, res) {
  try {
    const note = await prisma.note.create({
      data: {
        ...req.body,
        userId: req.user.id,
      },
    });
    res.status(201).send(note);
  } catch (e) {
    res.status(400).send(e);
  }
}

async function updateStudyNote(req, res) {
  try {
    const note = await prisma.note.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        ...req.body,
        modifyTime: new Date(),
      },
    });
    res.status(200).send(note);
  } catch (e) {
    res.status(400).send(e);
  }
}

async function deleteStudyNote(req, res) {
  try {
    await prisma.note.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(204).send();
  } catch (e) {
    res.status(404).send(e);
  }
}

module.exports = {
  studyNote,
  studyNoteList,
  createStudyNote,
  updateStudyNote,
  deleteStudyNote,
};
