import React from "react";
import Image from "next/image";
import Link from "next/link";

type ServiceDataProps = {
  imageUrl: string;
  title: string;
  descriptionShort: string;
  id: number;
};

export default function ServiceData({ id, imageUrl, title,descriptionShort,}: ServiceDataProps) 
{
  <ServiceData
    imageUrl={imageUrl}
    title={title}
    descriptionShort={descriptionShort}
    id={id}
  />;

  const serviceId = `/service/${id}`;
  return (
    <>
      <div className="flex sm:m-0 md:mx-10 flex-col lg:flex-row gap-4 items-center justify-center  md:py-2">
        <Image src={imageUrl} alt={title} width={600} height={200} priority />
        <div>
          <h3 className="flex text-center">{title}</h3>
          <p className="text-justify text-lg font-semibold text-gray-700 bg-gray-100  shadow-md  p-4 md:p-4">
            {descriptionShort}
          </p>

          <Link href={serviceId} className=" m-4 btn btn-primary">
            En savoir plus
          </Link>
        </div>
      </div>
      <div className="divider "></div>
    </>
  );
}
