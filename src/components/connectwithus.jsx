import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const ConnectWithUs = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 text-center  bg-gradient-to-r from-purple-700 to-yellow-500 text-center text-white py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        Connect with us
      </h2>
      <p className="text-gray-600 mb-8">
        Reach out on WhatsApp or give us a call for the best home design experience.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Call Now Button */}
        <a
          href="tel:+911234567890"
          className="flex items-center gap-2 bg-[#2c446e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1e2e4d] transition duration-300"
        >
          <FaPhoneAlt />
          CALL NOW
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/911234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#2c446e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1e2e4d] transition duration-300"
        >
          <img
            src="https://images.livspace-cdn.com/w:24/h:24/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/offerings-1615197161-iCUAJ/exp-mod-kitchen-1621414237-yU8i3/call-now-exp-1638359307-kzNQn/ic-whatsapp-1638423210-i1WNd.svg"
            alt="WhatsApp"
            className="w-5 h-5"
          />
          WHATSAPP
        </a>
      </div>
    </section>
  );
};

export default ConnectWithUs;
