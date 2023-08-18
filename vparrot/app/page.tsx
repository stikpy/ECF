"use client"
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar/page';
import CarCard from './components/CarCard/page'; 
import Footer from './components/Footer/page';
import TestimonialCard from './components/TestimonialCard/page';

function Home() {
  const [cars, setCars] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await fetch('/api/cars');
        if (!response.ok) throw new Error("Failed to fetch cars");
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des voitures:", error);
      }
    }
    fetchCars();
  }, []);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch('/api/testimonials');
        if (!response.ok) throw new Error("Failed to fetch testimonials");
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des témoignages:", error);
      }
    }
    fetchTestimonials();
  }, []);

  return (
    <>
      <header className='flex flex-col justify-center items-center'>
        <NavBar />
        <p className="text-center border w-3/4 mx-auto border-black-300 border-t-2">
          Bienvenue au Garage V. Parrot, le spécialiste automobile à Toulouse depuis 2021. Passion, expertise et engagement définissent notre approche unique de l'automobile. Parce que chaque voiture a une histoire, chaque réparation raconte la nôtre.
        </p>
      </header>

      <main>
        {/* Car list section */}
        <section className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {cars.map(car => (
            <CarCard 
              key={car.id} 
              imageUrl={car.imageurl} 
              description={car.description} 
              price={car.price} 
              slug={car.slug} 
            />
          ))}
        </section>    

        {/* Testimonial list section */}
        <section className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials && testimonials.length > 0 && testimonials.map(testimonial => (
            <TestimonialCard 
              key={testimonial.id}
              id={testimonial.id} 
              name={testimonial.name}
              date={testimonial.date}
              rating={testimonial.rating}
              message={testimonial.message}
            />
          ))}
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default Home;
