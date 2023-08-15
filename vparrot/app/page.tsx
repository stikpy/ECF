"use client";
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar/page';
import cardCarsData from './cardCarsData';
import CarCard from './components/CarCard/page'; 
import Footer from './components/Footer/page'
import TestimonialCard from './components/TestimonialCard/page'
import testimonialData from './testimonialData';



function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      const carsData = cardCarsData;
      setCars(carsData);
    };
    getCars();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main >
        {/* Car list section */}
        <section className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {cars && cars.length > 0 && cars.map(card => (
            <CarCard 
            key={card.slug}
            imageUrl={card.imageUrl} 
            title={card.title} 
            description={card.description} 
            price={card.price}
            slug={card.slug}
            />
            ))}
        </section>    
        {/* Testimonial list section */}
        <section className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonialData && testimonialData.length > 0 && testimonialData.map(testimonial => (
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
  )
}

export default Home;
