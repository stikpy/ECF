/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  useEffect(() => {
    const scrollFunction = () => {
      const navlist = document.getElementById("navlist");
      const logo = document.getElementById("logo");

      if (
        document.body.scrollTop > 60 ||
        document.documentElement.scrollTop > 60
      ) {
        if (navlist) navlist.style.padding = "15px 10px";
        if (logo) {
          (logo.style.height = "90px"), (logo.style.width = "90px");
        }
      } else {
        if (navlist) navlist.style.padding = "30px 10px";
        if (logo) {
          (logo.style.height = "180px"), (logo.style.width = "180px");
        }
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <>
      <nav id="navlist" className=" flex justify-between navbar bg-gradient-to-r from-cyan-100 to-gray-200  top-0 w-full">

        <Link href="/">
          <Image
            id="logo"
            src="/logo.jpg"
            alt="logo"
            width={180}
            height={180}
            className="rounded-full object-cover	 ml-10  transition-all duration-300"
          />
        </Link>

        {/* Mobile display */}
        <div className="flex-none md:hidden">
          <div className="dropdown dropdown-hover dropdown-bottom dropdown-end ">
            <label tabIndex={0} className="btn m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="hover:underline underline-offset-8 drop-shadow-2xl hover:scale-110 ">
                <Link href="/">Accueil</Link>
              </li>
              <li className="hover:underline underline-offset-8 drop-shadow-2xl hover:scale-110 ">
                <Link href="/#carsPosts">Véhuicules d'occasion</Link>
              </li>
              <li className="hover:underline underline-offset-8 drop-shadow-2xl hover:scale-110 ">
                <Link href="/#testimonials">Avis</Link>
              </li>
              <li className="hover:underline underline-offset-8 drop-shadow-2xl hover:scale-110 ">
                <Link href="/#services">Services</Link>
              </li>
              <li className="hover:underline underline-offset-8 shadow-2xl hover:scale-110 ">
                <Link href="aboutUs">A propos de nous</Link>
              </li>
              <li className="hover:underline underline-offset-8 drop-shadow-2xl hover:scale-110 ">
                <Link href="connexionPage">Connexion</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop display */}
        <div className="flex justify-end gap-10 hidden px-2 mx-2 md:flex">
          <ul className="flex  gap-10 ">
            <li className="hover:underline underline-offset-8 drop-shadow-2xl hover:scale-110 ">
              <Link href="/">Accueil</Link>
            </li>
            <li className="hover:underline underline-offset-8 drop-shadow-2xl hover:scale-110 ">
              <Link href="/#carsPosts">Véhuicules d'occasion</Link>
            </li>
            <li className="hover:underline underline-offset-8 drop-shadow-2xl hover:scale-110 ">
              <Link href="/#testimonials">Avis</Link>
            </li>
            <li className="hover:underline underline-offset-8 drop-shadow-2xl hover:scale-110 ">
              <Link href="/#services">Services</Link>
            </li>
            <li className="hover:underline underline-offset-8 shadow-2xl hover:scale-110 ">
              <Link href="aboutUs">A propos de nous</Link>
            </li>
            <li className="hover:underline underline-offset-8 drop-shadow-2xl hover:scale-110 ">
              <Link href="connexionPage">Connexion</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
