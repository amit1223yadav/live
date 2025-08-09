import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      img: "https://images.livspace-cdn.com/w:82/h:82/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/meet-a-designer-desktop-1646302987-Q1RPM.png",
      title: "Meet a designer",
      desc: "",
    },
    {
      img: "https://images.livspace-cdn.com/w:82/h:82/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/book-a-renovation-desktop-1646302985-3bD40.png",
      title: "(5% payment) Book a renovation",
      desc: "",
    },
    {
      img: "https://images.livspace-cdn.com/w:82/h:82/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/execution-begins-desktop-1646302985-JdwMI.png",
      title: "(60% payment) Execution begins",
      desc: "",
    },
    {
      img: "https://images.livspace-cdn.com/w:82/h:82/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/final-installations-desktop-1646302986-vo83B.png",
      title: "(100% payment) Final installations",
      desc: "",
    },
    {
      img: "https://images.livspace-cdn.com/w:82/h:82/q:50/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/page-1646208371-nMa3u/desired-home-interiors-1646208400-Ol37G/move-in-and-enjoy-desktop-1646302988-gGk1o.png",
      title: "Move in and enjoy!",
      desc: "",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>

        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center w-40 relative">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-md z-10">
                <img src={step.img} alt={step.title} className="w-14 h-14 object-contain" />
              </div>
              <p className="mt-4 font-semibold">{step.title}</p>
              {index !== steps.length - 1 && (
                <div className="absolute top-10 left-full w-full border-t-2 border-dashed border-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col md:hidden gap-8 items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-md">
                <img src={step.img} alt={step.title} className="w-14 h-14 object-contain" />
              </div>
              <p className="mt-4 font-semibold">{step.title}</p>
              {index !== steps.length - 1 && (
                <div className="w-px h-8 border-l-2 border-dashed border-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
