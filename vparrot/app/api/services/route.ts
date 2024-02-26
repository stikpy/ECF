import prisma from '@/app/utils/db';
import { NextRequest, NextResponse } from 'next/server';





export async function GET(request: NextRequest) {
  try {
    const services = await prisma.services.findMany();
    return new NextResponse(JSON.stringify(services), { status: 200 });
  } catch (err) {
    console.error("Error:", err);
    return new NextResponse(JSON.stringify({ message: "Erreur lors de la récupération des services" }), { status: 500 });
  }
}