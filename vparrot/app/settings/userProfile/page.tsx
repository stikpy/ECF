'use client'
import React, { useState } from "react";
import Sidebar from "@/app/Components/Sidebar";
import UserTableView from "@/app/Components/UserTableView";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; 


const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  
  if (!session || session.user.role !== "ADMIN" ) {
    router.push("/accessDenied"); 
    return null; 
  }

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col mx-auto gap-4 align-center">
          <h2 className="text-center">USER MANAGEMENT</h2>
          <UserTableView />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
