import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#402f3d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Logo + Social */}
        <div>
          <img
            src="https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/livspace-logo-1695931938-nUPhX/livspace-1695932166-AWR5M.svg"
            alt="Livspace Logo"
            className="h-10 mb-4"
          />
          <div className="flex space-x-3">
            <a href="#"><FaFacebookF className="hover:text-gray-300" /></a>
            <a href="#"><FaTwitter className="hover:text-gray-300" /></a>
            <a href="#"><FaInstagram className="hover:text-gray-300" /></a>
            <a href="#"><FaPinterestP className="hover:text-gray-300" /></a>
            <a href="#"><FaYoutube className="hover:text-gray-300" /></a>
          </div>
          <p className="mt-6 text-xs uppercase">Download our app</p>
          <div className="flex space-x-2 mt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
        </div>

        {/* Offerings */}
        <div>
          <h3 className="font-bold mb-3">OFFERINGS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Interiors</a></li>
            <li><a href="#" className="hover:underline">Furnishings</a></li>
          </ul>
        </div>

        {/* Get Inspired */}
        <div>
          <h3 className="font-bold mb-3">GET INSPIRED</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Design Ideas</a></li>
            <li><a href="#" className="hover:underline">Magazine</a></li>
            <li><a href="#" className="hover:underline">Livspace TV</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Refer a friend</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Terms and conditions</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Store Locator</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Own a franchise</a></li>
            <li><a href="#">Livspace Reviews</a></li>
            <li><a href="#">Interior Designer</a></li>
            <li><a href="#">Our locations</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-3">CONTACT US</h3>
          <p className="text-sm">
            <span className="font-bold">Call us</span><br />
            1800-309-0930
          </p>
          <p className="mt-3 text-sm">
            <span className="font-bold">Email us</span><br />
            care@livspace.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0e1522] py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Livspace.com. All Rights Reserved.</p>
          <p>
            For full scope, please visit{" "}
            <a
              href="https://www.livspace.com/in/service"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              www.livspace.com/in/service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
