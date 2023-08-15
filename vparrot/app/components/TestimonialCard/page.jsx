export default function TestimonialCard({ name, date, rating, message, }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{message ? message : "Aucun message fourni"}</p>
        <div className="flex justify-between items-center mt-4">
          <span>{date}</span>
          <span>Rating: {rating} ⭐</span>
        </div>
      </div>
    </div>
  );
}
