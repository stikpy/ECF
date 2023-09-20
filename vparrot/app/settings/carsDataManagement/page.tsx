'use client';
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import CarCardCreation from "@/app/Components/CarCardCreation";

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
        <div className="flex flex-col w-full m-4 gap-4 align-center">
          <h2 className="text-center"> CAR DATA</h2>
          <CarCardCreation />
          
        </div>
        </div>
    </>
  );
};

export default Settings;
