// /app/api/testimonials/[id]/route.tsx
import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

// GET /api/testimonials


export async function GET(request: NextRequest) {
  try {
    const testimonial = await prisma.testimonials.findMany();
    
    return  new NextResponse(JSON.stringify(testimonial), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Error fetching users' }), { status: 500 });
  }
}

// POST /api/testimonial/[id]
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, date, rating, message, isValidated, status } = data;
    const testimonial = await prisma.testimonials.create({
      data: {
        name,
        date,
        message,
        rating,
        isValidated,
        status,
      },
    });
    return new NextResponse(JSON.stringify(testimonial), { status: 201 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Erreur lors de la création du témoignage' }), { status: 500 });
  }
}

// PUT /api/testimonial/[id]
export async function PUT(request: NextRequest) {
  try {
    const id = request.nextUrl.query.id as string;
    const data = await request.json();
    const { isValidated } = data;
    const newStatus = isValidated ? 'En ligne' : 'Hors ligne';
    const updatedTestimonial = await prisma.testimonials.update({
      where: { id: Number(id) },
      data: {
        isValidated,
        status: newStatus,
      },
    });
    return new NextResponse(JSON.stringify(updatedTestimonial), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Erreur lors de la mise à jour du témoignage' }), { status: 500 });
  }
}
