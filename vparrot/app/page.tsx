'use client';
import React, { useState, useEffect } from 'react';
import CarCard from './components/CarCard/page';
import TestimonialCard from './components/TestimonialCardView/page';
import Link from 'next/link';
import axios from 'axios';
import CarsFilter from './components/CarsFilter/page'; // Assurez-vous que ce composant existe et fonctionne correctement

const Home = () => {
  // Pas de prisma client ici. Utilisez une API ou getServerSideProps pour ça.

  const [filtres, setFiltres] = useState({
    prix: '',
    annee: '',
    marque: '',
  });
  const [cars, setCars] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [carResponse, testimonialResponse] = await Promise.all([
          axios.get('/api/cars'),
          axios.get('/api/testimonials'),  
        ]);
  
        setCars(carResponse.data);
        setTestimonials(testimonialResponse.data);
      } catch (error) {
        console.error('Erreur de récupération des données:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const carsFiltres = cars.filter((car) => {
    return (
      (filtres.price ? car.price <= filtres.prix : true) &&
      (filtres.annee ? car.annee >= filtres.annee : true) &&
      (filtres.marque ? car.marque.includes(filtres.marque) : true)
    );
  });


return (
<>
<main>
  
    <p className="text-center border w-3/4 mx-auto border-black-300 border-t-2">
    Bienvenue au Garage V. Parrot, le sp&eacute;cialiste automobile &agrave; Toulouse depuis 2003. Passion, expertise et engagement d&eacute;finissent notre approche unique de l&apos;automobile. Parce que chaque voiture a une histoire, chaque r&eacute;paration raconte la n&ocirc;tre.
    </p>
    {/* Car list section */}
      <CarsFilter setFiltres={setFiltres}/> 
    <section className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
    {carsFiltres && carsFiltres.length > 0 && carsFiltres.map(car => {
  console.log(car);
  return (
    <CarCard
      key={car.id}
      imageURL={car.imageURL}
      title={car.title}
      description={car.description}
      price={car.price}
      slug={car.slug}
      km={car.km}
      year={car.year}
    />
  )
})}

</section>

    {/* Testimonial list section */}
    <section className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {testimonials && testimonials.length > 0 && testimonials.map(testimonial => (
    testimonial.isValidated ? (
      <TestimonialCard
        key={testimonial.id}
        id={testimonial.id}
        name={testimonial.name}
        date={testimonial.date}
        rating={testimonial.rating}
        message={testimonial.message}
      />
    ) : null
  ))}
</section>

    {/* Add testimonial form section */}
    <section className="m-4">
      <Link className='btn' href='/testimonialAddForm' > Laisser un commantaire</Link>
    </section>


  </main>
</>
);
};

export default Home;