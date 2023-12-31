import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

async function getUsers() {
  const users = await prisma.users.findMany();
  return users;
}

export async function GET(request: NextRequest) {
  try {
    const users = await getUsers();
    return  new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Error fetching users' }), { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log("Data reçue:", data);

    const user = await prisma.users.create({
      data: {
        email: data.email,
        firstname: data.name,
        lastname: data.lastname,
        password: data.password,
        role: data.role = "USER",
      },
    });

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    console.error("Erreur lors de la création de l'utilisateur:", err);
    return new NextResponse(JSON.stringify({ message: 'Error creating user' }), { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const data = await request.json();

    const user = await prisma.users.delete({
      where: {
        id: data.id,
      },
    });

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Error deleting user' }), { status: 500 });
  }
}