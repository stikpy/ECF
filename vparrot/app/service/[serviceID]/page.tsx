"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { usePathname } from "next/navigation";


type ServicePropsType = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
};

export default function ServiceDetail() {
  const pathname = usePathname();
  const id = pathname.trim().split("/service/")[1];
  const [service, setService] = useState<ServicePropsType | null>(null);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const response = await axios.get(`/api/services/${id}`);
          const data = response.data;
          console.log("data", data);
          
          setService(data);
        } catch (error) {
          console.error("Erreur lors de la récupération des données du service :", error);
        }
      })();
    }
  }, [id]);

  if (!service) {
    return (
      <div className="flex h-screen justify-center items-center">
        <span className="loading loading-spinner loading-lg flex "></span>
      </div>
    );
  }

  return (
    <>
      <div className=" flex flex-col h-full bg-base-100">
          <h1 className="card-title justify-center text-7xl m-8">
            {service.title}
          </h1>

          <div className="flex justify-center items-center mb-36 gap-10 ">
            <Image
              className="rounded-3xl m-4 "
              src={service.imageUrl}
              alt={service.title}
              width={600}
              height={800}
              priority
            />
          <p className="m-4 text-center">{service.description}</p>
          </div>
          
        </div>

    </>
  );
}
