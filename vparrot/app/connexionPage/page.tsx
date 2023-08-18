import React from 'react'
import { PrismaClient } from '@prisma/client';
import CarCard from '../components/CarCard/page';
const prisma = new PrismaClient();


async function  Connexion() {
  const cars = await prisma.cars.findMany();
  return (
    <div>
      <ul>
        {cars.map((car)=>(
          <CarCard key={car.id} imageUrl={car.imageurl} description={car.description} price={car.price} slug={car.slug} />
        ))}
      </ul>
    </div>
  )
}

export default Connexion