// conditions générales d'utilisation
import React from 'react';

export default function Cguv() {
  return (
    <div className="container flex flex-col m-4 text-justify justify-items-start">
      <ul>
        <li>
          <h1 className="text-3xl underline font-bold">MENTIONS LÉGALES</h1>
          <p>Le site <a href="#">http://www.vparrot.online</a> est édité par :</p>
          <p><strong>Gabriel KHALDI</strong></p>
          <p>Apprenant STUDI</p>
          <p>Siège social : 78330 Fontenay le Fleury</p>
        </li>
        <li>
          <h2>Numéro SIREN</h2>
          <p>XXX XXX XXX</p>
        </li>
        <li>
          <h2>Contact</h2>
          <p>Email : gabriel.khaldi@gmail.com</p>
          <p>Téléphone : 06 63 58 21 34</p>
        </li>
        <li>
          <h2>Hébergement</h2>
          <p>Ce site est hébergé par la société XYZ, adresse, numéro SIREN.</p>
        </li>
        <li>
          <h2>Données personnelles</h2>
          <p>Les données personnelles collectées par ce site sont destinées à un usage interne. En aucun cas ces données ne seront cédées ou vendues à des tiers.</p>
        </li>
        <li>
          <h3>Litiges</h3>
          <p>
            Conformément aux dispositions des articles L 611-1 et R 612-1 et suivants du Code de la Consommation concernant le règlement amiable des litiges : Lorsque le consommateur a adressé une réclamation écrite au professionnel et qu'il n'a pas obtenu satisfaction ou de réponse dans un délai de deux mois, il peut soumettre gratuitement sa réclamation sur la plateforme de règlement en ligne des litiges.
          </p>
        </li>
      </ul>
    </div>
  );
}
