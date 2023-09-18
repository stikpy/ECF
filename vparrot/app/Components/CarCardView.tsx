// CarCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type CarCardProps = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  km: number;
  year: number;
};

const CarCardView: React.FC<CarCardProps> = ({ id, imageUrl, title, description, price, km, year }) => {
  const newHref = `/cars/${id}`;

  return (
    <Link href={newHref} title="Détails de l'annonce">
      <div className="card w-full bg-base-100 shadow-xl cursor-pointer">
        <h2 className="card-title">{title}</h2>
        <Image className="card-image" src={imageUrl} alt={title} width={1200} height={800} priority />
        <p className="mx-2">{description}</p>
        <div className="card-actions flex justify-between items-center m-4">
          <p className="mb-0 underline">{price} €</p>
          <p className="mb-0 underline">{km} km</p>
          <p className="mb-0 underline">{year}</p>
          <button className="btn btn-primary">Voir la fiche</button>
        </div>
      </div>
    </Link>
  );
};

export default CarCardView;
