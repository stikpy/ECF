import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getAllUsers() {
  try {
    const allUsers = await prisma.users.findMany();
    console.log(allUsers);
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des utilisateurs :', error);
  } finally {
    await prisma.$disconnect(); // Assurez-vous de toujours déconnecter Prisma lorsque vous avez terminé.
  }
}

getAllUsers();
