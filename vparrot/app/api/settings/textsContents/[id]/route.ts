import prisma from '@/app/utils/db';
import { NextResponse, NextRequest } from "next/server";


export const GET = async (request: NextRequest): Promise<NextResponse> => {
  const slug = request.url.split("textsContents/")[1];
  try {
    const content = await prisma.textContent.findFirst({
      where: {
        slug: slug,
      },
    });

    if (!content) {
      return new NextResponse(
        JSON.stringify({ message: "Contenu non trouvé" }),
        { status: 404 },
      );
    }

    return new NextResponse(JSON.stringify(content), { status: 200 });
  } catch (err) {
    console.error("Erreur lors de la récupération du contenu:", err);
    return new NextResponse(
      JSON.stringify({ message: "Erreur lors de la récupération du contenu" }),
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const body = await request.json();
    console.log("Request body:", body);

    if (typeof body.id !== "number") {
      return new NextResponse(
        JSON.stringify({ message: "ID invalide fourni" }),
        { status: 400 },
      );
    }

    const updateQuery = {
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    };

    console.log(
      "Requête de mise à jour Prisma:",
      JSON.stringify(updateQuery, null, 2),
    );

    const updatedContent = await prisma.textContent.update(updateQuery);

    await prisma.$disconnect(); // Déconnexion de Prisma après utilisation

    return new NextResponse(JSON.stringify(updatedContent), { status: 200 });
  } catch (err) {
    console.error("Erreur lors de la mise à jour du contenu:", err);
    return new NextResponse(
      JSON.stringify({ message: "Erreur lors de la mise à jour du contenu" }),
      { status: 500 },
    );
  }
};
