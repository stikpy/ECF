import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/utils/db';


export const GET = async (request: NextRequest) => {
    const id = request.url.split('openingsHours/')[1];
    try {
        const hours = await prisma.openingHours.findFirst(
            {
                where: {
                    id: parseInt(id) 
                }
            }
        );


        if (!hours) {
            return new NextResponse(JSON.stringify({ message: 'Creneau non trouvé' }), { status: 404 });
        }

        return new NextResponse(JSON.stringify(hours), { status: 200 });
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: 'Error fetching openingsHours' }), { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};


//PUT /api/openingsHours/[id]

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
            day: body.day,
            timeSlots: body.timeSlots
        }
      };
  
      console.log('Prisma Update Query:', JSON.stringify(updateQuery, null, 2));
  
      const hours = await prisma.openingHours.update(updateQuery);
  
      await prisma.$disconnect(); // Déconnexion de Prisma après utilisation
      
      return new NextResponse(JSON.stringify(hours), { status: 200 });
    } catch (err) {
        console.log('Error updating hours:', err);
        return new NextResponse(JSON.stringify({ message: 'Error updating openingHours' }), { status: 500 });
    }
  };
  
      
  export const DELETE = async (request: NextRequest) => {
      try {
          const id = parseInt(request.url.split('openingsHours/')[1]); // Obtenir l'ID à partir de l'URL
          // Delete the testimonial with the specified ID
          await prisma.openingHours .delete({
              where: {
                  id: id
              }
          });
  
          return new NextResponse(JSON.stringify({ message: 'Day deleted successfully' }), { status: 200 });
      } catch (err) {
          return new NextResponse(JSON.stringify({ message: 'Error deleting day' }), { status: 500 });
      } finally {
          await prisma.$disconnect();
      }
  };