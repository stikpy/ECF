import Link from 'next/link';
import Image from 'next/image';


type CarCardProps = {
  id: number;
  imageurl: string;
  title: string;
  description: string;
  price: number;
  km: number;
  year: number;
};

const CarCard = ({ id, imageurl, title, description, price, km, year }: CarCardProps) => {
 

  const newHref = `/cars/${id}`;

  return (
    <Link href={newHref}>
      <div className="card w-full bg-base-100 shadow-xl cursor-pointer">
        <h2 className="card-title">{title}</h2>
        <Image className='card-image' src={imageurl} alt={title} width={1200} height={800} priority />
        <p>{description}</p>
        <div className="card-actions flex justify-between items-center">
          <p className='mb-0 underline '>{price} €</p>
          <p className='mb-0 underline '>{km} km</p>
          <p className='mb-0 underline '>{year}</p>
          <button className="btn btn-primary">Voir la fiche</button>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
