import prisma from '@/app/utils/db';
import { NextRequest, NextResponse } from "next/server";



export const GET = async (request: NextRequest) => {
  
    try {
      const user = await prisma.users.findMany();
      
      if (!user) {
        return new NextResponse(
          JSON.stringify({ message: "Utilisateur non trouvé" }),
          { status: 404 }
        );
      }
  
      return new NextResponse(JSON.stringify(user), { status: 200 });
    } catch (err) {
      return new NextResponse(
        JSON.stringify({ message: "Error fetching User" }),
        { status: 500 }
      );
    } finally {
      await prisma.$disconnect();
    }
  };