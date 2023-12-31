/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

type OpeningHour = {
  id: number;
  day: string;
  timeSlots: string[];
};

export default function Footer() {
  const [data, setData] = useState<OpeningHour[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<OpeningHour[]>("/api/settings/openingsHours");
        // Tri des jours de la semaine par ordre croissant (ascendant)
        response.data.sort((a, b) => a.id - b.id);
        setData(response.data);
      } catch (error) {
        console.error("Erreur de récupération des données:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="footer p-5 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Horaires d'ouverture</span>
        <div className="flex grid grid-cols-2 gap-1">
          <ul>
            {data.map((item) => (
              <li className="mr-5" key={item.id}>
                {item.day} :{" "}
                {item.timeSlots && item.timeSlots.length > 0 ? (
                  <>
                    {item.timeSlots.slice(0, 2).join(" - ")}{" "}
                    {item.timeSlots.length > 2
                      ? `/ ${item.timeSlots.slice(2).join(" - ")}`
                      : ""}
                  </>
                ) : (
                  "Fermé"
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <span className="footer-title">Contact</span>
        <ul>
          <li>
            <span className="underline">Adresse:</span> <br /> 7 impasse du levant,{" "}
            <br /> 31000 Toulouse
          </li>
          <li>
            <a href="tel:+123456789" title="Telephone du garage">
              <span className="underline">Telephone:</span>
              <br /> +33 6 23 45 67 89
            </a>
          </li>
          <li>
            <a href="mailto:contact@vparrot.online" title="Mail du garage">
              <span className="underline">E-mail:</span>
              <br /> contact@vparrot.online
            </a>
          </li>
        </ul>
      </div>

      <div>
        <span className="footer-title">Legal</span>
        <Link href="cguv" className="link link-hover" title="Conditions générales d'utilisation">
          Conditions générales d'utilisation
        </Link>

        <Link href="#" title="Gestion des cookies" className="link link-hover">
          Cookie policy
        </Link>
      </div>
    </footer>
  );
}
