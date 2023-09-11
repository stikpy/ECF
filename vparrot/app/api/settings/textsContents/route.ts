// api/settings/textContent.ts

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request: NextRequest) => {


  try {
    // Utilisez Prisma pour rechercher le contenu par slug
    const content = await prisma.textContent.findMany();

    if (!content) {
      // Si aucun contenu n'est trouvé, renvoyez une réponse 404
      return new NextResponse("Contenu non trouvé", { status: 404 });
    }

    // Renvoyez le contenu trouvé en réponse
    return new NextResponse(JSON.stringify(content), { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération du contenu :", error);
    return new NextResponse("Erreur interne du serveur", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
