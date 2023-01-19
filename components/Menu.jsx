"use client";

import { links } from "../constants";

const Menu = ({ isOpen, onClose }) => (
  <div
    className={`${
      isOpen ? "translate-y-0" : "translate-y-[-110%]"
    } fixed top-0 left-0 w-full h-full bg-[#181818] z-[999] transition-all duration-500 ease-in-out flex flex-col justify-center items-center text-white text-[55px] sm:px-16 px-6 overflow-hidden`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01 opacity-20 z-0" />
    <button
      onClick={onClose}
      className="absolute top-[25px] right-[45px] text-[18px] hover:underline"
    >
      Close
    </button>
    <nav className="text-center">
      <ul className="list-none">
        {links.map((link) => (
          <li
            key={link.id}
            className="p-4 hover:translate-y-[-5px] transition-all duration-300 ease-in-out"
          >
            <a href={link.href} onClick={onClose}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Menu;
