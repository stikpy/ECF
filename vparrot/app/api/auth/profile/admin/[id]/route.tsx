import prisma from '@/app/utils/db';
import { NextRequest, NextResponse } from "next/server";


export const GET = async (request: NextRequest) => {
  const id = request.url.split("admin/")[1];
  try {
    const user = await prisma.users.findFirst({
      where: {
        id: parseInt(id), // Convertir en nombre entier si nécessaire
      },
    });
    console.log("id", id);
    console.log("utilisateur", user);

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

export const PUT = async (request: NextRequest) => {
  const idStr = request.url.split("admin/")[1];
  const id = parseInt(idStr, 10); // Convertir en nombre

  try {
    const data = await request.json(); // Utiliser .json() au lieu de .body

    // Vérifiez que l'ID est fourni et valide
    if (isNaN(id)) {
      return new NextResponse(
        JSON.stringify({ message: "ID invalide fourni" }),
        { status: 400 }
      );
    }

    const user = await prisma.users.update({
      where: {
        id: id, // Utiliser l'ID de l'URL
      },
      data: {
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
        role: data.role,
      },
    });

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    console.error("Erreur lors de la mise à jour de l'utilisateur:", err);
    return new NextResponse(
      JSON.stringify({
        message: "Erreur lors de la mise à jour de l'utilisateur",
      }),
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    const id = parseInt(request.url.split("admin/")[1]); // Obtenir l'ID à partir de l'URL
    // Delete the user with the specified ID
    await prisma.users.delete({
      where: {
        id: id,
      },
    });

    return new NextResponse(
      JSON.stringify({ message: "User deleted successfully" }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Error deleting user" }),
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
