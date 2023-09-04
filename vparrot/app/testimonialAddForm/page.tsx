'use client';
import axios from 'axios';
import { useState } from 'react';
import { NextRequest, NextResponse } from 'next/server';


const TestimonialAddForm = () => {
  const [formData, setFormData] = useState({
    name:  '',
    date: Date.now(),
    rating: 0,
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const fullData = {
      ...formData,
      date: Date.now(),
      isValidated: false,
      status: 'Hors ligne',
      rating: Number(formData.rating), // Convertit en nombre
    };
  
    console.log("Données du formulaire envoyées:", fullData);
  
    try {
      const response = await axios.post('/api/testimonials', fullData);
      if (response.status === 201) {
        alert('Témoignage ajouté avec succès.');
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du témoignage:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Vos champs de formulaire ici */}
      <input 
        type="text" 
        placeholder="Nom" 
        value={formData.name} 
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
   
      <input
        type="number"
        placeholder="Note"
        value={formData.rating}
        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}  
      />
      <input
        type="text"
        placeholder="Commentaire"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      <button type="submit">Soumettre</button>
    </form>
  );
};

export default TestimonialAddForm;
