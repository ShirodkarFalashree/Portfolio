import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons for mobile
import { motion } from "framer-motion"; // Optional, for animation

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Brand Name */}
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-bold">
              Falashree
            </a>
          </div>

          {/* Hamburger Icon for mobile */}
          <div className="block lg:hidden">
            <button
              onClick={toggleNav}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {navOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/#about"
                className="hover:text-gray-200 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About Me
              </Link>
              <Link
                to="/#projects"
                className="hover:text-gray-200 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                to="/#contact"
                className="hover:text-gray-200 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${navOpen ? "block" : "hidden"} bg-black px-2 pt-2 pb-3 space-y-1`}>
        <motion.a
          href="/#about"
          whileHover={{ scale: 1.1 }}
          className="block text-white px-3 py-2 rounded-md text-base font-medium"
        >
          About Me
        </motion.a>
        <motion.a
          href="/#projects"
          whileHover={{ scale: 1.1 }}
          className="block text-white px-3 py-2 rounded-md text-base font-medium"
        >
          Projects
        </motion.a>
        <motion.a
          href="/#contact"
          whileHover={{ scale: 1.1 }}
          className="block text-white px-3 py-2 rounded-md text-base font-medium"
        >
          Contact
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
