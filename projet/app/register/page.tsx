import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

type User = {
    name: string;
    email: string;
    hashedPassword: string;
};

type RegisterData = {
    data: User;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { name, email, password } = await req.json<RegisterData>()?.data || {};

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Missing name, email, or password' });
        }

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: { name, email, hashedPassword },
        });

        res.status(201).json(user); // Created status code
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}