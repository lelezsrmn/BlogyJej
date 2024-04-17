import bcrypt from "bcrypt";
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();

 async function is_usr_exist(email: string): Promise<boolean>{
    const exist = await  prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if (exist) {
        return true;
    } else {
        return false;
    }
}

export async function POST(request: any) {
    const body = await request.json();
    const {name, email, password} = body.data;

    if (!name || !email || !password) {
        return new NextResponse("missing name mail or password", {status:400});
    }

    if (await is_usr_exist(email)) {
        return new NextResponse("user already exist", {status:400});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: { name, email, hashedPassword}
    })

    return NextResponse.json(user);
}