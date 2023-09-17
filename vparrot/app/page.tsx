"use client";
import React, { useState, useEffect } from "react";
import CarCardView from "./Components/CarCardView";
import TestimonialCard from "./Components/TestimonialCardView";
import Link from "next/link";
import axios from "axios";
import CarsFilter from "./Components/CarsFilter";
import Image from "next/image";

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

export default function Home() {
  const [filter, setFilters] = useState({
    price: "",
    year: "",
    title: "",
  });
  const [cars, setCars] = useState<CarCardProps[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialProps[]>([]);
  const [texts, setTexts] = useState<TextContent[]>([]);
  const [cardData, setCardData] = useState<CarCardProps[]>([]);

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
          <div
            className="hero h-1/2"
            style={{ backgroundImage: "url(/images/iStock-1407084508.jpg)" }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-6xl no-wrap font-bold">
                  Garage V. Parrot
                </h1>
                <p data-slug="header-text" className="mb-5 text-2xl">
                  {content}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center flex-grow  ">
          <h2>Nos Services</h2>
          <div className="m-6">
            <div className="m-4 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
              {cardData.map((data: CarCardProps) => (
                <div
                  key={data.id}
                  className="flex flex-col items-center justify-center"
                >
                  <Image
                    className="rounded-full "
                    src={data.imageUrl}
                    width={100}
                    height={100}
                    alt={data.title}
                    priority
                  />
                  <p>{data.title}</p>
                </div>
              ))}
            </div>
          </div>
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
        <section className="flex flex-col justify-center flex-grow  ">
          <div className="flex content-center	h-[200px] bg-cover bg-center bg-no-repeat  justify-evenly">
            <Image
              style={{ width: "auto", height: "auto" }}
              className="m-6 rounded-lg shadow-lg	"
              src="/images/iStock-1440540891.jpg"
              alt="car"
              width={500}
              height={100}
              priority
            />
            <div className="flex">
              <p className="m-6 text-lg bold self-center underline	">
                Partager votre expérience:
              </p>
              <Link
                className="btn btn-primary mx-5 self-center"
                href="/testimonialAddForm"
              >
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
