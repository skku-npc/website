const prisma = require('../../lib/prisma');

async function getMembers(req, res) {
    try {
        let members = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                bojHandle: true,
                codeforcesHandle: true,
                createdAt: true,
            },
        });
        res.status(200).send(members);

    } catch(e) {
        res.status(400).send(e);
    }
}

async function getMemberProfile(req, res) {
    let memberId= req.params.memberId;     
    try {
        const member = await prisma.user.findUnique({
            where: {
                id: memberId,
            },
            select: {
                id: true,
                email: true,
                name: true,
                bojHandle: true,
                codeforcesHandle: true,
                createdAt: true,
            },
        });
        if (!member) {
            res.status(404).send('member does not exist');
        }

        res.status(200).send(member);
    } catch(e) {
    res.status(400).send(e);
    }
}

async function deleteMember(req, res) {
    let memberId= req.params.memberId;

    try {
        const deleteMember = await prisma.user.delete({
            where: {
                id: memberId,
            },
        });
        if (!deleteMember) {
            res.status(404).send('member does not exist');
        }
        res.status(200).send(deleteMember);
    } catch(e) {
        res.status(400).send(e);
    }
}

module.exports = {
    getMembers,
    getMemberProfile,
    deleteMember,
  };