import './globals.css';

import type { Metadata } from 'next';

import Header from './components/Header/page';
import { Inter } from 'next/font/google'
import SessionProvider from './providers';
import Footer from './components/Footer/page';

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
// Need to had the header and footer here
<html lang="en">
   {/* <Head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  </Head> */}
 
  
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