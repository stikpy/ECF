import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /api/cars/[id]
export const GET = async (request: NextRequest) => {
    const id = request.url.split('cars/')[1];
    try {
        const car = await prisma.cars.findFirst({
            where: {
                id: parseInt(id)
            }
        });

        if (!car) {
            return new NextResponse(JSON.stringify({ message: 'Voiture non trouvée' }), { status: 404 });

        }

        return new NextResponse(JSON.stringify(car), { status: 200 });
    } catch (err) {

        return new NextResponse(JSON.stringify({ message: "Erreur lors de la récupération de la voiture" }), { status: 500 });

    } finally {
        await prisma.$disconnect();
    }
};

// POST /api/cars
export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();
        const { title, description, price, imageURL, slug } = body;

        const car = await prisma.cars.create({
            data: {
                title,
                description,
                price,
                imageURL,
                slug
            }
        });

        return new NextResponse(JSON.stringify(car), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: "Erreur lors de la création de la voiture" }), { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};

// PUT /api/cars
export const PUT = async (request: NextRequest) => {
  try {
    const body = await request.json();

    if (typeof body.id !== 'number') {
      return new NextResponse(JSON.stringify({ message: "ID invalide fourni" }), { status: 400 });

    }

    const updateQuery = {
      where: {
        id: body.id
      },
      data: {
        title: body.title,
        description: body.description,
        price: body.price,
        imageurl: body.imageurl,
        slug: body.slug
      }
    };

    const car = await prisma.cars.update(updateQuery);

    return new NextResponse(JSON.stringify(car), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Erreur lors de la mise à jour de la voiture" }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// DELETE /api/cars/[id]
export const DELETE = async (request: NextRequest) => {
    try {
        const id = parseInt(request.url.split('cars/')[1]);
        await prisma.cars.delete({
            where: {
                id: id
            }
        });


        return new NextResponse(JSON.stringify({ message: "Voiture supprimée avec succès" }), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: "Erreur lors de la suppression de la voiture" }), { status: 500 });

    } finally {
        await prisma.$disconnect();
    }
};