// vparrot/pages/api/cars/index.ts

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const cars = await prisma.cars.findMany();
      res.status(200).json(cars);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la récupération des voitures.' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
