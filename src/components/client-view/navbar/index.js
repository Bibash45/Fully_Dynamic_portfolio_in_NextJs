"use client";

import Image from "next/image";
import { useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";

const menuItem = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "project",
    label: "Project",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => {
    return (
      <LinkScroll
        key={item.id}
        activeClass="active"
        to={item.id}
        spy={true}
        smooth={true}
        duration={1000}
        onClick={() => setActiveLink(item.id)}
        className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${
          activeLink === item.id
            ? "text-green-main animation-active shadow-greeen-main"
            : "text-black font-bold hover:text-green-main"
        }`}
      >
        {item.label}
      </LinkScroll>
    );
  });
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrollActive, setScrollActive] = useState(false);
  const logo =
    "https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_448,dpr_2/f_auto,q_auto/v1705580343/ideas-and-advice-prod/en-us/adidas/adidas.png?_i=AA";
  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-ehite transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className=" col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-green-main">
              <Image
                src={logo}
                alt="logo"
                width={120}
                height={100}
                quality={100}
              />
            </div>
          </div>

          <ul className="hidden lg:flex col-start-4 col-end-8 text-black items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItem}
            />
          </ul>
        </nav>
      </header>
    </>
  );
}
