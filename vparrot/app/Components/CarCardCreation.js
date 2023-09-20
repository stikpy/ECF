"use client";

import React, { useCallback, useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import {
  Box,
  Button,
  IconButton,
 
  Tooltip,
} from "@mui/material";
import { Delete, Edit, ExpandMore, ChevronRight } from "@mui/icons-material";
import axios from "axios";

const CarAds = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    imageURL: "",
    subRows: [],
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
    try {
      const response = await axios.post("/api/cars", formData);
      console.log("Annonce de voiture créée avec succès :", response.data);
      handleCloseDialog();
      resetForm();
      fetchCarData();
    } catch (error) {
      console.error(
        "Erreur lors de la création de l'annonce de voiture :",
        error,
      );
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
        // enableEditing
        // onEditingRowSave={() => {}}
        // onEditingRowCancel={() => {}}
        // renderRowActions={({ row, table }) => (
        //   <Box sx={{ display: "flex", gap: "1rem" }}>
        //     <Tooltip arrow placement="left" title="Edit">
        //       <IconButton onClick={() => table.setEditingRow(row)}>
        //         <Edit />
        //       </IconButton>
        //     </Tooltip>
        //     <Tooltip arrow placement="right" title="Delete">
        //       <IconButton color="error" onClick={() => {}}>
        //         <Delete />
        //       </IconButton>
        //     </Tooltip>
        //   </Box>
        // )}
        
        enableExpanding
      />
    </div>
  );
};

export default CarAds;
