/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function AboutUs() {
  return (
    <div className="relative"> {/* Div parent avec position relative */}
      
      {/* Div pour l'image de fond avec positionnement absolu */}
      <div className="absolute inset-0 bg-[url('/images/pexels-cottonbro-studio-4482037.jpg')] bg-cover bg-opacity-60 z-0"></div>
      
      {/* Contenu du site avec positionnement relatif par-dessus l'image */}
      <div className="container mx-auto p-8 z-10 relative bg-white bg-opacity-80">
        
        <h1 className="font-bold text-5xl text-center mb-12">Notre histoire</h1>

        <section className="mb-12">
          <p className="text-xl leading-7">
            Le garage V. Parrot est une entreprise familiale fondée en 1980 par Vincent Parrot. Forts de plus de quatre décennies d'expérience, nous avons bâti une réputation basée sur l'excellence, l'intégrité et la satisfaction de la clientèle.
          </p>
          <p className="text-xl leading-7 mt-4">
            Nous avons adopté les dernières technologies de diagnostic et de réparation pour offrir un service rapide et fiable, garantissant ainsi votre satisfaction.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-lg leading-6">
              <h3 className="font-semibold mb-2">Réparation</h3>
              <p>
                De la réparation mineure à la plus complexe, nos mécaniciens experts utilisent des équipements de pointe pour garantir que votre voiture est réparée selon les normes les plus élevées.
              </p>
            </div>
            <div className="text-lg leading-6">
              <h3 className="font-semibold mb-2">Vente</h3>
              <p>
                Outre les services de réparation, nous proposons également une sélection de voitures d'occasion rigoureusement inspectées pour répondre à tous vos besoins et exigences.
              </p>
            </div>
            <div className="text-lg leading-6">
              <h3 className="font-semibold mb-2">Entretien</h3>
              <p>
                Nos services d'entretien préventif sont conçus pour prolonger la durée de vie de votre véhicule et prévenir les pannes futures. Du changement d'huile aux inspections complètes, nous faisons tout.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default AboutUs;
