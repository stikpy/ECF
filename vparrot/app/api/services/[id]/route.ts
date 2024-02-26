import { NextRequest, NextResponse } from "next/server";
import prisma from '@/app/utils/db';

// GET /api/services/[id]
export const GET = async (request: NextRequest) => {
  const id = request.url.split("services/")[1];

  try {
    const service = await prisma.services.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    if (!service) {
      return new NextResponse(JSON.stringify({ message: "Service non trouvé" }), { status: 404 });
    }
    return new NextResponse(JSON.stringify(service), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Erreur lors de la récupération du service" }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// POST /api/services
export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { title, description, price } = body;

    const service = await prisma.services.create({
      data: {
        title,
        description,
      
      },
    });

    return new NextResponse(JSON.stringify(service), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Erreur lors de la création du service" }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// PUT /api/services
export const PUT = async (request: NextRequest) => {
  try {
    const body = await request.json();

    if (typeof body.id !== "number") {
      return new NextResponse(JSON.stringify({ message: "ID invalide fourni" }), { status: 400 });
    }

    const service = await prisma.services.update({
      where: { id: body.id },
      data: {
        title: body.title,
        description: body.description,
        
      },
    });

    return new NextResponse(JSON.stringify(service), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Erreur lors de la mise à jour du service" }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// DELETE /api/services/[id]
export const DELETE = async (request: NextRequest) => {
  try {
    const id = parseInt(request.url.split("services/")[1]);
    await prisma.services.delete({
      where: {
        id: id,
      },
    });

    return new NextResponse(JSON.stringify({ message: "Service supprimé avec succès" }), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Erreur lors de la suppression du service" }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
