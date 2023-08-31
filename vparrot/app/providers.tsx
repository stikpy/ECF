'use client'
import { SessionProvider } from "next-auth/react";

type ProvidersProps = {
  children?: React.ReactNode;
  session: any; // Assurez-vous que le type de session correspond à la définition de Session de Next.js
};

const Providers: React.FC<ProvidersProps> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default Providers;
