import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function test(res) {
    const post = await prisma.post.findMany();

    res.json(post);
}
