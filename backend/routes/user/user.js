const { response } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../../lib/prisma');

async function registerUser(req, res) {
  try {
    const user = await prisma.user.create({
      data: {
        ...req.body,
      },
    });
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
}

async function login(req, res) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (isMatch) {
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
      const userWithToken = await prisma.user.update({
        where: { email: req.body.email },
        data: { token: token },
      });
      res.status(200).send(userWithToken);
    } else {
      throw new Error('Unable to login');
    }
  } catch (e) {
    res.status(400).send(e);
  }
}

async function logout(req, res) {
  try {
    const user = await prisma.user.update({
      where: { token: req.user.token },
      data: { token: null },
    });

    res.status(200).send(user);
  } catch (e) {
    res.status(401).send(e);
    console.log(e)
  }
}

async function getUserProfile(req, res) {
  res.status(200).send(req.user);
}

async function patchUserProfile(req, res) {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'password',
    'handle',
    'bojHandle',
    'codeforcesHandle',
    'githubHandle',
    'class',
    'role',
  ];

  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update),
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid Updates' });
  }

  try {
    updates.forEach(update => (req.user[update] = req.body[update]));

    await prisma.user.update({
      where: { token: req.user.token },
      data: {
        ...req.user,
      },
    });

    res.status(200).send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
}

// async function putProfile(req, res) {
//   try {
//     await prisma.user.update({
//       where: { token: req.user.token },
//       data: {
//         ...req.body,
//       },
//     });
//     res.status(200).send(e);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// }

async function deleteUser(req, res) {
  try {
    console.log("deleteuser " + req.user.id);
    await prisma.user.delete({
      where: {
        id: parseInt(req.user.id),
      },
    });
    res.status(204).send();
  } catch (e) {
    res.status(404).send(e);
  }
}

module.exports = {
  registerUser,
  login,
  logout,
  getUserProfile,
  patchUserProfile,
  // putProfile,
  deleteUser,
};
