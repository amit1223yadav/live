import React from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/solid';

export default function Testimonials() {
  const testimonials = [
    {
      img: 'https://images.livspace-cdn.com/w:555/h:184/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/img/landingpages/full-home-interiors/Edge_New/new-folder-1657193933-8Jkh5/testimonials-1657465517-rgHwq/tharun-priyanka-1657465725-T7QsN.jpg',
      text: 'Livspace made our dream home come to life. The designs were perfect and the execution flawless!',
      client: 'Tharun & Priyanka',
    },
    {
      img: 'https://images.livspace-cdn.com/w:555/h:184/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/img/landingpages/full-home-interiors/Edge_New/new-folder-1657193933-8Jkh5/testimonials-1657465517-rgHwq/kanchan-and-sumit-1657465763-01dLN.jpg',
      text: 'From the first meeting to handover, the experience was smooth, stress-free, and enjoyable.',
      client: 'Kanchan & Sumit',
    },
    {
      img: 'https://images.livspace-cdn.com/w:555/h:184/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/img/landingpages/full-home-interiors/Edge_New/new-folder-1657193933-8Jkh5/testimonials-1657465517-rgHwq/nidhi-vikas-1657465753-T1PMD.jpg',
      text: 'We never thought our house could look this amazing. The attention to detail blew us away.',
      client: 'Nidhi & Vikas',
    },
  ];

  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          See Why 1 Lakh+ Homeowners Choose Livspace
        </h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image with Video Button */}
              <div className="relative h-40 bg-gray-100 rounded overflow-hidden group">
                <img
                  src={t.img}
                  alt={`Testimonial ${i + 1}`}
                  className="h-full w-full object-cover"
                />
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"
                  aria-label="Play Video"
                >
                  <PlayCircleIcon className="w-12 h-12 text-white" />
                </button>
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm mt-4 italic flex-grow">
                "{t.text}"
              </p>
              <p className="text-xs mt-3 text-right text-gray-500">— {t.client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
