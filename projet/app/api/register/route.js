import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, password } = body.data;

        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const newPost = await prisma.user.create({
                data: {
                    name, email, hashedPassword
                }
            });
            return NextResponse.json({newPost});
        } catch(error) { return NextResponse.json(error)}





    } catch (error) {
        console.error('Une erreur s\'est produite lors de la création du post dans la base de données :', error);
        return NextResponse.json({ success: false, error: 'Une erreur s\'est produite lors de la création du post dans la base de données.' });
    }
}
