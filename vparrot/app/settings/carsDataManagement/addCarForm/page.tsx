import React from 'react'
import AddCarForm from '@/app/Components/AddCarForm'
import Sidebar from '@/app/Components/Sidebar'
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

type Props = {}

async function AddCar({}: Props) {
  const session = await getServerSession(authOptions);
  if (!session) {

    return (
        <div className="flex text-center mx-auto">
      <Sidebar />
      <div className="  justify-center flex mx-auto">
   <p className='  m-auto text-center font-bold' >Accés refusé</p>
      </div>
    </div>
    );
  } else    return (
    <>
    <div className='flex  text-center mx-auto'>
    <Sidebar />
    <AddCarForm />
    </div>
    </>
  )
}

export default AddCar