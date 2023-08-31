'use client';
import React, { useState } from 'react';

const AddTestimonialForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Envoie les données du témoignage au backend et effectue les actions nécessaires
    // Une fois le témoignage ajouté avec succès, vous pouvez réinitialiser les champs du formulaire
    setName('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button type='submit'>Valider</button>
    </form>
  );
};

export default AddTestimonialForm;
