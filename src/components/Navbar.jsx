import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full border-b bg-white z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/livspace-logo-1695931938-nUPhX/livspace-1695932166-AWR5M.svg"
            alt="Livspace Logo"
            className="h-10"
          />
          
        </div>

        {/* Desktop Button */}
        <div className="hidden sm:block">
          <button className="bg-primary text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition">
            Get Free Quote
          </button>
        </div>

        {/* Mobile Button */}
        <div className="sm:hidden">
          <button className="bg-primary text-white px-4 py-2 rounded-full text-xs">
            Quote
          </button>
        </div>
      </div>
    </header>
  );
}
