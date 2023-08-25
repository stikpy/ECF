import React from 'react'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function TestView() {
    const cars = await prisma.cars.findMany();
    
    return (
        <>
        {cars.map(car => (
        <ul>
    <li key={car.id}>
      <h1>{car.title}</h1>
      <p>{car.description}</p>
      <p>{car.imageurl}</p> 
      <p>{car.price}</p>
    </li>
</ul>))}
    <div>TestView</div>

    </>

  )
}

export default TestView