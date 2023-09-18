"use client";
import React, { useState, useEffect } from "react";
import CarCardView from "./Components/CarCardView";
import TestimonialCard from "./Components/TestimonialCardView";
import Link from "next/link";
import axios from "axios";
import CarsFilter from "./Components/CarsFilter";
import Image from "next/image";
import CarService from "./Components/CarService";

type TestimonialProps = {
  id: number;
  name: string;
  date: string;
  rating: number;
  message: string;
  isValidated: boolean;
};

type CarCardProps = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  km: number;
  year: number;
};

interface TextContent {
  slug: string;
  content: string;
}
type CarServiceProps = {
  imageUrl: string;
  title: string;
  descriptionShort: string;
  slug: string;
  id: number;
};


export default function Home() {
  const [filter, setFilters] = useState({
    price: "",
    year: "",
    title: "",
  });
  const [cars, setCars] = useState<CarCardProps[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialProps[]>([]);
  const [texts, setTexts] = useState<TextContent[]>([]);
  const [cardData, setCardData] = useState<CarServiceProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          carResponse,
          testimonialResponse,
          textContentResponse,
          serviceResponse,
        ] = await Promise.all([
          axios.get("/api/cars"),
          axios.get("/api/testimonials"),
          axios.get(`/api/settings/textsContents`),
          axios.get(`/api/services`),
        ]);

        setCars(carResponse.data);
        setTestimonials(testimonialResponse.data);
        setTexts(textContentResponse.data);
        setCardData(serviceResponse.data);
        setFilters({ ...filter, price: carResponse.data });
      } catch (error) {
        console.error("Erreur de récupération des données:", error);
      }
    };

    fetchData();
  }, [filter]);

  function getContentBySlug(slug: string): string {
    const content = texts.find((item: TextContent) => item.slug === slug);
    return content ? content.content : "";
  }

  function getCarDataByTitle(title: string): CarServiceProps | null {
    const card = cardData.find((item: CarServiceProps) => item.title === title);
    return card ? card : null;
  }
  const titles = ["Diagnostiques électronique", "Maintenance et Réparations Mécaniques", "Services de Carrosserie et Esthétique "];
  const descriptionShort = titles.map(title => getCarDataByTitle(title));
  
  

  const slug = "header-text";
  const content = getContentBySlug(slug);

  const filteredCars = cars.filter((car: CarCardProps) => {
    return (
      (filter.price ? car.price <= parseInt(filter.price) : true) &&
      (filter.year ? car.year >= parseInt(filter.year) : true) &&
      (filter.title ? car.title.includes(filter.title) : true)
    );
  });

  let minPrice =
    filteredCars.length > 0
      ? Math.min(...filteredCars.map((car: CarCardProps) => car.price))
      : 0;
  let maxPrice =
    filteredCars.length > 0
      ? Math.max(...filteredCars.map((car: CarCardProps) => car.price))
      : 0;

  return (
    <>
      <main>
        {/* Hero section */}
        <section>
  <div className="hero h-screen bg-[url('/images/iStock-865559764.jpg')] bg-cover bg-center">
    <div className="hero-overlay bg-opacity-50"></div>
    <div className="flex hero-content text-center text-neutral-content flex-col justify-evenly">
      <h1 className="mb-5 text-8xl no-wrap font-bold">
        Garage V. Parrot
      </h1>
      <p data-slug="header-text" className="mt-10 text-2xl sm:hidden md:block"> 
        {content}
      </p>
    </div>
  </div>
</section>


<section className="flex flex-col justify-center flex-grow">
  <h2 className="text-center text-3xl">SERVICES</h2>
  {descriptionShort.map((descriptionShort, index) => {
    return descriptionShort ? (
   <>
   
      <CarService
        key={index}
        imageUrl={descriptionShort.imageUrl}
        descriptionShort={descriptionShort.descriptionShort}
        title={descriptionShort.title}
        id={index + 1}
      />
      
</>
    ) : null;
  })}
</section>



        {/* Divider */}
        <div className="flex-grow bg-gray-300 h-[30px]"></div>

        {/* Car list section */}
        <section>
          <CarsFilter />

          <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {filteredCars.map((car: CarCardProps) => (
              <CarCardView
                key={car.id}
                id={car.id}
                imageUrl={car.imageUrl}
                title={car.title}
                description={car.description}
                price={car.price}
                km={car.km}
                year={car.year}
              />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="flex-grow bg-gray-300 h-[30px]"></div>
        {/* Testimonial list section */}
        <section className="flex flex-col justify-center flex-grow">
  <div className="flex flex-col content-center bg-cover bg-center bg-no-repeat  justify-evenly lg:flex-row  ">
    <Image
      style={{ width: "auto", height: "auto" }}
      className="rounded-lg shadow-lg " 
      src="/images/iStock-1440540891.jpg"
      alt="car"
      width={500}
      height={100}
      priority
    />
    <div className="flex flex-col sm:flex-row">
      <p className="m-6 text-lg bold self-center underline lg:block">
        Partager votre expérience:
      </p>
      <Link className="btn btn-primary  self-center" href="/testimonialAddForm" title="Formulaire de témoignage ">
        Laisser un commentaire
      </Link>
    </div>
  </div>
  <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
    {testimonials &&
      testimonials.length > 0 &&
      testimonials.map((testimonial: TestimonialProps) =>
        testimonial.isValidated ? (
          <TestimonialCard
            key={testimonial.id}
            id={testimonial.id}
            name={testimonial.name}
            date={testimonial.date}
            rating={testimonial.rating}
            message={testimonial.message}
          />
        ) : null,
      )}
  </div>
</section>


      </main>
    </>
  );
}
