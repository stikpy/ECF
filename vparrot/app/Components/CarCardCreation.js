"use client";

import React, { useCallback, useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import axios from "axios";
import { useSession } from "next-auth/react"


const CarAds = () => {

  const { data: session } = useSession()
  const id = parseInt(session?.user?.id);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    imageURL: "",
    subRows: [],
    userId: id || 0,
  });
  const [carData, setCarData] = useState([]);
  
  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      price: 0,
      imageURL: "",
      subRows: [],
    });
  };
  const handleSubmit = async () => {
    if (!formData.userId) {
      console.log("L'ID de l'utilisateur est manquant.");
      return; // Empêche la soumission si l'ID de l'utilisateur est manquant
    }
    
    try {
      const response = await axios.post("/api/cars", formData);
      console.log("Annonce de voiture créée avec succès :", response.data);
      handleCloseDialog();
      resetForm();
      fetchCarData();
    } catch (error) {
      console.error("Erreur lors de la création de l'annonce de voiture :", error);
    }
  };
  

  const fetchCarData = async () => {
    try {
      const response = await axios.get("/api/cars");
      setCarData(response.data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données des voitures :",
        error,
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/cars");
        setCarData(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données des voitures :",
          error,
        );
      }
    };

    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 80,
      },
      {
        accessorKey: "title",
        header: "Titre",
        size: 140,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 140,
      },
      {
        accessorKey: "price",
        header: "Prix",
        size: 80,
      },
      {
        accessorKey: "imageUrl",
        header: "Image",
        size: 80,
      }
    
    ],
    [],
  );

  return (
    <div>
      <MaterialReactTable
        getSubRows={(originalRow, index) => originalRow.subRows || undefined}
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 120,
          },
        }}
        columns={columns}
        data={carData}
        editingMode="modal"
        enableColumnOrdering
        enableExpanding
      />
    </div>
  );
};

export default CarAds;
