
import React from 'react'
import Image from 'next/image';
import { type } from 'os';

type Props = {
  imageUrl: string;
  title: string;
  id: number;
};

export default  function ServicesCard({imageUrl, title, id} : Props) {


  return (
   <>
   <div>
    <Image src={imageUrl} width={200} height={200} alt={title} key={id} priority/>
    <h2 className='font-bold text-2xl'>{title}</h2>
   </div>
    
   </>
  )
}
