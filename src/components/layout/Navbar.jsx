import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-red-600" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src="/logo.png" alt="Restaurant Logo" className="h-8 w-auto" />
            <span className="ml-2 text-white font-['Poppins'] font-semibold text-xl">
              Restaurant
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/home" className="text-white hover:text-yellow-400">
              Home
            </a>
            <a href="/about" className="text-white hover:text-yellow-400">
              About
            </a>
            <a href="/portfolio" className="text-white hover:text-yellow-400">
              Portfolio
            </a>
            <a href="/clients" className="text-white hover:text-yellow-400">
              Clients
            </a>
            <a href="/blog" className="text-white hover:text-yellow-400">
              Blog
            </a>
            <a href="/contact" className="text-white hover:text-yellow-400">
              Contact
            </a>
            <button className="bg-yellow-400 px-6 py-2 rounded-md text-black font-medium">
              BOOK A TABLE
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-red-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/home" className="text-white block px-3 py-2">
                Home
              </a>
              <a href="/about" className="text-white block px-3 py-2">
                About
              </a>
              <a href="/portfolio" className="text-white block px-3 py-2">
                Portfolio
              </a>
              <a href="/clients" className="text-white block px-3 py-2">
                Clients
              </a>
              <a href="/blog" className="text-white block px-3 py-2">
                Blog
              </a>
              <a href="/contact" className="text-white block px-3 py-2">
                Contact
              </a>
              <button className="bg-yellow-400 w-full px-6 py-2 rounded-md text-black font-medium">
                BOOK A TABLE
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
