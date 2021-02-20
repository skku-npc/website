const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../../lib/prisma');

async function registerUser(req, res) {
  try {
    const isUserExist = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });

    if (isUserExist) {
      return res
        .status(404)
        .send({ error: 'The provided email is already taken' });
    }

    const user = await prisma.user.create({
      data: {
        ...req.body,
      },
      select: {
        id: true,
        email: true,
        name: true,
        department: true,
        handle: true,
        bojHandle: true,
        codeforcesHandle: true,
        githubHandle: true,
        class: true,
        role: true,
        status: true,
      },
    });
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
}

async function login(req, res) {
  try {
    if (!req.body.email) {
      return res.status(400).send({ error: 'There is no email' });
    }
    if (!req.body.password) {
      return res.status(400).send({ error: 'There is no password' });
    }

    const user = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (isMatch) {
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '12h',
      });
      const userWithToken = await prisma.user.update({
        where: { email: req.body.email },
        data: { token: token },
        select: {
          id: true,
          email: true,
          name: true,
          department: true,
          handle: true,
          bojHandle: true,
          codeforcesHandle: true,
          githubHandle: true,
          class: true,
          role: true,
          status: true,
          token: true,
        },
      });
      res.status(200).send(userWithToken);
    } else {
      throw new Error('Unable to login');
    }
  } catch (e) {
    res.status(401).send(e);
  }
}

async function logout(req, res) {
  try {
    await prisma.user.update({
      where: { token: req.user.token },
      data: { token: null },
    });

    res.status(204).send();
  } catch (e) {
    res.status(401).send(e);
  }
}

async function getUserProfile(req, res) {
  res.status(200).send(req.user);
}

async function patchUserProfile(req, res) {
  const updates = Object.keys(req.body);
  let isCorrectPassword;
  try {
    isCorrectPassword = await bcrypt.compare(
      req.body.originalPassword,
      req.user.password,
    );
  } catch (e) {
    return res.status(400).send();
  }
  if (!isCorrectPassword) {
    return res.status(401).send();
  }

  const index = updates.indexOf('originalPassword');
  if (index > -1) {
    updates.splice(index, 1);
  }

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

    if (updates.includes('password')) {
      req.user['password'] = await bcrypt.hash(req.user['password'], 8);
    }

    const updatedUser = await prisma.user.update({
      where: { token: req.user.token },
      data: {
        ...req.user,
      },
      select: {
        id: true,
        email: true,
        name: true,
        department: true,
        handle: true,
        bojHandle: true,
        codeforcesHandle: true,
        githubHandle: true,
        class: true,
        role: true,
        status: true,
        token: true,
      },
    });

    res.status(200).send(updatedUser);
  } catch (e) {
    res.status(400).send(e);
  }
}

async function deleteUser(req, res) {
  try {
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
  deleteUser,
};
