'use client';
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import TestimonialTableView from "@/app/Components/TestimonialTableView";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
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
