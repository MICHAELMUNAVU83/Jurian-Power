import React from "react";

function Footer() {
  return (
    <div className="flex flex-col">
      {/* Top Call-to-Action Section */}
      <div className="w-full md:h-[200px] bg-[#41B26A] flex flex-col justify-center items-center px-8 py-6 space-y-4">
        <h1 className="text-white font-bold text-lg text-center">
          Ready to Power Up Your World?
        </h1>
        <p className="text-white text-xs max-w-md text-center">
          Contact us today to discuss your power needs and how we can help you
          find the perfect solution.
        </p>
        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="mt-4 bg-white text-[#41B26A] font-medium px-4 py-2 rounded hover:bg-[#41B26A] hover:text-white border border-white transition duration-300">
            Contact Us
          </button>
          <button className="mt-4 bg-white text-[#41B26A] font-medium px-4 py-2 rounded hover:bg-[#41B26A] hover:text-white border border-white transition duration-300">
            <span>Get Started</span>
            {/* Right Arrow */}
            <span className="text-tan-400 text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="md:h-[400px] bg-black px-8 pt-10 pb-4 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-around">
          {/* Quick Links */}
          <div className="flex flex-col text-white">
            <h1 className="font-bold text-lg mb-2">Quick Links</h1>
            <h2 className="text-xs mb-4">Home</h2>
            <h2 className="text-xs mb-4">About Us</h2>
            <h2 className="text-xs mb-4">Product and Services</h2>
            <h2 className="text-xs mb-4">Brands</h2>
            <h2 className="text-xs mb-4">Contact</h2>
          </div>

          {/* Services */}
          <div className="flex flex-col text-white">
            <h1 className="font-bold text-lg mb-2">Services</h1>
            <h2 className="text-xs mb-4">Generator Installation</h2>
            <h2 className="text-xs mb-4">Maintenance Contracts</h2>
            <h2 className="text-xs mb-4">Genset Repair</h2>
            <h2 className="text-xs mb-4">On-Call Service</h2>
            <h2 className="text-xs mb-4">Electrical Services</h2>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col text-white">
            <h1 className="font-bold text-lg mb-2">Contact Us</h1>
            <h2 className="text-xs mb-4">Industrial Area, Nairobi</h2>
            <h2 className="text-xs mb-4">P.O Box 489,00507 Viwandani</h2>
            <h2 className="text-xs mb-4">Tel: 0790064777</h2>
            <h2 className="text-xs mb-4">Mobile: 0704194918</h2>
            <h2 className="text-xs mb-4">Email: info@jarianpower.co.ke</h2>
          </div>
        </div>

        {/* Divider and Bottom Text pinned to bottom */}
        <div className=" w-full px-2">
          <div className="w-full h-px bg-gray-300 mt-10"></div>
          <div className="text-white text-sm text-center pt-4 pb-4">
            © 2025 Jarian Power Limited. All rights reserved. Privacy Policy ·
            Terms of Service
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
