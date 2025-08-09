import React from "react";

const offers = [
  {
    title: "Our services",
    img: "https://images.livspace-cdn.com/w:82/h:82/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/final-installations-desktop-1646302986-vo83B.png",
    points: [
      "Modular kitchens",
      "Modular wardrobes",
      "Lighting",
      "Flooring",
      "Electrical work",
      "Civil work",
      "False ceiling",
      "Wall design & painting"
    ]
  },
  {
    title: "Warranty",
    img: "https://images.livspace-cdn.com/w:36/h:36/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/warranty-desktop-1646230235-UWz82.png",
    points: [
      "FLAT 10-year warranty",
      "Up to 1-year on-site service warranty"
    ]
  },
  {
    title: "Technology & science",
    img: "https://images.livspace-cdn.com/w:36/h:36/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/technology-science-desktop-1646230234-kSJ7b.png",
    points: [
      "AquaBloc® Technology",
      "AntiBubble® Technology",
      "DuraBuild™ Technology",
      "Design Science"
    ]
  }
];

export default function WhatWeOffer() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        What we offer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((item, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col items-center text-center"
          >
            {/* Logo */}
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 object-contain mb-4"
            />
            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
              {item.title}
            </h3>
            {/* List */}
            <ul className="space-y-2 text-gray-600 text-sm md:text-base text-left">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-primary font-bold">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
