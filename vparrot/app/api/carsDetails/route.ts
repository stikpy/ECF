import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
        const cardetailsWithRelations = await  prisma.cardetails.findMany({
            include: {
                gearbox: true,
                carPosts: true,
                exteriorcolor: true,
                critair: true,
                emissionco2: true,
                energy: true,
                eurostandard: true,
                origin: true,
                upholstery: true,
            }
        });


        return new NextResponse(JSON.stringify(cardetailsWithRelations), { status: 200 });
    } catch (err) {
        console.error('Error fetching car details:', err);
        return new NextResponse(JSON.stringify({ message: 'Error fetching car details' }), { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};
