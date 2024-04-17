import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
    try {
        const body = await request.json();
        const { title, contained, } = body.data;


        try {
            const newPost = await prisma.post.create({
                data: {
                    title, contained,
                }
            });
            return NextResponse.json({newPost});
        } catch(error) { return NextResponse.json(error)}





        } catch (error) {
            console.error('Une erreur s\'est produite lors de la création du post dans la base de données :', error);
            return NextResponse.json({ success: false, error: 'Une erreur s\'est produite lors de la création du post dans la base de données.' });
        }
}
