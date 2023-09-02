"use client";

import React, { useEffect, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
  Checkbox,
} from "@mui/material";

import {  CheckCircle as CheckCircleIcon} from "@mui/icons-material";
import ClearOutlinedIcon  from '@mui/icons-material/ClearOutlined';

import axios from "axios";
import router from "next/router";

export default function UserTestimonials ()  {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [pendingChanges, setPendingChanges] = useState({});

  const handleSaveRowEdits = async ({ cell, values }) => {
   
      tableData[cell.row.index][cell.column.id] = value;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/testimonials");
      setData(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des témoignages:", error);
    }
  };

  const toggleValidation = (row, isValidated) => {
    setPendingChanges({
      ...pendingChanges,
      [row.id]: { ...row, isValidated: isValidated }
    });
  };

  const handleSelectAll = () => {
    setSelectedRows(data.map((row) => row.id));
  };

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
      size: 80,
    },
    {
      accessorKey: "name",
      header: "Nom",
      size: 140,
    },
    {
      accessorKey: "date",
      header: "Date",
      Cell : ({ cell }) => <span>{new Date(cell.getValue()).toLocaleDateString()}</span>,
    },
    {
      accessorKey: "rating",
      header: "Note",
      size: 80,
    },
    { accessorKey: "message", header: "Commentaire" },
    {
      accessorKey: "isValidated",
      header: "Validé",
      Cell: ({ cell }) => <span>{cell.getValue() ? "Oui" : "Non"}</span>,
    },
    {
      accessorKey: "status",
      header: "Statut",
      Cell: ({ cell }) => (
        <span>
          {cell.row.original.isValidated ? "En ligne" : "Hors ligne"}
        </span>
      ),
    },
  ];  

  const applyChanges = async () => {
    console.log("Changements en attente avant la mise à jour:", pendingChanges);
  
    const updatePromises = Object.values(pendingChanges).map((row) => {
      const { id, isValidated, status } = row;
      return axios.put(`/api/testimonials/${id}`, { id, isValidated, status });
    });
    
  
    try {
      await Promise.all(updatePromises);
      console.log("Tous les changements ont été appliqués avec succès.");
  
      // Réinitialiser les états
      setSelectedRows([]);
      fetchData();
      setPendingChanges({}); 
      router.refresh();
      
    } catch (error) {
      console.error("Erreur lors de la mise à jour des témoignages:", error);
    }
  
    console.log("Changements en attente après la mise à jour:", pendingChanges);
  };
  
  return (
    <div>
      <h1>Liste des Témoignages</h1>
      <Button className="btn" onClick={applyChanges}>
        Appliquer les changements
      </Button>
      <MaterialReactTable
        columns={columns}
        data={data}
        positionActionsColumn="last"
        getRowId={(row) => row.id}
        muiTableProps={{
          tablelayout: "fixed",
        }}
        enableRowActions
        renderRowActions={({ row }) => (
          <Box>
  <IconButton
    onClick={() => toggleValidation(row, true)}
    style={{
      backgroundColor: pendingChanges[row.id]?.isValidated ? 'lightgrey' : 'transparent',
    }}
  >
    <CheckCircleIcon />
  </IconButton>
  <IconButton
    onClick={() => toggleValidation(row, false)}
    style={{
      backgroundColor: pendingChanges[row.id]?.isValidated === false ? 'lightgrey' : 'transparent',
    }}
  >
    <ClearOutlinedIcon />
  </IconButton>
</Box>
        )}
      />
    </div>
  );
}
