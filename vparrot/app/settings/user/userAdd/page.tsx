import React from 'react';
import Sidebar from '@/app/Components/Sidebar';
import AddUserForm from '@/app/Components/AddUserForm';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

type Props = {};

async function UserAdd({}: Props) {
  const session = await getServerSession(authOptions);

  // Vérifiez si l'utilisateur est connecté et a le rôle d'ADMIN
  if (!session || session.user.role !== "ADMIN") {

    return (
        <div className="flex text-center mx-auto">
      <Sidebar />
      <div className="  justify-center flex mx-auto">
   <p className='  m-auto text-center font-bold' >Accés refusé</p>
      </div>
    </div>
    );
  }

  return (
    <div className="flex text-center mx-auto">
      <Sidebar />
      <div className="flex mx-auto">
        <AddUserForm />
      </div>
    </div>
  );
}

export default UserAdd;
