

// /app/api/cars/route.tsx
import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

// GET /api/cars
export async function GET(request: NextRequest) {
  console.log("GET function called");
  try {
    const cars = await prisma.carposts.findMany();
    console.log("Cars retrieved:", cars);
    return new NextResponse(JSON.stringify(cars), { status: 200 });
  } catch (err) {
    console.error("Error:", err);
    return new NextResponse(JSON.stringify({ message: "Erreur lors de la récupération des voitures" }), { status: 500 });
  }
}


// POST /api/cars
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { title, description, price, imageURL, slug } = data;
    const car = await prisma.carposts.create({
      data: {
        title,
        description,
        price,
        imageurl : imageURL,
      },
      include: { 
        users: true,
      }
    });
    return new NextResponse(JSON.stringify(car), { status: 201 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Erreur lors de la création de la voiture" }), { status: 500 });
  }
}

