/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useSession } from "next-auth/react";

function UserTableView() {
  const router = useRouter()

  const [userData, setUserData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editableUser, setEditableUser] = useState({});
  const { data: session, status } = useSession();

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/auth/profile/admin");
        setUserData(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données des utilisateurs:", error);
      }
    };

    fetchUserData();
  }, [session]);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`/api/auth/profile/admin/${userId}`);
     window.location.reload()
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur:", error);
    }
  };

  const handleOpenDialog = (user) => {
    setEditableUser(user);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleEditUser = async () => {
    try {
      await axios.put(`/api/auth/profile/admin/${editableUser.id}`, editableUser);
      handleCloseDialog();
      window.location.reload(); // Actualise les données utilisateur après modification
    } catch (error) {
      console.error("Erreur lors de la modification des données de l'utilisateur:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser({ ...editableUser, [name]: value });
  };

  if (status === "loading") {
    return <div>Chargement...</div>;
  }

  const isAdmin = session?.user?.role === "ADMIN";

  return (
    <>
      <TableContainer component={Paper} className="h-3/4 ">
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
                  {isAdmin && (
                    <>
                      <Tooltip title="Edit">
                        <IconButton
                          color="primary"
                          onClick={() => handleOpenDialog(user)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          color="error"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Modifier l'utilisateur</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            name="email"
            value={editableUser.email}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Nom"
            fullWidth
            variant="outlined"
            name="lastname"
            value={editableUser.lastname}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Prénom"
            fullWidth
            variant="outlined"
            name="firstname"
            value={editableUser.firstname}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Rôle"
            fullWidth
            variant="outlined"
            name="role"
            value={editableUser.role}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Annuler</Button>
          <Button onClick={handleEditUser}>Enregistrer</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UserTableView;
