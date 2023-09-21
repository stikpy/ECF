/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Sidebar from "../Components/Sidebar";

const AccessDenied = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col mx-auto gap-4 align-center">
          <h1 className="text-center">Accès refusé</h1>
          <p>Vous n'êtes pas autorisé à accéder à cette page.</p>
          
        </div>
      </div>
    </>
  );
};

export default AccessDenied;
