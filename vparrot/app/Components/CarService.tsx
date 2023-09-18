import React from "react";
import Image from "next/image";
import Link from "next/link";


type CarServiceProps = {
   
    imageUrl: string;
    title: string;
    descriptionShort: string;
    id : number;
  
};

export default function CarService({ id, imageUrl, title, descriptionShort }: CarServiceProps) {
  


 
    <CarService 
          imageUrl={imageUrl}
          title={title}
          descriptionShort={descriptionShort}  
            id={id}  
    />

    const newHref = `/service/${id}`;
  return (
    <>
    <div className="flex mx-10  gap-4 items-center justify-center  py-2">
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={200}
        priority
      />
      <div className="">
      <h3 className="flex text-center">{title}</h3>
      <p className="text-justify text-lg font-semibold text-gray-700 bg-gray-100  shadow-md p-4">
  {descriptionShort}
</p>
        
    <Link  href={newHref} className="m-6 flex btn btn-primary">
        En savoir plus
    </Link>
      </div>
    </div>
      <div className="divider m-4"></div> 
      </>
  );
}
