import './globals.css';

import type { Metadata } from 'next';

import Header from './Components/Header';
import { Inter } from 'next/font/google'
import SessionProvider from './providers';
import Footer from './Components/Footer';

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
title: 'Garage V. Parrot',
description: 'Garage V. Parrot, votre spécialiste en vente et mécanique automobile',

};

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
<html lang="fr">

  <body className={inter.className}>
  
  <header>
  <Header/>
  </header>
  <SessionProvider>
    {children}
  </SessionProvider>
  <footer className="  bottom-0  w-full">
  <Footer  />
  </footer> 
  </body>
</html>
)
}