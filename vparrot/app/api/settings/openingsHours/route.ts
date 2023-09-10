import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
const hours = await prisma.openingHours.findMany()
console.log('GET', hours);

return  new NextResponse(JSON.stringify(hours), { status: 200 });
}

// Post hours


export async function POST(request: NextRequest) {
    try {
        // Utilisez request.json() pour obtenir le corps de la demande au format JSON
        const body = await request.json();

        const { day, timeSlot } = body; // Assurez-vous d'utiliser "timeSlot" si c'est le nom correct

        // Créez une nouvelle entrée d'heures d'ouverture dans la base de données
        const hours = await prisma.openingHours.create({
            data: {
                day: day,
                timeSlots: timeSlot, // Utilisez "timeSlot" ici si c'est le nom correct
            },
        });

        // Retournez la réponse JSON avec les heures d'ouverture créées
        return new NextResponse(JSON.stringify(hours), { status: 200 });
    } catch (error) {
        console.error("Une erreur s'est produite lors de la création des heures d'ouverture :", error);
        return new NextResponse("Une erreur interne du serveur s'est produite.", { status: 500 });
    }
}


