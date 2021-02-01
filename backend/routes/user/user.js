const { response } = require('express');
const prisma = require('../../lib/prisma');


async function sampleFunction(req, res) {
  const user = await prisma.user.findFirst({
    where: {
      name: 'PSLover',
    },
  });
  res.send(user);
}

async function signUpUser(req, res) {
  try {
    const user = await prisma.user.create({
      data: {
        ...req.body,
      },
      
    });
    res.status(201).send(user);
  } catch (e) {
    res.status(401).send(e);
    console.log(e);
  }
}

module.exports = { sampleFunction, signUpUser };
