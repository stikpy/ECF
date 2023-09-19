// /app/api/testimonials/[id]/route.tsx
import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const testimonial = await prisma.testimonials.findMany();
    return new NextResponse(JSON.stringify(testimonial), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Error fetching users' }), { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log("Données reçues:", data);

    if (!data.name || !data.rating || !data.message) {
      return new NextResponse(JSON.stringify({ message: 'Champs manquants ou invalides' }), { status: 400 });
    }

    const { name, date, rating, message } = data;

const parsedDate = new Date(date);

const testimonial = await prisma.testimonials.create({
  data: {
    name,
    date: parsedDate.toString() === "Invalid Date" ? new Date() : parsedDate,
    rating: Number(rating),
    message,
    isValidated: false,
    status: 'Hors ligne'
  },
});


    return new NextResponse(JSON.stringify(testimonial), { status: 201 });

  } catch (err) {
    console.error("Erreur lors de la création du témoignage:", err);
    return new NextResponse(JSON.stringify({ message: 'Erreur lors de la création du témoignage' }), { status: 500 });
  }
}