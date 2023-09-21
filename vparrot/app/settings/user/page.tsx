import React from 'react'
import Sidebar from '@/app/Components/Sidebar'
import UserTableView from '@/app/Components/UserTableView'



type Props = {}

function User({}: Props) {
  return (
    
    <div className='flex  text-center mx-auto'>
    <Sidebar />
    <div className='flex mx-auto'>

    <UserTableView />
    </div>
    </div>
    
  )
}

export default User