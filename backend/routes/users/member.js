const prisma = require('../../lib/prisma');

async function getMembers(req, res) {
    try {
        const members = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                handle: true,
                bojHandle: true,
                codeforcesHandle: true,
                createdAt: true,
            },
        });

        if (!members.length) {
            return res.status(404).send({error:'member does not exist'});
        }

        const filteredMembers = members.map(
            (user) => {
                user.createdAt = user.createdAt.getFullYear();
                return user;
            },
        );

        res.status(200).send(filteredMembers);
    } catch(e) {
        res.status(400).send(e);
    }
}

async function getMemberProfile(req, res) {
    let memberId= Number(req.params.memberId);

    try {
        const member = await prisma.user.findUnique({
            where: {
                id: memberId
            },
            select: {
                id: true,
                email: true,
                name: true,
                department: true,
                handle: true,
                bojHandle: true,
                codeforcesHandle: true,
                createdAt: true,
            },
        });

        if (!member) {
            return res.status(404).send({error:'member does not exist'});
        }

        member.createdAt = member.createdAt.getFullYear();

        res.status(200).send(member);

    } catch(e) {
        res.status(400).send(e);
    }
}

async function deleteMember(req, res) {
    let memberId= Number(req.params.memberId);

    try {
        await prisma.user.delete({
            where: {
                id: memberId,
            },
        });
        res.status(204).send();
    } catch(e) {
        res.status(400).send(e);
    }
}

module.exports = {
    getMembers,
    getMemberProfile,
    deleteMember,
};