'use client'
import React, { ReactNode } from 'react'; 
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

type SessionProviderProps = {
  children: ReactNode; // Définissez le type pour children
};

const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => { // Utilisez le type ici
  return (
    <NextAuthSessionProvider>
      {children}
    </NextAuthSessionProvider>
  )
}

export default SessionProvider;
