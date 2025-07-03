import React, { useState } from "react";

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products-services", label: "Products and Services" },
    { href: "/brands", label: "Brands" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="w-full h-32 flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-sm relative z-50">
      {/* Logo on the left */}
      <div className="flex items-center h-full">
        <a href="/">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="h-32 w-32 object-contain"
          />
        </a>
      </div>

      {/* Center navigation links (desktop) */}
      <nav className="flex-1 hidden md:flex justify-center">
        <div className="flex gap-8 text-black text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#41B26A]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hamburger menu (mobile) */}
      <button
        className="block md:hidden ml-2 focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Open navigation menu"
      >
        <svg
          className="w-7 h-7 text-[#41B26A]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Green "Get Started" button on the right */}
      <div className=" items-center h-full hidden md:flex">
        <a
          href="tel:0790064777"
          rel="noopener noreferrer"
          className="bg-[#41B26A] text-white px-5 py-2 rounded-md hover:bg-[#369a59] transition font-semibold"
        >
          Get Started
        </a>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden animate-fade-in z-50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 px-4 w-full text-center text-black font-medium hover:text-[#41B26A] border-b last:border-b-0 border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Topbar;
