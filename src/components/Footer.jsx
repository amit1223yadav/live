import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-3 sm:space-y-1 sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm">
          © {new Date().getFullYear()} Livspace.com. All Rights Reserved.
        </p>
        <p className="text-gray-400 text-xs sm:text-sm">
          For full scope, please visit{" "}
          <a
            href="https://www.livspace.com/in/service"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            www.livspace.com/in/service
          </a>
        </p>
      </div>
    </footer>
  );
}
