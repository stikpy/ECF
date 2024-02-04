/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

function Cookies() {
  return (
    <div className="h-screen flex justify-center items-center px-4 bg-gray-50">
      <div className="bg-white rounded-md p-6 shadow-lg max-w-lg mx-auto text-center">
        <p className="text-gray-700 text-lg">
          Nous utilisons des cookies strictement nécessaires pour assurer la sécurité de votre connexion et le bon fonctionnement de notre site web.
          En continuant à utiliser notre site, vous acceptez l'utilisation de ces cookies essentiels. Pour en savoir plus, consultez notre "
           <Link href="cgu" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
               politique de confidentialité  
          </Link>".
        </p>
      </div>
    </div>
  )
}

export default Cookies;
