const { response } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../../lib/prisma');

async function createUser(req, res) {
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
      const token = jwt.sign({email: user.email}, process.env.JWT_SECRET);
      const userWithToken = await prisma.user.update({
        where: {email: req.body.email},
        data: { token: token}
      })
      res.status(200).send(userWithToken);
    } else {
      throw new Error('Unable to login');
    }

  } catch (e) {
    res.status(400).send(e);
  }
}

async function logout(req, res){
  try{
    const user = await prisma.user.update({
      where:{token: req.token},
      data: {token: null}
    })

    res.status(200).send(user);
  } catch(e){
    res.status(401).send(e);
    console.log(e);
  }
}

module.exports = { createUser, login, logout };
