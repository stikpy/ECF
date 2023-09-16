'use client';
import { useState } from 'react';
import axios from 'axios';


function CreateUserForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const userData = {
      email,
      password,
      firstname,
      lastname,
      role,
    };

    try {
      const response = await axios.post('/api/auth/profile/admin', userData);

      if (response.status === 200) {
        alert('L\'utilisateur a été créé avec succès.');

      } else {
        alert('Une erreur est survenue lors de la création de l\'utilisateur.');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email :</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />

      <label>Mot de passe :</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />

      <label>Nom :</label>
      <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} /><br />

      <label>Prenom :</label>
      <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} /><br />

      <label>Rôle :</label>
      <input type="text" value={role} onChange={(e) => setRole(e.target.value)} /><br />

      <button type="submit">{"Créer l'utilisateur"}</button>
    </form>
  );
}

export default CreateUserForm;
