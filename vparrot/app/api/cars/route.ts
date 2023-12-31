// /app/api/cars/route.tsx
import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

// GET /api/cars
export async function GET(request: NextRequest) {
  try {
    const cars = await prisma.carPosts.findMany();

    return new NextResponse(JSON.stringify(cars), { status: 200 });
  } catch (err) {
    console.error("Error:", err);
    return new NextResponse(
      JSON.stringify({ message: "Erreur lors de la récupération des voitures" }),
      { status: 500 }
    );
  }
}


// POST /api/cars
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { title, description, price, imageUrl, km, year } = data;

    // Créez une nouvelle voiture en utilisant les données de la requête
    const car = await prisma.carPosts.create({
      data: {
        title,
        description,
        price,
        imageUrl,
        km,
        year,
         // Fournissez les données de la relation users ici si elles sont disponibles
      },
    });

    return new NextResponse(JSON.stringify(car), { status: 201 });
  } catch (err) {
    console.error("Error:", err);
    return new NextResponse(
      JSON.stringify({ message: "Erreur lors de la création de la voiture" }),
      { status: 500 }
    );
  }
}

