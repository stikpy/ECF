import prisma from '@/app/utils/db';
import { NextResponse, NextRequest } from "next/server";


export async function GET(request: NextRequest) {
    try {
        const hours = await prisma.openingHours.findMany();
        return new NextResponse(JSON.stringify(hours), { status: 200 });
    } catch (error) {
        console.error("Erreur lors de la récupération des heures :", error);
        return new NextResponse("Erreur interne du serveur", { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { day, timeSlot } = body;

        const hours = await prisma.openingHours.create({
            data: {
                day: day,
                timeSlots: timeSlot,
            },
        });

        return new NextResponse(JSON.stringify(hours), { status: 201 });
    } catch (error) {
        console.error("Une erreur s'est produite lors de la création des heures d'ouverture :", error);
        return new NextResponse("Erreur interne du serveur", { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
