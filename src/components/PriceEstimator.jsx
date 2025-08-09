import React from "react";

const priceOptions = [
  { 
    title: "Full Home", 
    desc: "Get an approximate costing for your full home interiors.",
    img: "https://images.livspace-cdn.com/w:80/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/lp-estimators-carousel-1675788004-IGLbz/full-home-interior-1-1675788036-JKqzI.png"
  },
  { 
    title: "Kitchen", 
    desc: "Get an approximate costing for your kitchen interior.",
    img: "https://images.livspace-cdn.com/w:80/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/lp-estimators-carousel-1675788004-IGLbz/full-home-interior-1-1675788036-JKqzI.png"
  },
  { 
    title: "Wardrobe", 
    desc: "Get an approximate costing for your wardrobe.",
    img: "https://images.livspace-cdn.com/w:80/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/lp-estimators-carousel-1675788004-IGLbz/full-home-interior-1-1675788036-JKqzI.png"
  }
];

export default function PriceEstimator() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
        Interior Price Estimator
      </h2>
      <p className="text-gray-500 text-sm sm:text-base mb-8">
        Calculate the approximate cost of doing up your interiors
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {priceOptions.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition duration-300 bg-white flex flex-col items-center"
          >
            {/* Logo */}
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-20 h-20 object-contain mb-4"
            />

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
            
            {/* Description */}
            <p className="text-gray-500 text-sm sm:text-base">{item.desc}</p>
            
            {/* Button */}
            <button className="mt-6 w-full bg-red-500 text-white text-sm sm:text-base px-5 py-2 rounded-full hover:bg-red-600 transition duration-300 font-medium">
              CALCULATE →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
