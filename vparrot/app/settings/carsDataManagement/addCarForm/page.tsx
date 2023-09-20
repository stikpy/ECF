import React from 'react'
import AddCarForm from '@/app/Components/AddCarForm'
import Sidebar from '@/app/Components/Sidebar'

type Props = {}

function AddCar({}: Props) {
  return (
    <>
    <div className='flex  text-center mx-auto'>
    <Sidebar />
    <AddCarForm />
    </div>
    </>
  )
}

export default AddCar