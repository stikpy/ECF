/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { useSession } from "next-auth/react";

const Settings = () => {

  const { data: session } = useSession();
  const userRole = session?.user?.role;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-8">
        <h1 className="text-2xl font-bold mb-4">Paramètres</h1>
        {session ? (
          <div className="bg-white p-4 rounded shadow">
            <p className="text-lg mb-2">
              Bienvenue, <strong>{session.user.name}</strong> !
            </p>
            <p className="text-sm text-gray-600">
              Vous êtes connecté en tant que{" "}
              <strong>{userRole === "ADMIN" ? "Administrateur" : "Utilisateur"}</strong>.
            </p>
            {userRole === "ADMIN" ? (
              <p className="text-sm text-green-600">
                En tant qu'administrateur, vous avez accès à toutes les fonctionnalités du site et vous pouvez gérer les paramètres.
              </p>
            ) : (
              <p className="text-sm text-red-600">
                En tant qu'utilisateur, certaines fonctionnalités vous sont limitées.
              </p>
            )}
          </div>
        ) : (
          <p className="text-lg text-gray-600">Vous n'êtes pas connecté.</p>
        )}
      </div>
    </div>
  );
};

export default Settings;

