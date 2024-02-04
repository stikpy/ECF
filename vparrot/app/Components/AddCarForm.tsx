/* eslint-disable react/no-unescaped-entities */
"use client";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface IFormData {
  title: string;
  description: string;
  price: string; 
  imageUrl: string;
  km: string; 
  year: string; 
}

export default function AddCarForm() {
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    try {
    
      const formattedData = {
        ...data,
        price: parseInt(data.price),
        km: parseInt(data.km),
        year: parseInt(data.year),
      };

      const response = await axios.post("/api/cars", formattedData);

      if (response.status >= 200 && response.status < 300) {
        reset();
        setIsSent(true);
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error);
      setIsSent(false);
      setErrorMessage("Erreur lors de la création de l'annonce de voiture. Veuillez réessayer.");
    }
  };

  return (
    <div className="w-1/4 h-1/4 justify-center mx-auto my-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Créer une annonce de voiture</h1>
      {isSent ? (
        <div className="text-green-500">Annonce créée avec succès.</div>
      ) : (
        <>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium">Titre</label>
            <input
              {...register("title", {
                required: "Ce champ est requis",
              })}
              type="text"
              className={`border rounded p-2 ${
                errors.title ? "border-red-500" : ""
              }`}
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Description:</label>
            <input
              {...register("description", {
                required: "Ce champ est requis",
              })}
              type="text"
              className={`border rounded p-2 ${
                errors.description ? "border-red-500" : ""
              }`}
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Prix :</label>
            <input
              {...register("price", {
                required: "Ce champ est requis",
                pattern: {
                  value: /^[0-9]*$/, 
                  message: "Veuillez entrer un prix valide.",
                },
              })}
              type="number" 
              className={`border rounded p-2 ${
                errors.price ? "border-red-500" : ""
              }`}
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">URL de l'image:</label>
            <input
              {...register("imageUrl", {
                required: "Ce champ est requis",
              })}
              type="text"
              className={`border rounded p-2 ${
                errors.imageUrl ? "border-red-500" : ""
              }`}
            />
            {errors.imageUrl && (
              <p className="text-red-500">{errors.imageUrl.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Kilométrage:</label>
            <input
              {...register("km", {
                required: "Ce champ est requis",
              })}
              type="number"
              className={`border rounded p-2 ${
                errors.km ? "border-red-500" : ""
              }`}
            />
            {errors.km && <p className="text-red-500">{errors.km.message}</p>}
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Année:</label>
            <input
              {...register("year", {
                required: "Ce champ est requis",
              })}
              type="number"
              className={`border rounded p-2 ${
                errors.year ? "border-red-500" : ""
              }`}
            />
            {errors.year && (
              <p className="text-red-500">{errors.year.message}</p>
            )}
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Créer l'annonce
          </button>
        </form>
        </>
      )}
    </div>
  );
}
