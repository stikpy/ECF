import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async (request: NextRequest) => {
    try {
        const car = await prisma.cars.findMany();

        return new NextResponse(JSON.stringify(car), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Error fetching car' }), { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
