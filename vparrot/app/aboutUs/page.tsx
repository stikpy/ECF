/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function AboutUs() {
  return (
    <div className="pt-16 min-h-screen relative overflow-auto">
      <div className="absolute inset-0 bg-[url('/images/pexels-cottonbro-studio-4482037.jpg')] bg-cover bg-opacity-60 z-0"></div>

      <div className="container mx-auto p-8 z-10 relative min-h-screen bg-white bg-opacity-80 pt-32">
        <h1 className="font-bold text-5xl text-center mb-12">À propos de nous</h1>

        <section className="mb-12">
          <p className="text-xl leading-7">
            Bienvenue au Garage V. Parrot, votre partenaire de confiance à Toulouse pour tous vos besoins automobiles. Fondé en 2021 par Vincent Parrot, un professionnel du secteur avec 15 ans d'expérience, notre garage s'engage à fournir des services de réparation et d'entretien automobiles de la plus haute qualité.
          </p>
          <p className="text-xl leading-7 mt-4">
            Notre philosophie est simple : votre voiture mérite le meilleur. C'est pourquoi nous offrons une large gamme de services, y compris la réparation de carrosserie, l'entretien mécanique et même la vente de véhicules d'occasion. Chaque service que nous proposons est adapté à vos besoins spécifiques, car votre satisfaction est notre priorité absolue.
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
