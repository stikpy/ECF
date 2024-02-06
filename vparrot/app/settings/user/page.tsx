import React from "react";
import Sidebar from "@/app/Components/Sidebar";
import UserTableView from "@/app/Components/UserTableView";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";



;

async function User() {
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
  } else  return (
    <div className="flex  text-center mx-auto">
      <Sidebar />
      <div className="flex mx-auto">
     
        <UserTableView />
      
      </div>
    </div>
  );
}

export default User;
