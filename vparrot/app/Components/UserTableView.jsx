
"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const UserTableView = () => {
  const [userData, setUserData] = useState([]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/auth/profile');
      setUserData(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données des utilisateurs:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleDeleteUser = (userId) => {
    try {
      axios.delete(`/api/auth/profile/admin/${userId}`);
    }catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur:", error);
    }
  };

  return (
    <TableContainer component={Paper} className='h-3/4 '>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Prénom</TableCell>
            <TableCell>Rôle</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.lastname}</TableCell>
              <TableCell>{user.firstname}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Tooltip title="Delete">
                  <IconButton color="error" onClick={() => handleDeleteUser(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTableView;
