'use client'
import React, { ReactNode } from 'react'; 
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

type SessionProviderProps = {
  children: ReactNode; 
};

const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => { 
  return (
    <NextAuthSessionProvider>
      {children}
    </NextAuthSessionProvider>
  )
}

export default SessionProvider;
