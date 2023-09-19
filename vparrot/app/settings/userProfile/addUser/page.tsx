import AddUserForm from "@/app/Components/AddUserForm";
import Sidebar from "@/app/Components/Sidebar";
import React from "react";

type Props = {};

export default function AddUser({}: Props) {
  return (
   
  <>
  <div className="flex ">

  <Sidebar />
        <AddUserForm />
  </div>
     </>
    
  );
}
