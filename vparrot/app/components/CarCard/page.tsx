import React from 'react';
import Link from 'next/link';

const CarCard = ({ imageUrl, title, description, price, slug }) => {
  return (
    <Link href={`/cars/${slug}`} data-key={slug}>
      <div className="card w-full bg-base-100 shadow-xl cursor-pointer">
        <h2 className="card-title">{title}</h2>
        <img className="card-image" src={imageUrl} alt={title} />
        <p>{description}</p>
        <div className="card-actions flex justify-between items-center"> 
          <p className='mb-0 underline '>{price} €</p> 
          {/* need to pass the title into button props  */}
    

          <button className="btn btn-primary">Voir la fiche</button>
        </div>  
      </div>,
    </Link>
  );
};

export default CarCard;
