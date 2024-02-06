
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import TestimonialTableView from "@/app/Components/TestimonialTableView";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Settings () {
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
  } else return (
    <>
      
        {/* Contenu principal */}
        <div className="flex">
        <Sidebar /> {/* Barre latérale à l'intérieur de SettingsLayout */}
        <div className="flex flex-col  mx-auto gap-4 align-center">

          <h2 className="text-center"> Testimonials MANAGEMENT</h2>
        <TestimonialTableView />
        </div>
        </div>
    </>
  );
};

export default Settings;
