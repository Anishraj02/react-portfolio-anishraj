import logo from "../assets/anish2logo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 bg-inherit text-gray-300 px-4 md:px-10 lg:px-20 relative">

      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div
        className={`absolute top-16 left-0 w-full md:static md:flex md:flex-row md:justify-center md:items-center ${
          isOpen
            ? "flex flex-wrap flex-row items-center justify-around p-4 rounded-md bg-black bg-opacity-70"
            : "hidden"
        } md:p-0`}
      >
        <a
          href="#about"
          className="hover:underline hover:text-blue-300 block text-center py-2 md:px-6 lg:px-8"
        >
          About
        </a>
        <a
          href="#technologies"
          className="hover:underline hover:text-blue-300 block text-center py-2 md:px-6 lg:px-8"
        >
          Technologies
        </a>
        <a
          href="#projects"
          className="hover:underline hover:text-blue-300 block text-center py-2 md:px-6 lg:px-8"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:underline hover:text-blue-300 block text-center py-2 md:px-6 lg:px-8"
        >
          Get in Touch
        </a>
      </div>


      <div className="flex items-center gap-4 text-2xl md:hidden">
        <a
          href="https://www.linkedin.com/in/kbanishraj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-600" />
        </a>
        <a
          href="https://github.com/Anishraj02"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-green-500" />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="hover:text-blue-400" />
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-red-600" />
        </a>
      </div>


      {isOpen && (
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white text-lg font-bold md:hidden"
        >
        </button>
      )}

      <div className="hidden md:flex items-center justify-end gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/kbanishraj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-600" />
        </a>
        <a
          href="https://github.com/Anishraj02"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-green-500" />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="hover:text-blue-400" />
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-red-600" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
