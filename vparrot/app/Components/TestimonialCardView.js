"use client";
import React from 'react';



export default function TestimonialCard({ name, date, rating, message, id }) {
 const openModal = () => {
    const modal = document.getElementById(`${id}`);
    if (modal) {
      modal.showModal();
    }
  };

  const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <>
      <div className="card w-full  max-w-xl mx-auto bg-base-100 shadow-xl cursor-pointer">
        <div className='m-3'>
          <h2 className="card-title">{name}</h2>
          <p className="clamp-2 flex-grow">{message ? message : "Aucun message fourni"}</p>
          <div className="flex justify-between items-center mb-1">
            <span>{formattedDate}</span>
            <span>Note : {rating} ⭐</span>
          <button onClick={openModal} className="hidden lg:block text-end text-blue-500 hover:underline ">Lire la suite</button>
          </div>
        </div>
      </div>
      

      <dialog id={`${id}`} className="modal">
        <form method="dialog" className="modal-box">
          <h2 className="card-title">{name}</h2>
          <p>{message ? message : "Aucun message fourni"}</p>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <div className="flex justify-between items-center mt-4">
            <span>{formattedDate}</span>
            <span>Note : {rating} ⭐</span>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
