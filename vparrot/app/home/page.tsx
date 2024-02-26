/* eslint-disable react/no-unescaped-entities */

import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import TestimonialCard from "../Components/TestimonialCardView";
import Link from "next/link";
import axios from "axios";
import CarsFilter from "../Components/CarsFilter";
import Image from "next/image";
import ServiceData from "../Components/CarService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrismaClient } from '@prisma/client';
import { Description } from "@mui/icons-material";

interface TestimonialProps {
  id: number;
  name: string;
  date: string;
  rating: number;
  message: string;
  isValidated: boolean;
}

interface TextContent {
  slug: string;
  content: string;
}

interface ServiceDataProps {
  imageUrl: string;
  title: string;
  descriptionShort: string;
  slug: string;
  id: number;
}

const prisma = new PrismaClient();

export default async function Home() {
    const data = await getServiceData();




  


  return (
    <>
      <main>
      <section
          id="services"
          className="flex flex-col justify-center flex-grow"
        >
          <h2 className="text-center text-3xl">Voiture</h2>
            <div className="flex justify-center">
            {data.map((item) => (
            <div key={item.id}>
              <p>{item.description}</p>
            </div>
          ))}

            </div>
          
        </section>

   
      </main>
    </>
  );
}


async function getServiceData() {
    const response = await prisma.carPosts.findMany({
      where: {
        description: {
          not: null
        }
      }
    });
    // console.log(response);
    return response;
  }
  