/* eslint-disable react/no-unescaped-entities */
import SignOut from "../Components/SignOut";
import UserTableView from "../Components/UserTableView";
import TestimonialTableView from "../Components/TestimonialTableView";
import CarCardCreation from "../Components/CarCardCreation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log("sessionnn", session);
  if (session?.user?.role === "ADMIN") {
    return (
      <>
        <div className="flex justify-between m-4">
          <h1>
            Bonjour <strong>{session.user.name}</strong>,
          </h1>
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
      <>
        <h2>Vous n'êtes pas autorisé à voir cette page !</h2>
        <SignOut />
      </>
    );
  }
}
