const prisma = require('../lib/prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    req.token = token;
    next();

  } catch (e) {
    res.status(401).send({
      error: 'Please authenticate',
    });
    console.log(e);
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

module.exports = { auth, hash };
