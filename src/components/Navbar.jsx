import React, { useState } from "react";
import Login from "./Login";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white border-b z-50 shadow-sm">
        {/* Top Nav */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left - Logo & Main Links */}
          <div className="flex items-center space-x-6">
            {/* Hamburger for mobile */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.75h16.5M3.75 12h16.5m-16.5 6.25h16.5"
                />
              </svg>
            </button>

            {/* Logo */}
            <img
              src="https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/livspace-logo-1695931938-nUPhX/livspace-1695932166-AWR5M.svg"
              alt="Livspace Logo"
              className="h-8"
            />

            {/* Main Navigation (Desktop) */}
            <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800 relative">
              <div className="relative">
                <button onClick={() => toggleMenu("design")}>Design Ideas ▼</button>
                {openMenu === "design" && (
                  <div className="absolute top-full left-0 bg-white shadow-lg border mt-1 rounded w-48">
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                      Living Room Designs
                    </a>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                      Kitchen Designs
                    </a>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                      Bedroom Designs
                    </a>
                  </div>
                )}
              </div>

              <a href="#">Magazine</a>
              <a href="#">Cities</a>
              <a href="#">Portfolio</a>
              <a href="#">Store Locator</a>
              <a href="#">More</a>
            </nav>
          </div>

          {/* Right - Login, Profile & Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowLogin(true)}
              className="text-sm text-gray-700 hover:text-black"
            >
              Login
            </button>
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 1 1 15 0v.75H4.5v-.75Z"
                />
              </svg>
            </a>
            <button className="bg-red-400 text-white px-5 py-2 rounded-full text-xs font-bold uppercase hover:opacity-90">
              Consult Online Now
            </button>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}
