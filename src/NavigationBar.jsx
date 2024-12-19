import React, { useState } from "react";

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="backdrop-blur-lg bg-black bg-opacity-50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          Aqua<span className="text-gray-400">AirX</span>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            {["Home", "About", "Services", "Expertise", "Gallery", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white py-2 backdrop-blur-lg shadow-lg">
          <ul className="space-y-2 text-sm font-medium">
            {["Home", "About", "Services", "Expertise", "News", "Gallery", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block px-6 py-2 text-white hover:bg-gray-800 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;
