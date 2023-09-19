'use client';
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";

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
          <h2> CONTENT</h2>
        </div>
 
    </>
  );
};

export default Settings;
