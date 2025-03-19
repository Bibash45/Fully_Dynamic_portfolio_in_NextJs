"use client";

import { duration } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);
  const logo =
    "https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_448,dpr_2/f_auto,q_auto/v1705580343/ideas-and-advice-prod/en-us/adidas/adidas.png?_i=AA";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.screenY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className=" col-start-1 col-end-2 flex items-center">
            {/* <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-green-main">
              <Image
                src={logo}
                alt="logo"
                width={120}
                height={100}
                quality={100}
              />
            </div> */}
          </div>

          <ul className="hidden lg:flex col-start-4 col-end-8 text-black items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItem}
            />
          </ul>
          <div className="col-start-10 col-end-12 flex justify-end">
            <button
              className="py-2 px-5 border-2 border-green-600 text-green-600 font-semibold rounded-full text-xl hover:bg-gray-400 hover:text-white hover:shadow-lg trasition-all duration-300 ease-in-out"
              onClick={() =>
                scroller.scrollTo("contact", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }
            >
              Contact Me
            </button>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3 ">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-[#000]">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItem}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
