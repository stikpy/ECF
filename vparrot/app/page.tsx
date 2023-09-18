/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import CarCardView from "./Components/CarCardView";
import TestimonialCard from "./Components/TestimonialCardView";
import Link from "next/link";
import axios from "axios";
import CarsFilter from "./Components/CarsFilter";
import Image from "next/image";
import ServiceData from "./Components/CarService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

type ServiceDataProps = {
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
  const [servicesData, setservicesData] = useState<ServiceDataProps[]>([]);

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
        setservicesData(serviceResponse.data);
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

  function getCarDataByTitle(title: string): ServiceDataProps | null {
    const card = servicesData.find((item: ServiceDataProps) => item.title === title);
    return card ? card : null;
  }
  const titles = [
    "Diagnostiques électronique",
    "Maintenance et Réparations Mécaniques",
    "Services de Carrosserie et Esthétique ",
  ];
  const descriptionShort = titles.map((title) => getCarDataByTitle(title));

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

      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true
            }
          },
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      

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
              <p
                data-slug="header-text"
                className="mt-10 text-2xl sm:hidden md:block"
              >
                {content}
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="flex flex-col justify-center flex-grow">
          <h2 className="text-center text-3xl">SERVICES</h2>
          {descriptionShort.map((descriptionShort: ServiceDataProps | null) => {
  return descriptionShort ? (
    <>
      <ServiceData
        key={descriptionShort.id}
        imageUrl={descriptionShort.imageUrl}
        descriptionShort={descriptionShort.descriptionShort}
        title={descriptionShort.title}
        id={descriptionShort.id }
      />
    </>
  ) : null;
})}

        </section>

        {/* Car list section */}
        <section>
          <h2 className="text-center text-3xl" id="carsPosts">VEHICULES D'OCCASION</h2>

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

        {/* Testimonial list section */}
        <section className="flex flex-col justify-center flex-grow" id="testimonials">
          <div className="flex flex-col bg-cover bg-center bg-no-repeat justify-evenly alignItems-center lg:flex-row">
            <Image
              className="rounded-lg shadow-lg m-4"
              src="/images/iStock-1440540891.jpg"
              alt="car"
              width={500}
              height={100}
              priority
            />
            <div className="flex flex-row sm:flex-col m-4">
              <p className="text-lg font-bold self-center mb-20 underline">
                Partager votre expérience:
              </p>
              <Link
                className="btn btn-primary self-center mt-4 sm:mt-0"
                href="/testimonialAddForm"
                title="Formulaire de témoignage"
              >
                Laisser un commentaire
              </Link>
            </div>
          </div>
          <div className="">
            <Slider {...settings}>
              {testimonials &&
                testimonials.length > 0 &&
                testimonials.map((testimonial: TestimonialProps) =>
                  testimonial.isValidated ? (
                    <div key={testimonial.id} className="m-4">
                      <TestimonialCard
                        id={testimonial.id}
                        name={testimonial.name}
                        date={testimonial.date}
                        rating={testimonial.rating}
                        message={testimonial.message}
                      />
                    </div>
                  ) : null,
                )}
            </Slider>
          </div>
        </section>
      </main>
    </>
  );
}
