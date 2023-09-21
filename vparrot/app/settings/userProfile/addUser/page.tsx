'use client'
import React, { useState } from "react";
import Sidebar from "@/app/Components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AddUserForm from "@/app/Components/AddUserForm";

const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();


  

  if (!session || session.user.role !== "ADMIN") {
    router.push("/accessDenied");
    return null;
  }

  return (
    <>
      <div className="flex">
        <Sidebar />
        <AddUserForm />
      </div>
    </>
  );
};

export default AddUser;

