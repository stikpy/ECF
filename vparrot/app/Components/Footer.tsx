/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { type } from "os";

type Props = {
  id: number;
  day: string;
  timeSlots: string[];
};

export default function Footer() {
  const [data, setData] = useState<Props[]>([]);

  // filtre les jours de la semaine 
  data.sort((a, b) => ("asc" ? a.id - b.id : b.id - a.id));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/settings/openingsHours");
        setData(response.data);
      } catch (error) {
        console.error("Erreur de récupération des données:", error);
      }
    };
    fetchData();
  }, );

  return (
    <footer className="footer p-5  bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Horaires d'ouverture</span>
        <div className="flex grid grid-cols-2 gap-1">
          {data.map((item) => (
            <p className="mr-5" key={item.id}>
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
            </p>
          ))}
        </div>
      </div>

      <div>
        <span className="footer-title">Contact</span>
        <ul >
        <li> <span className="underline">Adresse:</span> <br/> 7 impasse du levant, <br/> 78330 Fontenay le fleury</li>
        <li> <a href="tel:+123456789">  <span className="underline">Telephone:</span><br/> +33 6 23 45 67 89 </a></li>
        <li> <a href="mailto: contact@vparrot.online ">  <span className="underline">E-mail:</span><br/> contact@vparrot.online</a></li>
        </ul>
      </div>

      <div>
        <span className="footer-title">Legal</span>
        <Link href="cguv" className="link link-hover">Conditions générale d'utilisation</Link>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
}
