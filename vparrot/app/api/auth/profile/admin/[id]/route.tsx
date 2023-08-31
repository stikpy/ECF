import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async (request: NextRequest) => {
    const id = request.url.split('admin/')[1];
    try {
        const user = await prisma.users.findFirst(
            {
                where: {
                    id: parseInt(id) // Convertir en nombre entier si nécessaire
                }
            }
        );
        console.log('id', id);
        console.log('utilisateur', user);

        if (!user) {
            return new NextResponse(JSON.stringify({ message: 'Utilisateur non trouvé' }), { status: 404 });
        }

        return new NextResponse(JSON.stringify(user), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Error fetching User' }), { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};

export const POST = async (request: NextRequest) => {
    
    try {
        const body = await request.json();
        const user = await prisma.users.create({
            data: {
                
            }
        });

        return new NextResponse(JSON.stringify(user), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Error updating User' }), { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}