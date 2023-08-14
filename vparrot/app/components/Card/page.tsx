import React from 'react';
import Link from 'next/link';

const Card = ({ imageUrl, title, description, slug }) => {
  return (
    <Link href={`/cars/${slug}`}>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure><img className="w-full" src={imageUrl} alt={title} /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
