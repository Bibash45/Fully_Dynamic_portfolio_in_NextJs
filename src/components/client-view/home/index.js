"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import home from "../../../assets/home.png";
const socialIcons = [
  {
    id: "facebook",
    icon: (
      <FaFacebookF color="rgba(13,183,96,1)" className="w-[40px] h-[40px]" />
    ),
  },
  {
    id: "twitter",
    icon: <FaTwitter color="rgba(13,183,96,1)" className="w-[40px] h-[40px]" />,
  },
  {
    id: "linkdin",
    icon: (
      <FaLinkedinIn color="rgba(13,183,96,1)" className="w-[40px] h-[40px]" />
    ),
  },
  {
    id: "instagram",
    icon: (
      <FaInstagram color="rgba(13,183,96,1)" className="w-[40px] h-[40px]" />
    ),
  },
];

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: (custom = {}) => {
      const { duration = 2 } = custom;
      return {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration,
        },
      };
    },
  };
}

export default function ClientHomeView({ data }) {
  console.log(data, "HomeViewData");

  const setVariants = useMemo(() => variants(), []);

  const containerRef = useRef(null);

  return (
    <div>
      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto " id="home">
        <AnimationWrapper className={``}>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-12 py-10 sm:py-20"
            variants={setVariants}
          >
            <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="mb-6 text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug">
                {data && data.length
                  ? data[0]?.heading.split(" ").map((item, index) => (
                      <span
                        key={index}
                        className={`${
                          index === 2 || index === 3
                            ? "text-green-main"
                            : "text-gray-800"
                        }`}
                      >
                        {item}{" "}
                      </span>
                    ))
                  : null}
              </h1>
              <p className="text-gray-700 mt-4 mb-8 text-lg leading-relaxed">
                {data && data.length ? data[0]?.summary : null}
              </p>
              <motion.div className="flex gap-4 ">
                {socialIcons.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                      duration: 1.5,
                    }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{
                      scale: 0.9,
                      rotate: -360,
                      borderRadius: "100%",
                    }}
                    className="cursor-pointer p-2 bg-white rounded-full shadow-lg"
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div ref={containerRef} className="flex w-full justify-end">
              <motion.div
                drag
                dragConstraints={containerRef}
                className="w-[400px] h-[400px] relative bg-green-main rounded-lg shadow-2xl "
              >
                <div className="w-[400px] h-[400px] top-[40px] left-[-30px] rounded-lg border-[6px] border-gray-800 absolute"></div>
                <Image
                  src={home}
                  alt="home images"
                  layout="responsive"
                  quality={100}
                  height={100}
                  width={100}
                  className="absolute top-[-15px] rounded-lg"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimationWrapper>
      </div>
    </div>
  );
}
