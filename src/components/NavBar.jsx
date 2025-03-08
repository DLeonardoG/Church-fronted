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
      className={`px-4 py-2 bg-transparent border-none cursor-pointer text-white text-sm font-semibold transition duration-300 flex items-center hover:bg-white hover:text-blue-500 rounded-lg ${
        isProfilePhoto ? "justify-center" : ""
      }`}
    >
      {imagePath && (
        <img
          src={imagePath}
          alt={altText}
          width={width}
          height={height}
          className={isProfilePhoto ? "rounded-full" : "mr-2"}
        />
      )}
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
    <nav className="bg-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo.svg" 
            alt="Logo"
            className="h-8 w-auto md:h-10" 
          />
        </div>

        <div className="hidden md:flex h-full space-x-4">
          <NavButton
            text="Inicio"
            navigateTo="/home"
          />
          <NavButton
            text="Creencias"
            navigateTo="/creencias"
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
        <div className="md:hidden mt-4 bg-blue-600 rounded-lg shadow-lg">
          <NavButton
            text="Inicio"
            navigateTo="/home"
            className="block w-full text-left py-3 px-4 hover:bg-blue-500 rounded-lg"
          />
          <NavButton
            text="Creencias"
            navigateTo="/creencias"
            className="block w-full text-left py-3 px-4 hover:bg-blue-500 rounded-lg"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;