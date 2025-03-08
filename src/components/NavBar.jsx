import React, { useState } from 'react';
import { useNavigate } from "react-router";


const NavButton = ({
  imagePath,
  altText,
  text,
  navigateTo,
  onClick,
  width = 20,
  height = 20,
  isProfilePhoto = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full h-full bg-white border-none cursor-pointer text-black transition duration-300 flex items-center hover:bg-[#ffffff18] ${
        isProfilePhoto ? "justify-center" : ""
      }`}
    >
      {/* <img
        src={imagePath}
        alt={altText}
        width={width}
        height={height}
        className={isProfilePhoto ? "rounded-full" : ""}
      /> */}
      {!isProfilePhoto && text}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo.svg" 
            alt="Logo"
            className="h-8 w-auto md:h-10" 
          />
        </div>

        <div className="hidden md:flex h-full">
        <NavButton
          text="Home"
          navigateTo="/home"
        />
        <NavButton
          text="Home"
          navigateTo="/home"
        />
        <NavButton
          text="Home"
          navigateTo="/home"
        />
        <NavButton
          text="Home"
          navigateTo="/home"
        />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#" className="block text-white py-2 hover:bg-blue-400">Inicio</a>
          <a href="#" className="block text-white py-2 hover:bg-blue-400">Acerca de</a>
          <a href="#" className="block text-white py-2 hover:bg-blue-400">Servicios</a>
          <a href="#" className="block text-white py-2 hover:bg-blue-400">Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;