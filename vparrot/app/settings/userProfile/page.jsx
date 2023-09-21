// 'use client'
// import React, { useState } from "react";
// import Sidebar from "@/app/Components/Sidebar";
// import AddUserForm from "@/app/Components/AddUserForm";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// const AddUser = () => {

//   const router = useRouter();
//   const { data: session } = useSession();

//   if (!session || session.user.role !== "ADMIN") {
//     router.push("/accessDenied");
//     return null;
//   }

//   return (
//     <>
//       khong co gi
//     </>
//   );
// };

// export default AddUser;
import React from 'react'

export default function ezf() {
  return (
    <div>ezf</div>
  )
}
