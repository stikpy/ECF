// Sidebar.tsx
"use client";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Link from "next/link";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import SignOut from "../Components/SignOut";


type Props = {};

function className(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
function Sidebar({}: Props) {
  const [selectedLayoutSegment, setSelectedLayoutSegment] =
    useState("Dashboard");
  const sidebarOptions = [
    { name: "Dashboard", href: "/settings", icon: HomeIcon, current: true },
    {
      name: "Cars",
      href: "/settings/carsDataManagement",
      icon: DirectionsCarIcon,
      current: false,
      submenu: [
        {
          name: "Add Car",
          href: "/settings/carsDataManagement/addCarForm",
          current: false,
        },
      ],
    },
    {
      name: "Users",
      href: "/settings/user",
      icon: ManageAccountsIcon,
      current: false,
      submenu: [
        { name: "Add User", href: "/settings/user/userAdd", current: false },
      ],
    },
    {
      name: "Reviews",
      href: "/settings/testimonailsManagement",
      icon: StarHalfIcon,
      current: false,
      submenu: [
        {
          name: "Add Review",
          href: "/settings/testimonailsManagement/addReview",
          current: false,
        },
      ],
    },
    {
      name: "Contenu du site",
      href: "/settings/contentManagement",
      icon: StarHalfIcon,
      current: false,
      submenu: [
        {
          name: "Modifier le site",
          href: "/settings/contentManagement/updateData",
          current: false,
        },
      ],
    },
    { name: "Messages", href: "#", icon: MailOutlineIcon, current: false },
  ];

  return (
    <div
      id="sidebar"
      className=" h-screen h-full lg:inset-y-0 lg:flex lg:w-72 lg:flex-col"
    >
      <div className="flex justify-between grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4  rounded-lg border-r-2">
        <h1 className="text-3-xl font-bold">Logo</h1>
        <nav className=" flex flex-col">
          <ul role="list" className="flex flex-l flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-4">
                {sidebarOptions.map((option) => (
                  <li key={option.name} className="px-2">
                    <Link
                      href={`${option.href}/#sidebar`}
                      className={className(
                        option.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                      )}
                      onClick={(e) => setSelectedLayoutSegment(option.name)}
                    >
                      <option.icon
                        className={className(
                          option.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6",
                        )}
                        aria-hidden="true"
                      />
                      {option.name}
                    </Link>
                    {option.submenu && (
                      <ul className="pl-6 space-y-2">
                        {option.submenu.map((subitem) => (
                          <li key={subitem.name}>
                            <Link
                              href={`${subitem.href}/#sidebar`}
                              className={className(
                                "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group flex items-center px-10 py-1 text-sm font-medium rounded-md",
                              )}
                            >
                              {subitem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
     
        <SignOut/>
      </div>
    </div>
  );
}

export default Sidebar;
