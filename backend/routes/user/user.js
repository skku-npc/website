const prisma = require('../../lib/prisma');

async function sampleFunction(req, res) {
  const user = await prisma.user.findFirst({
    where: {
      name: 'PSLover',
    },
  });
  res.send(user);
}

module.exports = { sampleFunction };
