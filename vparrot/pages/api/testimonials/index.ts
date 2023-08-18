// vparrot/pages/api/testimonails/index.ts

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const testimonials = await prisma.testimonial.findMany();
      res.status(200).json(testimonials);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la récupération des témoignages.' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
