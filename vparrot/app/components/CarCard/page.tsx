import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CarCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  slug: string;
}

const CarCard: React.FC<CarCardProps> = ({ imageUrl, title, description, price, slug }) => {
  return (
    <Link href={`/cars/${slug}`} passHref>
      <div className="card w-full bg-base-100 shadow-xl cursor-pointer">
        <h2 className="card-title">{title}</h2>
        <Image className="card-image" src={imageUrl} alt={title} width={400} height={60}  />
        <p>{description}</p>
        <div className="card-actions flex justify-between items-center"> 
          <p className='mb-0 underline '>{price} €</p> 
          <button className="btn btn-primary">Voir la fiche</button>
        </div>  
      </div>
    </Link>
  );
};

export default CarCard;
