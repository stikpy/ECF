'use client';
import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios';

const CarAds = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    imageURL: '',
    // Ajoutez d'autres champs ici en fonction de votre modèle
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

  const handleSubmit = async () => {
    // Envoyez les données du formulaire au backend via une requête axios ou autre
    try {
      const response = await axios.post('/api/cars', formData); // Assurez-vous d'avoir une route pour la création d'annonces de voiture ("/api/cars" dans cet exemple)
      console.log('Annonce de voiture créée avec succès :', response.data);
      handleCloseDialog();
      // Réinitialisez les champs du formulaire ou effectuez d'autres actions nécessaires
    } catch (error) {
      console.error("Erreur lors de la création de l'annonce de voiture :", error);
    }
  };

  const fetchCarData = async () => {
    try {
      const response = await axios.get('/api/auth/profile'); // Assurez-vous d'avoir une route pour récupérer les données des voitures ("/api/cars" dans cet exemple)
      setCarData(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données des voitures :", error);
    }
  };

  useEffect(() => {
    fetchCarData();
  }, []); // Assurez-vous d'appeler fetchCarData une fois que le composant est monté

  const columns = useMemo(
    () => [
      
      {
        accessorKey: 'email',
        header: 'Email',
        size: 140,
      },
      {
        accessorKey: 'lastname',
        header: 'Nom',
        size: 140,
      },
      {
        accessorKey: 'firstname',
        header: 'Prénom',
        size: 80,
      },
      {
        accessorKey: 'role',
        header: 'Role',
        size: 80,
      },
      // Ajoutez d'autres colonnes en fonction de votre modèle
    ],
    [],
  );

  return (
    <div>
    
  
      <MaterialReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 120,
          },
        }}
        columns={columns}
        data={carData}
        editingMode="modal" //default
        enableColumnOrdering
        // enableEditing
        // onEditingRowSave={() => {}}
        // onEditingRowCancel={() => {}}
        // renderRowActions={({ row, table }) => (
        //   <Box sx={{ display: 'flex', gap: '1rem' }}>
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
        
      />
    </div>
  );
};

export default CarAds;
