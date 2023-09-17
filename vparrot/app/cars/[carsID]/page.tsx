"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ContactMailIcon from '@mui/icons-material/ContactMail';

type CarPropsType = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  km: number;
  year: number;
};

export default function CarDetail() {
  const pathname = usePathname();
  const id = pathname.trim().split("/cars/")[1];
  const [car, setCar] = useState<CarPropsType | null>(null);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const response = await axios.get(`/api/cars/${id}`);
          const data = response.data;
          setCar(data);
        } catch (error) {
          console.error("Error fetching car data:", error);
        }
      })();
    }
  }, [id]);

  if (!car) {
    return (
      <div className="flex h-screen justify-center items-center">
        <span className="loading loading-spinner loading-lg flex "></span>
      </div>
    );
  }
  return (
    <>
      <div className="bg-base-100">
        <div className="card w-full  shadow-xl cursor-pointer text-center rounded-0">
          <h1 className="card-title justify-center text-7xl m-8">
            {car.title}
          </h1>
          <div className="flex justify-center items-center ">
            <Image
              className="rounded-3xl	"
              src={car.imageUrl}
              alt={car.title}
              width={1200}
              height={800}
              priority
            />
          </div>
          <p>{car.description}</p>
          <div className="card-actions flex justify-evenly items-center mx-4  border p-2 rounded">
  <p className=" text-lg">Prix de vente: {car.price} €</p>
  <div className="divider divider-horizontal"></div>

  <p className=" text-lg">Kilometrage: {car.km} km</p>
  <div className="divider divider-horizontal"></div>

  <p className=" text-lg">Mise en circulation: {car.year}</p>
</div>

          <div className="flex justify-evenly m-4">
          <Link className="btn" href={`/contactForm?id=${car.id}`}>
            <ContactMailIcon />
           Formulaire de contact
          </Link>
          <a className="btn" href="tel:+33123456789">
            <LocalPhoneIcon />
            +33 1 23 45 67 89
          </a>
          </div>
        </div>
      </div>
    </>
  );
}
