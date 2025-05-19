import React from 'react';

function Header() {
  return (
    <div className="w-full h-[300px] bg-white flex items-center justify-center px-8">
      <div className="flex flex-col items-center text-center space-y-4 max-w-xl">
        <h1 className="text-black font-bold text-5xl"style={{ fontFamily: '"Instrument Serif", serif' }}>
          Powering Your World With
        </h1>
        <h2 className="text-[#41B26A] font-small text-5xl italic"style={{ fontFamily: '"Instrument Serif", serif' }}>
          Reliable Energy Solutions
        </h2>
        <p className="text-black text-sm leading-relaxed">
          Jarian Power provides top-quality generators, maintenance contracts, and electrical services to keep your business or home running smoothly.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 pt-2">
          <button className="bg-[#41B26A] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#41B26A] border hover:border-[#41B26A] transition">
            Request A Quote
          </button>
          <button className="bg-[#41B26A] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#41B26A] border hover:border-[#41B26A] transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
