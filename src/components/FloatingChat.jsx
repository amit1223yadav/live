import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 top-1/3 bg-green-500 p-3 rounded-full shadow-lg z-50 hover:bg-green-600 transition"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed right-4 bottom-4 bg-white shadow-xl rounded-lg p-4 w-72 z-50 border border-gray-200">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
          >
            <IoMdClose size={18} />
          </button>

          <p className="text-gray-800 text-sm">
            We're Online. How may I assist you?
          </p>

          {/* Chat Button */}
          <button
            className="mt-3 flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full"
          >
            <span>💬</span>
            <span>Ask us now</span>
          </button>
        </div>
      )}
    </>
  );
}
