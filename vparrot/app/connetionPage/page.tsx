/* eslint-disable react/no-unescaped-entities */
import SignOut from '../components/SignOut/page';
import UserTableView from '../components/UserTableView/page';
import TestimonialTableView from '../components/TestimonialTableView/page';
import CarCardCreation from '../components/CarCardCreation/page';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import type { User } from "next-auth";

type Props = {
  user: User;
};




export default async function Page({ user }: Props) {
    const session = await getServerSession(authOptions);
    // console.log('sessionnn', session);
      if (session?.user?.role === 'ADMIN') {
    return (
      <>
        <div className='flex justify-between m-4'>
          <h1>Bonjour <strong>{session.user.name}</strong>,</h1>
          <p>Vous êtes un utilisateur, bienvenue !</p>
          <SignOut />
        </div>
        <section className="flex flex-col items-center justify-center ">
          <UserTableView />
        </section>
        <section className="flex flex-col items-center justify-center w-8/10">
          <h2>Témoignage</h2>
          <TestimonialTableView />
        </section>
        <section className="flex flex-col items-center justify-center w-8/10">
          <h2>Voitures</h2>
          <CarCardCreation />
        </section>
      </>
    );
  } else {
    // L'utilisateur n'est pas autorisé à accéder à la page
    return (
      <div>
        
        <h2>Vous n'êtes pas autorisé à voir cette page !</h2>
      </div>
    );
  }
};


