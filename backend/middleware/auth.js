const prisma = require('../lib/prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const emailValidator = (req, res, next) => {
  try {
    if (!req.body.email) {
      throw new Error('Bad Request');
    }
    if (validator.isEmail(req.body.email)) {
      next();
    } else {
      throw new Error('Bad Request');
    }
  } catch (e) {
    return res.status(400).send(e);
  }
};

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findFirst({
      where: {
        email: decoded.email.toString(),
        token: token,
      },
    });

    if (!user) {
      throw new Error('No user');
    }

    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};

const admin = (req, res, next) => {
  if (req.user.role === 'Admin') {
    next();
  } else {
    res.status(403).send({ error: 'Only the admin can access here.' });
  }
};

const hash = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
  } catch (e) {
    throw new Error('Hashing problem');
  }
  next();
};

module.exports = { auth, admin, hash, emailValidator };
