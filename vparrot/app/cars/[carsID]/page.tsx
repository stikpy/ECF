'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

type CarPropsType = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  km: number;
  year: number;
};

export default function CarDetail() {
  
  const pathname = usePathname()

  const  id  = pathname.trim().split('/cars/')[1]

  const [car, setCar] = useState<CarPropsType | null>(null);

  useEffect(() => {
    if (id) {
      (async () => {
        const { data } = await axios.get(`http://localhost:3000/api/cars/${id}`);
        setCar(data);
      })();
    }
  }, [id]);

  if (!car) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <div>
        <h1 className='text-black-500 text-base md:text-lg lg:text-6xl font-bold mt-4 mb-2'>Détails de la voiture</h1>
        <div className='flex justify-between'>
          <div>
          <Image src={car.imageUrl} alt={car.title} width={600} height={600} style={{ width: 'auto', height: 'auto' }} />
            <h2>Nom de la voiture: {car.title}</h2>
            <p>Description de la voiture: {car.description}</p>
            <p>Prix de la voiture: {car.price}€</p>
          </div>
          <Link href={`/contactForm?id=${car.id}`}>Nous contacter</Link>
        </div>
      </div>
    </>
  );
}
