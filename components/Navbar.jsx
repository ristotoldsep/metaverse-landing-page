"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import Menu from "./Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //console.log(isMenuOpen);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
      >
        <div className="absolute w-[50%] inset-0 gradient-01 z-0" />
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8 z-[3] relative`}
        >
          <img
            src="/search.svg"
            alt="search"
            className="w-[24px] h-[24px] object-contain cursor-pointer z-[1]"
          />
          <a href="/">
            <h2 className="font-extrabold text-[24px] leading-[30px] text-white z-[10]">
              METAVERSUS
            </h2>
          </a>
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={
              () => setIsMenuOpen(!isMenuOpen)
            }
          />
        </div>
      </motion.nav>
      {isMenuOpen && (
        <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
