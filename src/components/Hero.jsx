import React from "react";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center"
      style={{
        backgroundImage:
          "url('https://images.livspace-cdn.com/blur:8/plain/https://d3gq2merok8n5r.cloudfront.net/img/landingpages/full-home-interiors/Edge_New/new-folder-1657193933-8Jkh5/1440x730-1657194139-erPsT.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Spacer to push content below fixed navbar */}
      <div className="absolute top-0 left-0 w-full h-[88px] md:h-[96px] bg-transparent"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-[88px] md:pt-[96px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
            Bring home beautiful interiors <br />
            <span className="text-yellow-300">that fit your budget</span>
          </h1>
          <p className="text-lg md:text-xl drop-shadow-md max-w-lg">
            Experience unmatched quality & timely delivery with Livspace.
          </p>
          <button className="mt-6 bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-primary/90 transition">
            Book Free Consultation
          </button>
        </div>

        {/* Right: Form Card */}
        <div className="flex justify-end">
          <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-sm translate-x-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Designs for Every Budget
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="flex items-center">
                <input type="checkbox" id="whatsapp" className="mr-2" />
                <label htmlFor="whatsapp" className="text-gray-700 text-sm">
                  Send me updates on WhatsApp
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-full hover:bg-primary/90 transition"
              >
                Get Free Quote
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2 text-center">
              By submitting, you agree to the privacy policy & terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

