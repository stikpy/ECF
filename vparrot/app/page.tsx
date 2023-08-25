
import React, { useState, useEffect } from 'react';
import CarCard from './components/CarCard/page';
import TestimonialCard from './components/TestimonialCard/page';
import { PrismaClient } from '@prisma/client';

async function Home (){
const prisma = new PrismaClient();

const cars = await prisma.cars.findMany();
const testimonials = await prisma.testimonial.findMany();
return (
<>
<main>
    <p className="text-center border w-3/4 mx-auto border-black-300 border-t-2">
    Bienvenue au Garage V. Parrot, le spécialiste automobile à Toulouse depuis 2003. Passion, expertise et engagement définissent notre approche unique de l'automobile. Parce que chaque voiture a une histoire, chaque réparation raconte la nôtre.
    </p>
    {/* Car list section */}
    <section className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
    {cars && cars.length > 0 && cars.map(car => (
    <CarCard
    key={car.id}
    imageUrl={car.imageurl}
    description={car.description}
    price={car.price}
    slug={car.slug}
    />
    ))}
</section>

    {/* Testimonial list section */}
    <section className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {testimonials && testimonials.length > 0 && testimonials.map(testimonial => (
        <TestimonialCard
          key={testimonial.id}
          id={testimonial.id}
          name={testimonial.name}
          date={testimonial.date}
          rating={testimonial.rating}
          message={testimonial.message}
        />
      ))}
    </section>
  </main>
</>
);
};

export default Home;