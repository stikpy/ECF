import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between navbar bg-gradient-to-r from-cyan-100 to-gray-200 ">
        <Link href={"/"} >
          <Image
            src="/logo.jpg"
            alt="logo"
            width={200}
            height={200}
            className="rounded-full ml-10"
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
              <li>
                <Link href="aboutUs">A propos de nous</Link>
              </li>
              <li>
                <Link href="connexionPage">Connexion</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop display */}
        <div className="flex justify-end gap-10 hidden px-2 mx-2 md:flex">
  
            <ul className="flex  gap-10 ">
              <li className="hover:underline underline-offset-8 shadow-2xl hover:scale-110 ">
                <Link href="aboutUs">A propos de nous</Link>
              </li>
              <li className="hover:underline underline-offset-8 drop-shadow-2xl hover:scale-110 ">
                <Link href="connexionPage" >Connexion</Link>
              </li>
            </ul>
        
        </div>
      </nav>
    </>
  );
}
