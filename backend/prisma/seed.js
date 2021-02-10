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
  const event1 = await prisma.event.create({
    data: {
      startDate: new Date(),
      endDate: new Date(),
      title: 'Today',
      allDay: true,
    },
  });
  const event2 = await prisma.event.create({
    data: {
      startDate: new Date(2021, 0, 22),
      endDate: new Date(2021, 1, 2),
      title: 'Some Event',
    },
  });
  const event3 = await prisma.event.create({
    data: {
      startDate: new Date(2021, 1, 15, 9),
      endDate: new Date(2021, 1, 16, 9),
      title: 'Another Event',
    },
  });
  console.log({ student, admin, event1, event2, event3 });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
