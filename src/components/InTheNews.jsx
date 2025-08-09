import React from "react";

const newsData = [
  {
    title: "The Economic Times",
    text: "Livspace said it crossed the billion-dollar valuation mark after raising $180 million in a late-stage funding round led by KKR & Co..."
  },
  {
    title: "mint",
    text: "Livspace has joined the unicorn club after the online home décor startup backed by private equity firm TPG raised $180 mn..."
  },
  {
    title: "Architect & Interiors India",
    text: "The 23,000 sq-ft Bengaluru centre, designed by FITCH Singapore, combines inspiration, information and technology"
  },
  {
    title: "The Economic Times",
    text: "The company has also opened Experience Centres spanning 1500 sq ft each in prime locations in all four cities."
  }
];

export default function InTheNews() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
        In the news
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 sm:p-5 shadow-sm lg:hover:shadow-md transition duration-300 bg-white"
          >
            <h3 className="font-serif text-lg sm:text-xl mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
