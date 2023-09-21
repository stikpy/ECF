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

const UserTableView = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    imageURL: '',
    
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



  const fetchCarData = async () => {
    try {
      const response = await axios.get('/api/auth/profile'); 
      setCarData(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données des voitures :", error);
    }
  };

  useEffect(() => {
    fetchCarData();
  }, []); 

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

export default UserTableView;
