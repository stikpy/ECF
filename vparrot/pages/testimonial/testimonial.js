import { PrismaClient } from '@prisma/client';
import testimonialData from '../../app/testimonialData.js'

const prisma = new PrismaClient();

// Add the testimonial data to the database
for (const testimonial of testimonialData) {
  await prisma.testimonial.create({
    name: testimonial.name,
    date: testimonial.date,
    rating: testimonial.rating,
    message: testimonial.message,
  });
}

