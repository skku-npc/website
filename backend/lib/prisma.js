const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  if (params.model === 'User' && params.action === 'delete') {
    try {
      const authorId = params.args.where.id;
      await prisma.note.deleteMany({
        where: {
          author: { id: parseInt(authorId) },
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
  return next(params);
});

module.exports = prisma;
