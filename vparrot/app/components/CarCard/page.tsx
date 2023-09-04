'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



const CarCard = ({ imageURL, title, description, price, slug, km, year }) => {
  console.log('imageUrl', imageURL)
  return (
  
  
    <Link href={`/cars/${slug}`} data-key={slug}>
      <div className="card w-full bg-base-100 shadow-xl cursor-pointer">
        <h2 className="card-title">{title}</h2>
        <img className="card-image" src={imageURL} alt={title} />
        <p>{description}</p>
        <div className="card-actions flex justify-between items-center"> 
          <p className='mb-0 underline '>{price} €</p> 
          <p className='mb-0 underline '>{km} km</p>
          <p className='mb-0 underline '>{year}</p>
          {/* need to pass the title into button props  */}
    
          <button className="btn btn-primary">Voir la fiche</button>
        </div>  
      </div>
    </Link>
  );
};

export default CarCard;
