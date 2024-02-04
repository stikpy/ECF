/* eslint-disable react/no-unescaped-entities */
"use client";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import bcrypt from 'bcryptjs';

interface IFormData {
  email: string;
  name: string;
  lastname: string;
  password: string;
  confirmPassword: string;
}

export default function AddUserForm() {
  const [isSent, setIsSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
   
    formState: { errors },
    setError,
    reset,
  } = useForm<IFormData>();

  const onSubmit = async (data: IFormData) => {
    setLoading(true);

    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Les mots de passe ne correspondent pas.',
      });
      setLoading(false);
      return;
    }
    

    try {
      const hashedPassword = await bcrypt.hash(data.password, 12);
      const userData = {
        email: data.email,
        name: data.name,
        lastname: data.lastname,
        password: hashedPassword,
      };
      const response = await axios.post('/api/auth/profile/admin', userData);

      if (response.status === 200) {
        setIsSent(true);
        reset();
      } else {
        console.error('Erreur lors de la création de l’utilisateur:', response.data);
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
    }

    setLoading(false);
  };

  return (
    <div className="  justify-center  my-auto mx-10 p-6 bg-white rounded-lg shadow-lg">
 <h1 className="text-2xl font-semibold mb-4">Formulaire d'Utilisateur</h1>
      {isSent ? (
        <div className="text-green-500">Utilisateur créé avec succès.</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Ce champ est requis' })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Prénom
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Ce champ est requis' })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
              Nom de famille
            </label>
            <input
              type="text"
              id="lastname"
              {...register('lastname', { required: 'Ce champ est requis' })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.lastname && <p className="text-red-500 text-xs italic">{errors.lastname.message}</p>}
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              {...register('password', { 
                required: 'Ce champ est requis',
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{12,})/,
                  message: 'Le mot de passe doit contenir au moins 12 caractères, 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial',
                }
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {showPassword ? 'Cacher' : 'Montrer'}
            </button>
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirmer le mot de passe
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              {...register('confirmPassword', { 
                required: 'Ce champ est requis',
           
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Création en cours...' : 'Créer le Compte'}
          </button>
        </form>
      )}
    </div>
  );
}
