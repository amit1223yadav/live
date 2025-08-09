import React from 'react';

const cards = [
  {
    t: 'Monochromatic Grey 2 BHK',
    desc: 'Add the cloudy hues to your space.',
    img: 'https://images.livspace-cdn.com/w:600/h:340/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/img/landingpages/full-home-interiors/Edge_New/new-folder-1657193933-8Jkh5/homes-for-every-budget-desktop-1657197190-XYuZj/2-bhk-1657197417-hijyj.jpg'
  },
  {
    t: 'Royal & Elegant 3 BHK',
    desc: 'Experience timeless elegance in every corner.',
    img: 'https://images.livspace-cdn.com/w:600/h:340/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/img/landingpages/full-home-interiors/Edge_New/new-folder-1657193933-8Jkh5/homes-for-every-budget-desktop-1657197190-XYuZj/3-bhk-1657197415-Rlbqf.jpg'
  },
  {
    t: 'Contemporary & Classy 4 BHK',
    desc: 'Modern design meets sophisticated style.',
    img: 'https://images.livspace-cdn.com/w:600/h:340/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/img/landingpages/full-home-interiors/Edge_New/new-folder-1657193933-8Jkh5/homes-for-every-budget-desktop-1657197190-XYuZj/4-4-bhk-1657197414-n5HKc.jpg'
  }
];

export default function Homes() {
  return (
    <section className="py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h3 className="text-xl font-bold">Homes for every style</h3>
        <button className="bg-primary text-white px-4 py-2 rounded-full text-sm">
          Get Free Quote
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="h-40 bg-gray-200">
              <img
                src={c.img}
                alt={c.t}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h4 className="font-semibold text-lg">{c.t}</h4>
                <p className="text-sm text-gray-500 mt-2">{c.desc}</p>
              </div>
              <button className="mt-4 w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary/90 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
