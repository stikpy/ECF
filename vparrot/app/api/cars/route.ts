// /app/api/cars/route.tsx
import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

interface CarData {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  km: number;
  year: number;
}

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
    const data: CarData = await request.json();
    const car = await prisma.carPosts.create({
      data,
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