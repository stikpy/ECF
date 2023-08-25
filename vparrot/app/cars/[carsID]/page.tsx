import React from 'react';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();


export default async function CarDetail({ params }: { params: { carsID: string } }) {

    const car = await prisma.cars.findUnique({ where: { slug: params.carsID } });
    
        if (!car) {
            return <div>Loading...</div>;
        }

  return (
    
    <>
    
      <div>
        <h1 className='text-black-500 text-base md:text-lg lg:text-6xl font-bold mt-4 mb-2'>Car Details</h1>
        <div className='flex justify-between'>
          <div>
            <img src={car.imageurl} alt={car.title} />
            <p>Car name: {car.title}</p>
            <p>Car description: {car.description}</p>
            <p>Car price: {car.price}</p>
            <p>Car slug: {car.slug}</p>
          </div>
         
            <Link href={`/contactForm?slug=${car.slug}`}>Nous contacter</Link>
        
        </div>
      </div>
     
     
    </>
  );
}
