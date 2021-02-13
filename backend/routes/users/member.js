const prisma = require('../../lib/prisma');

async function getMembers(req, res) {
    try {
        const members = await prisma.$queryRaw(
            'SELECT id, email, name, bojHandle, codeforcesHandle, YEAR(createdAt) AS year FROM User;'
        );
        if (!members.length) {
            return res.status(404).send("member does not exist");
        }
        res.status(200).send(members);

    } catch(e) {
        res.status(400).send(e);
    }
}

async function getMemberProfile(req, res) {
    let memberId= Number(req.params.memberId);

    try {
        const member = await prisma.$queryRaw(
            'SELECT id, email, name, bojHandle, codeforcesHandle, YEAR(createdAt) AS year FROM User WHERE id ='+ memberId +' LIMIT 1;'
        );

        if (!member.length) {
            return res.status(404).send('member does not exist');
        }
        res.status(200).send(member[0]);

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