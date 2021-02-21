const { Status } = require('@prisma/client');
const prisma = require('../lib/prisma');

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {},
    create: {
      email: 'admin@gmail.com',
      password: 'master',
      name: 'admin',
      department: 'Department of Software',
      handle: 'psMaster',
      bojHandle: 'bojMaster',
      codeforcesHandle: 'codeforcesMaster',
      class: 'Advanced',
      role: 'Admin',
      status: 'ACCEPTED'
    },
  });
  const post1 = await prisma.note.create({
    data: {
      title: '1. Intro',
      content:
        '# 1. 문제 해결 전략\n문제 해결은 흔히 Problem Solving, 줄여서 PS라고 하죠. 앞으로는 PS로 칭하겠습니다.  \n(사실 PS는 CP(Competitive Programming)과 구분되지만, 저는 둘을 묶어 PS로 부르겠습니다. [참고 설명](https://namnamseo.tistory.com/entry/PS-%EC%9A%A9%EC%96%B4-%EC%A0%95%EB%A6%AC))  \n\n여러분은 PS를 하는 이유가 뭔가요? 코딩테스트? 코딩 실력 향상? 그냥 재밌어서? 사실 PS 하는데 별 이유가 필요하진 않습니다. 재밌어서 하는게 최고죠. (저도 그렇고요 ㅎㅎ) 하지만 그렇지 못한 분들도 많죠. 그런 분들께 이 스터디가 흥미의 계기가 되었으면 좋겠습니다.  \n\n이번 장은 본격적인 스터디에 앞선 동기 부여와, PS의 소개, 그리고 기본적인 개념을 익히기 위해 준비했습니다.',
      userId: 1,
      class: 1,
    },
  });
  const post2 = await prisma.note.create({
    data: {
      title: '2. Brute Force & Divide and Conquer',
      content:
        '# 2. 완전 탐색과 분할 정복\nPS를 할 때 가장 먼저 고려해야할 풀이는 문제에 주어진 그대로 "무식하게 푸는 것"입니다. 간과하기 쉬운 것이, 이 무식한 풀이로 풀리는 문제가 꽤 많은데 불구하고 많은 사람들은 쉬운 문제에 너무 어렵게 접근하곤 합니다. 오늘 다룰 알고리즘은 완전 탐색(brute-force)과 분할 정복(divide-and-conquer)입니다.\n\n## 완전 탐색 👊\nPS에서 "무식하게 푼다"라고 함은 가능한 경우의 수를 일일이 나열하면서 답은 찾는 방법을 의미합니다.\n이 알고리즘을 <b>완전 탐색(brute-force)</b>이라고 부르죠.',
      userId: 1,
      class: 2,
    },
  });
  console.log({ admin, post1, post2 });
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
  console.log({ event1, event2, event3 });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
