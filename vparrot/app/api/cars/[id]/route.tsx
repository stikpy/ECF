import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async (request: NextRequest) => {
    const id = request.url.split('cars/')[1];
    try {
        const car = await prisma.cars.findFirst(
            {
                where: {
                    id: parseInt(id) // Convertir en nombre entier si nécessaire
                }
            }
        );
        console.log('id', id);
        console.log('car', car);

        if (!testimonial) {
            return new NextResponse(JSON.stringify({ message: 'Voiture non trouvé' }), { status: 404 });
        }

        return new NextResponse(JSON.stringify(car), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Error fetching car' }), { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};

// POST /api/testimonials
export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();
        console.log('Request body:', body);

        // Utiliser les valeurs par défaut pour isValidated et status si non fournies
        const { name, date, rating, message, isValidated, status } = body;
        const isValidatedValue = isValidated !== undefined ? isValidated : false;
        const statusValue = status || 'hors ligne';

        const car = await prisma.cars.create({
            data: {
              
            }
        });

        await prisma.$disconnect();

        return new NextResponse(JSON.stringify(car), { status: 200 });
    } catch (err) {
        console.log('Error creating car:', err);
        return new NextResponse(JSON.stringify({ message: 'Error creating car' }), { status: 500 });
    }
};








export const PUT = async (request: NextRequest) => {
  try {
    const body = await request.json();
    console.log('Request body:', body);

    if (typeof body.id !== 'number') {
      return new NextResponse(JSON.stringify({ message: 'Invalid ID provided' }), { status: 400 });
    }

    const updateQuery = {
      where: {
        id: body.id
      },
      data: {
        title: body.title,
        description: body.description,
        price: body.price,
        imageurl: body.image,
        km: body.km,
        year: body.year,
     
      }
    };

    console.log('Prisma Update Query:', JSON.stringify(updateQuery, null, 2));

    const car = await prisma.cars.update(updateQuery);

    await prisma.$disconnect(); // Déconnexion de Prisma après utilisation

    return new NextResponse(JSON.stringify(car), { status: 200 });
  } catch (err) {
    console.log('Error updating car:', err);
    return new NextResponse(JSON.stringify({ message: 'Error updating car' }), { status: 500 });
  }
};

    
export const DELETE = async (request: NextRequest) => {
    try {
        const id = parseInt(request.url.split('cars/')[1]); // Obtenir l'ID à partir de l'URL
        // Delete the testimonial with the specified ID
        await prisma.testimonials.delete({
            where: {
                id: id
            }
        });

        return new NextResponse(JSON.stringify({ message: 'Car deleted successfully' }), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Error deleting car' }), { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};

