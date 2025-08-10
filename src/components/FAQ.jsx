import React, { useState } from "react";

const faqs = [
  {
    question: "Why do I need an interior designer?",
    answer:
      "An interior designer helps you create functional, beautiful spaces tailored to your lifestyle. They bring expertise in layout, color, materials, and ensure the project runs smoothly."
  },
  {
    question: "Why is Livspace perfect for your home interior design?",
    answer:
      "Livspace offers end-to-end interior design services, from concept to execution, with experienced designers and high-quality materials."
  },
  {
    question: "What services are included under home interior design?",
    answer:
      "Services typically include space planning, furniture selection, lighting design, color schemes, decor styling, and project management."
  },
  {
    question: "How much does home interiors cost?",
    answer:
      "The cost depends on the size of the space, materials chosen, and complexity of design. Livspace provides transparent pricing after a free consultation."
  },
  {
    question: "What will be the timelines for my project completion?",
    answer:
      "Timelines vary by project scope, but most home interiors take between 6-12 weeks from design finalization to completion."
  },
  {
    question: "What are the trending interior design styles?",
    answer:
      "Popular styles include modern minimalism, Scandinavian, industrial chic, contemporary luxury, and bohemian aesthetics."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        FAQs About Home Interior Design
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white shadow-sm rounded-md border overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left font-medium"
                onClick={() => toggleFAQ(index)}
              >
                <span>{index + 1}. {faq.question}</span>
                <span className="text-xl font-bold">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* Animated Answer */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="p-4 border-t text-gray-600 text-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
