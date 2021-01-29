const prisma = require('../lib/prisma');

async function main() {
  const student = await prisma.user.upsert({
    where: { email: 'pslover@npc.skku.edu' },
    update: {},
    create: {
      email: 'pslover@npc.skku.edu',
      password: 'iloveps',
      name: 'PSLover',
      department: 'Department of Software',
      handle: 'pslover',
      bojHandle: 'pslover',
      class: 'Basic',
      role: 'Student',
      notes: {
        create: {
          title: 'I Love PS',
          content: 'I Love NPC',
        },
      },
    },
  });
  const admin = await prisma.user.upsert({
    where: { email: 'psmaster@npc.skku.edu' },
    update: {},
    create: {
      email: 'psmaster@npc.skku.edu',
      password: 'ineedpsmore',
      name: 'PSMaster',
      department: 'Department of Software',
      handle: 'psmaster',
      bojHandle: 'psmaster',
      class: 'Advanced',
      role: 'Admin',
      notes: {
        create: [
          {
            title: 'PS is simple',
          },
          {
            title: 'right but wrong',
            content: 'wrong because wrong',
          },
        ],
      },
    },
  });
  console.log({ student, admin });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
