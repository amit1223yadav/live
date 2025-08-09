import React from "react";

export default function DreamHomeCTA() {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-yellow-500 text-center text-white py-12 px-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
        Your <span className="text-yellow-300">dream home</span> is just a click away
      </h2>
      <p className="mt-2 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
        Book a free consultation with our expert interior designers.
      </p>
      <button className="mt-6 bg-red-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-red-600 transition">
        START YOUR DESIGN JOURNEY
      </button>
    </section>
  );
}
