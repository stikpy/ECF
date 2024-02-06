import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ['query', 'error', 'warn'],
});

interface CarData {
  title: string;
  description?: string;
  price: number;
  imageUrl?: string;
  km?: number;
  year?: number;
}

interface UpdateCarData extends CarData {
  id: number;
}



// GET /api/cars/[id]
export const GET = async (request: NextRequest): Promise<NextResponse> => {
  const id = parseInt(request.url.split("cars/")[1]);
  if (isNaN(id)) {
    return new NextResponse(JSON.stringify({ message: "ID invalide" }), { status: 400 });
  }

  try {
    const car = await prisma.carPosts.findUnique({
      where: { id },
    });
    if (!car) {
      return new NextResponse(JSON.stringify({ message: "Voiture non trouvée" }), { status: 404 });
    }
    return new NextResponse(JSON.stringify(car), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Erreur lors de la récupération de la voiture" }), { status: 500 });
  }
};



// PUT /api/cars
export const PUT = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const { id, ...data }: UpdateCarData = await request.json();
    const car = await prisma.carPosts.update({ where: { id }, data });
    return new NextResponse(JSON.stringify(car), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Erreur lors de la mise à jour de la voiture" }),
     { status: 500 });
  }
};


// DELETE /api/cars/[id]
export const DELETE = async (request: NextRequest): Promise<NextResponse> => {
  const id = parseInt(request.url.split("cars/")[1]);
  if (isNaN(id)) {
    return new NextResponse(JSON.stringify({ message: "ID invalide" }), { status: 400 });
  }

  try {
    await prisma.carPosts.delete({ where: { id } });
    return new NextResponse(JSON.stringify({ message: "Voiture supprimée avec succès" }), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Erreur lors de la suppression de la voiture" }), { status: 500 });
  }
};
