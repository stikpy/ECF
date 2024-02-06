/* eslint-disable react/no-unescaped-entities */
import SignOut from "../Components/SignOut";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Sidebar from "../Components/Sidebar";


export default async function Page() {

  const session = await getServerSession(authOptions);
  console.log("session", session);
  if (session?.user?.role === "ADMIN" || session?.user?.role === "USER") {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-8">
          <h1 className="text-2xl font-bold mb-4">Paramètres</h1>
          {session ? (
            <div className="bg-white p-4 rounded shadow">
              <p className="text-lg mb-2">
                Bienvenue, <strong>{session.user.name}</strong> !
              </p>
              <p className="text-sm text-gray-600">
                Vous êtes connecté en tant que{" "}
                <strong>{session?.user?.role === "ADMIN" ? "Administrateur" : "Utilisateur"}</strong>.
              </p>
              {session?.user?.role === "ADMIN" ? (
                <p className="text-sm text-green-600">
                  En tant qu'administrateur, vous avez accès à toutes les fonctionnalités du site et vous pouvez gérer les paramètres.
                </p>
              ) : (
                <p className="text-sm text-red-600">
                  En tant qu'utilisateur, certaines fonctionnalités vous sont limitées.
                </p>
              )}
            </div>
          ) : (
            <p className="text-lg text-gray-600">Vous n'êtes pas connecté.</p>
          )}
        </div>
      </div>
    ) } else {

    return (
      <>
        <h2>Vous n'êtes pas autorisé à voir cette page !</h2>
        <SignOut />
      </>
    );
  }
}