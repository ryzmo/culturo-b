import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Untuk mobile menu
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/30 backdrop-blur-md fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-800 flex items-center">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-10 h-10 mr-2 rounded-full border-2 border-gray-800"
          />
          Culturo
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {[
            { to: "/", label: "Home" },
            { to: "/culturelearn", label: "CultureLearn" },
            { to: "/cultureshowcase", label: "CultureShowcase" },
            { to: "/marketplace", label: "Marketplace" },
            { to: "/challenges", label: "Challenges" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center justify-center px-4 py-2 text-lg rounded-md transition-all duration-300 ${
                isActive(link.to)
                  ? "bg-green-300/50 text-green-800 font-bold text-sm backdrop-blur-sm shadow-md"
                  : "text-gray-800 hover:bg-green-100 hover:text-green-700"
              }`}
              style={{
                textAlign: "center",
                height: "40px", // Tinggi link agar lebih terlihat tengah-tengah
              }}
            >
              {link.label}
            </Link>
          ))}
          {/* Profile Icon */}
          <Link
            to="/profile"
            className="bg-gray-200 text-gray-800 rounded-full p-2 shadow-md hover:bg-gray-300 transition"
          >
            <img
              src="/assets/profile.png"
              alt="Profile"
              className="w-6 h-6"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/70 backdrop-blur-md shadow-md py-4">
          <ul className="space-y-4 text-center">
            {[
              { to: "/", label: "Home" },
              { to: "/culturelearn", label: "CultureLearn" },
              { to: "/cultureshowcase", label: "CultureShowcase" },
              { to: "/marketplace", label: "Marketplace" },
              { to: "/challenges", label: "Challenges" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`flex items-center justify-center px-4 py-2 rounded-md transition-all duration-300 ${
                    isActive(link.to)
                      ? "bg-green-300/50 text-green-800 font-bold text-sm backdrop-blur-sm shadow-md"
                      : "text-gray-800 hover:bg-green-100 hover:text-green-700"
                  }`}
                  style={{
                    textAlign: "center",
                    height: "40px", // Sama seperti desktop
                  }}
                  onClick={() => setMenuOpen(false)} // Tutup menu setelah klik
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Profile Icon in Mobile */}
            <li>
              <Link
                to="/profile"
                className="bg-gray-200 text-gray-800 rounded-full p-2 shadow-md hover:bg-gray-300 transition flex items-center justify-center mx-auto w-10 h-10"
                onClick={() => setMenuOpen(false)} // Tutup menu setelah klik
              >
                <img
                  src="/assets/profile-icon.png"
                  alt="Profile"
                  className="w-6 h-6"
                />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
