import Link from 'next/link';


export default function Card({ imageUrl, title, description, slug }) {
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={imageUrl} alt={title} /></figure>
        <div className="card-body">
          <h2 className="card-title">
          <Link href={`/details/${slug}`}>
  <a>{title}</a>
</Link>

          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
  }
  