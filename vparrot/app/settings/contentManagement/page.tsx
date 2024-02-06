/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";



interface OpeningHours {
  id: number;
  day: string;
  timeSlots: string[];
  [key: string]: string | number | string[]; 
}

interface TextContent {
  content: string;
  [key: string]: string; 
}

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  descriptionShort: string;
  [key: string]: string; 
}

const Content = () => {

  
  const [openingHours, setOpeningHours] = useState<OpeningHours[]>([]);
  const [textContent, setTextContent] = useState<TextContent>({ content: "" });
  const [services, setServices] = useState<Service[]>([]);
  const { data: session } = useSession();
  const router = useRouter();
  const userRole = session?.user?.role;

  // Chargement initial des données depuis l'API
  useEffect(() => {
    const handleOpeningHoursChange = (index: number, field: string, value: string) => {
      const updatedOpeningHours = [...openingHours];
      updatedOpeningHours[index][field] = value;
      setOpeningHours(updatedOpeningHours);
    };

    const fetchOpeningHours = async () => {
      try {
        const response = await axios.get("/api/openingsHours");
        setOpeningHours(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des horaires d'ouverture : ", error);
      }
    };

    const fetchServices = async () => {
      try {
        const response = await axios.get<Service[]>("/api/services");
        setServices(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des services : ", error);
      }
    };

    fetchOpeningHours();
    fetchServices();
  }, [openingHours, services]);

  // Gestionnaires d'événements pour la modification des données

  const handleOpeningHoursChange = (index: number, field: string, value: string) => {
    const updatedOpeningHours = [...openingHours];
    updatedOpeningHours[index][field] = value;
    setOpeningHours(updatedOpeningHours);
  };

  const handleTextContentChange = (field: string, value: string) => {
    const updatedTextContent = { ...textContent };
    updatedTextContent[field] = value;
    setTextContent(updatedTextContent);
  };

  const handleServicesChange = (index: number, field: string, value: string) => {
    const updatedServices = [...services];
    updatedServices[index][field] = value;
    setServices(updatedServices);
  };

  const saveChanges = async () => {
    try {
      // Envoyer les modifications au backend via des appels API (à implémenter)
      await axios.put("/api/openingsHours", openingHours);
      await axios.put("/api/textContent", textContent);
      await axios.put("/api/services", services);
      // Rediriger l'utilisateur après la sauvegarde
      router.push("/admin/dashboard"); 
    } catch (error) {
      console.error("Erreur lors de la sauvegarde des modifications : ", error);
    }
  };

  if (userRole !== "ADMIN") {
    return (
      <div className="flex text-center mx-auto">
    <Sidebar />
    <div className="  justify-center flex mx-auto">
 <p className='  m-auto text-center font-bold' >Accés refusé</p>
    </div>
  </div>
  );
  }
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col mx-auto gap-4 align-center">
        <h2>Horaires d'ouverture</h2>
        <table>
          <thead>
            <tr>
              <th>Jour</th>
              <th>Heures</th>
            </tr>
          </thead>
          <tbody>
            {openingHours.map((hour, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={hour.day}
                    onChange={(e) => handleOpeningHoursChange(index, "day", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={hour.timeSlots.join(", ")}
                    onChange={(e) => handleOpeningHoursChange(index, "timeSlots", e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Contenu texte</h2>
        <textarea
          value={textContent.content}
          onChange={(e) => handleTextContentChange("content", e.target.value)}
        ></textarea>

        <h2>Services</h2>
        <table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Description</th>
              <th>Image URL</th>
              <th>Description courte</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={service.title}
                    onChange={(e) => handleServicesChange(index, "title", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={service.description}
                    onChange={(e) => handleServicesChange(index, "description", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={service.imageUrl}
                    onChange={(e) => handleServicesChange(index, "imageUrl", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={service.descriptionShort}
                    onChange={(e) => handleServicesChange(index, "descriptionShort", e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={saveChanges}>Enregistrer les modifications</button>
      </div>
    </div>
  );
};

export default Content;
