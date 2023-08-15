import React from 'react';
import Link from 'next/link';

const carCard = ({ imageUrl, title, description, price, slug }) => {
  return (
    <Link href={`/cars/${slug}`}>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure><img className="w-full" src={imageUrl} alt={title} /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions flex justify-between items-center"> 
            <p className='mb-0 underline '>{price} €</p> 
            <button className="btn btn-primary">Voir la fiche</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default carCard;
