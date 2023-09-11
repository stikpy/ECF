'use client';
import React, { useState, useEffect } from 'react';
import CarCard from './components/CarCardView/page';
import TestimonialCard from './components/TestimonialCardView/page';
import Link from 'next/link';
import axios from 'axios';
import CarsFilter from './components/CarsFilter/page';

export default function Home() {
  const [filtres, setFiltres] = useState({
    prix: '',
    annee: '',
    marque: '',
  });
  const [cars, setCars] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
				const slug = 'presentation-service';
        const [carResponse, testimonialResponse,textContentResponse] = await Promise.all([
          axios.get('/api/cars'),
          axios.get('/api/testimonials'),
					axios.get(`/api/settings/textsContents/${slug}`)
        ]);
       

        setCars(carResponse.data);
        setTestimonials(testimonialResponse.data);
        setTexts(textContentResponse.data);

        console.log('texts', texts);
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
console.log('texts', texts);
  return (
    <>
      <main>
      	<p data-slug='presentation-service' className="text-center border w-3/4 mx-auto border-black-300 border-t-2">
          {texts.content}
        </p>

        {/* Le reste de votre composant */}
        {/* CarsFilter */}
        <section>
          <CarsFilter setFiltres={setFiltres} />
        </section>

        {/* Car list section */}
        <section className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {carsFiltres && carsFiltres.length > 0 && carsFiltres.map((car) => (
            <CarCard
              key={car.id}
              id={car.id}
              imageurl={car.imageUrl}
              title={car.title}
              description={car.description}
              price={car.price}
              km={car.km}
              year={car.year}
            />
          ))}
        </section>

        {/* Testimonial list section */}
        <section className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials && testimonials.length > 0 && testimonials.map((testimonial) => (
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
          <Link className="btn" href="/testimonialAddForm">
            Laisser un commentaire
          </Link>
        </section>
      </main>
    </>
  );
}
