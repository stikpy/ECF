/* eslint-disable react/no-unescaped-entities */
'use client';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import bcrypt from 'bcryptjs';

interface IFormData {
  email: string;
  name: string;
  lastname: string;
  password: string;
}

export default function AddUserForm() {
  const [isSent, setIsSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // État pour afficher/masquer le mot de passe
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    console.log('form data', data);

    try {
      // Vérifiez si le mot de passe répond aux exigences
      if (!isPasswordValid(data.password)) {
        console.error('Le mot de passe ne répond pas aux exigences.');
        return;
      }

      // Vérifiez le format de l'e-mail avec une regex
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      if (!emailRegex.test(data.email)) {
        console.error('Le format de l\'e-mail est invalide.');
        return;
      }

      // Hachez le mot de passe avec bcrypt
      const hashedPassword = await bcrypt.hash(data.password, 10);

      // Créez l'objet utilisateur avec le mot de passe haché
      const user = {
        email: data.email,
        name: data.name,
        lastname: data.lastname,
        password: hashedPassword,
      };

      const response = await axios.post('/api/auth/profile/admin', user);

      if (response.status === 200) {
        reset();
        setIsSent(true);
      } else {
        console.error('Erreur lors de la création de l\'utilisateur:', response.data);
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
      // Gérez les erreurs ici, par exemple, affichez un message d'erreur
    }
  };

  // Fonction pour vérifier si le mot de passe répond aux exigences
  const isPasswordValid = (password: string) => {
    // Exigences : au moins 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    return passwordRegex.test(password);
  };

  // Fonction pour basculer l'affichage du mot de passe
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-1/4 h-1/4 justify-center  mx-auto my-auto
         p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Formulaire d'Utilisateur</h1>
      {isSent ? (
        <div className="text-green-500">Utilisateur créé avec succès.</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium">Email:</label>
            <input
              {...register('email', {
                required: 'Email is required',
              })}
              type="email"
              className={`border rounded p-2 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Prénom:</label>
            <input
              {...register('name', {
                required: 'Name is required',
              })}
              type="text"
              className={`border rounded p-2 ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Nom de famille:</label>
            <input
              {...register('lastname', {
                required: 'Lastname is required',
              })}
              type="text"
              className={`border rounded p-2 ${errors.lastname ? 'border-red-500' : ''}`}
            />
            {errors.lastname && <p className="text-red-500">{errors.lastname.message}</p>}
          </div>
          <div className="flex flex-col relative">
            <label className="text-lg font-medium">Mot de passe:</label>
            <input
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
                  message: 'Le mot de passe doit contenir au moins 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial',
                },
              })}
              type={showPassword ? 'text' : 'password'} // Afficher/masquer le mot de passe
              className={`border rounded p-2 ${errors.password ? 'border-red-500' : ''}`}
            />
            {/* Bouton pour afficher/masquer le mot de passe */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-2 right-2 text-gray-600"
            >
              {showPassword ? 'Masquer' : 'Afficher'}
            </button>
            {errors.password && (
              <p className="text-red-500">
                {errors.password.message}
                <br />
                Exemple de mot de passe valide : Abc@1234
              </p>
            )}
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Créer Utilisateur
          </button>
        </form>
      )}
    </div>
  );
}
