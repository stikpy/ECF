import { NextRequest, NextResponse } from "next/server";
import prisma from '@/app/utils/db';


export const GET = async (request: NextRequest) => {
  const id = request.url.split("testimonials/")[1];
  try {
    const testimonial = await prisma.testimonials.findFirst({
      where: {
        id: parseInt(id), // Convertir en nombre entier si nécessaire
      },
    });
    console.log("id", id);
    console.log("testimonial", testimonial);

    if (!testimonial) {
      return new NextResponse(
        JSON.stringify({ message: "Témoignage non trouvé" }),
        { status: 404 },
      );
    }

    return new NextResponse(JSON.stringify(testimonial), { status: 200 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Error fetching testimonial" }),
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
};

// POST /api/testimonials
export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    console.log("Request body:", body);

    // Utiliser les valeurs par défaut pour isValidated et status si non fournies
    const { name, date, rating, message, isValidated, status } = body;
    const isValidatedValue = isValidated !== undefined ? isValidated : false;
    const statusValue = status || "hors ligne";

    const testimonial = await prisma.testimonials.create({
      data: {
        name,
        date,
        rating,
        message,
        isValidated: isValidatedValue,
        status: statusValue,
      },
    });

    await prisma.$disconnect();

    return new NextResponse(JSON.stringify(testimonial), { status: 200 });
  } catch (err) {
    console.log("Error creating testimonial:", err);
    return new NextResponse(
      JSON.stringify({ message: "Error creating testimonial" }),
      { status: 500 },
    );
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    const body = await request.json();
    console.log("Request body:", body);

    if (typeof body.id !== "number") {
      return new NextResponse(
        JSON.stringify({ message: "Invalid ID provided" }),
        { status: 400 },
      );
    }

    const updateQuery = {
      where: {
        id: body.id,
      },
      data: {
        name: body.name,
        date: body.date,
        rating: body.rating,
        message: body.message,
        isValidated: body.isValidated,
        status: body.status,
      },
    };

    console.log("Prisma Update Query:", JSON.stringify(updateQuery, null, 2));

    const testimonial = await prisma.testimonials.update(updateQuery);

    await prisma.$disconnect(); // Déconnexion de Prisma après utilisation

    return new NextResponse(JSON.stringify(testimonial), { status: 200 });
  } catch (err) {
    console.log("Error updating testimonial:", err);
    return new NextResponse(
      JSON.stringify({ message: "Error updating testimonial" }),
      { status: 500 },
    );
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    const id = parseInt(request.url.split("testimonials/")[1]); // Obtenir l'ID à partir de l'URL
    // Delete the testimonial with the specified ID
    await prisma.testimonials.delete({
      where: {
        id: id,
      },
    });

    return new NextResponse(
      JSON.stringify({ message: "Testimonial deleted successfully" }),
      { status: 200 },
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Error deleting testimonial" }),
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
};
