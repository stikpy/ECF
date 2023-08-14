"use client";
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar/page';
import cardCarsData from './cardCarsData';
import Card from './components/Card/page'; // Assurez-vous que le chemin est correct ici.
import Footer from './components/Footer/page'

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
      <main className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {cars && cars.length > 0 && cars.map(card => (
          <Card 
            key={card.slug}
            imageUrl={card.imageUrl} 
            title={card.title} 
            description={card.description} 
            slug={card.slug}
          />
        ))}
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Home;
