'use client';
import React, { useEffect, useState } from 'react';
import SignOut from '../components/SignOut/page';
import UserTableView from '../components/UserTableView/page';
import TestimonialTableView from '../components/TestimonialTableView/page';
import CarCardCreation from '../components/CarCardCreation/page';
import { useSession } from 'next-auth/react';

const Connexion = () => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true); // État pour le chargement

  useEffect(() => {
    console.log('Statut de la session:', status); // Ajout pour le débogage
    console.log('Session:', session); // Ajout pour le débogage
    
    if (status === 'loading') return; // Si le statut est 'loading', ne faites rien

    setIsLoading(false); // Mettre fin au chargement quand le statut change

    // Vous pouvez également mettre votre logique de rôle ici si vous le souhaitez
  }, [status]);

  if (isLoading) {
    return <h2>Chargement en cours...</h2>; // Écran de chargement
  }

  if (session?.user?.role === 'ADMIN') {
    return (
      <>
        <div className='flex justify-between m-4'>
          <h1>Bonjour <strong>{session.user.name}</strong>,</h1>
          <p>Vous êtes un administrateur, bienvenue !</p>
          <SignOut />
        </div>
        <section className="flex flex-col items-center justify-center ">
          <UserTableView />
        </section>
        <section className="flex flex-col items-center justify-center w-8/10">
          <h2>Témoignages</h2>
          <TestimonialTableView />
        </section>
        <section className="flex flex-col items-center justify-center w-8/10">
          <h2>Voitures</h2>
          <CarCardCreation />
        </section>
      </>
    );
  }

  if (session?.user?.role === 'USER') {
    return (
      <>
        <div className='flex justify-between m-4'>
          <h1>Bonjour <strong>{session.user.name}</strong>,</h1>
          <p>Vous êtes un utilisateur, bienvenue !</p>
          <SignOut />
        </div>
        <section className="flex flex-col items-center justify-center w-8/10">
          <h2>Témoignage</h2>
          <TestimonialTableView />
        </section>
      </>
    );
  }

  return <h2>Vous n'êtes pas autorisé à voir cette page !</h2>;
};


export default Connexion;