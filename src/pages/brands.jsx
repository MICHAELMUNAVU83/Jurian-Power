import React from 'react';

function Brands() {
  const brandData = [
    {
      title: "PowerGen",
      subtitle: "Industry leader in industrial generators and power solutions.",
      tag: "generators",
    },
    {
      title: "Electropro",
      subtitle: "Specialized in electrical components and systems.",
      tag: "electrical",
    },
    {
      title: "GenTech",
      subtitle: "Cutting-edge generator technology for various applications.",
      tag: "generators",
    },
    {
      title: "PowerSafe",
      subtitle: "Specialized in safety equipment for power systems.",
      tag: "safety",
    },
    {
      title: "VoltMaster",
      subtitle: "Premium voltage regulators and stabilizers.",
      tag: "components",
    },
    {
      title: "EnergyPlus",
      subtitle: "Comprehensive energy solutions for businesses.",
      tag: "solutions",
    },
    {
      title: "PowerControl",
      subtitle: "Advanced control systems for power management.",
      tag: "controls",
    },
    {
      title: "GenParts",
      subtitle: "Quality replacement parts for all major generator brands.",
      tag: "parts",
    },
  ];

  const categories = [
    "All Brands", "Generators", "Electrical", "Safety", "Components", "Controls", "Parts"
  ];

  return (
    <div className="py-12 md:px-16 from-white-100 to-white via-green-50 bg-gradient-to-b">
      
      {/* Header Section */}
      <div className="bg-gradient-to-b from-green-100 to-white via-green-50 h-[200px] flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl font-semibold" style={{ fontFamily: 'Bricolage Grotesque' }}>
          Our Partner <span className="text-[#41B26A] italic font-normal">Brands</span>
        </h1>

        <p className="text-xs mt-2">
          We partner with the world's leading power solution manufacturers to provide you with the best products.
        </p>
        <button className="mt-4 bg-[#41B26A] text-white font-medium px-4 py-2 rounded hover:bg-white hover:text-[#41B26A] border border-[#41B26A] transition duration-300">
          Learn More <span>→</span>
        </button>
      </div>

      {/* Category Filters */}
      <div className="px-4">
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {categories.map((item) => (
            <button
              key={item}
              className="px-4 py-2 rounded-full border border-[#41B26A] text-[#41B26A] hover:bg-[#41B26A] hover:text-white transition duration-300"
            >
              {item}
            </button>
          ))}
        </div>

         {/* Brand Cards */}
            <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-1 gap-y-4">
                {brandData.map((brand, i) => (
                <div
                    key={i}
                    className="bg-white w-full max-w-[180px] rounded-lg shadow-md p-4 text-center flex flex-col items-center space-y-2"
                >
                    <img
                    src="images/brand.png"
                    alt={brand.title}
                    className="w-full h-32 object-contain"
                    />
                    <h3 className="text-sm font-bold text-gray-800">{brand.title}</h3>
                    <p className="text-xs text-gray-600">{brand.subtitle}</p>
                    <span
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#41B26A33", color: "#41B26A" }}
                    >
                    {brand.tag}
                    </span>
                </div>
                ))}
            </div>
            </div>

      </div>

      {/* Partnership Section */}
<div
  className="w-full h-[300px] flex flex-col justify-center items-center px-8 py-6 space-y-4 mt-10"
  style={{ backgroundColor: '#41B26A' }}
>
  <h1
    className="text-white font-bold text-5xl text-center"
    style={{ fontFamily: 'Bricolage Grotesque' }}
  >
    Become a Partner
  </h1>
  <p className="text-white text-xs max-w-md text-center">
    Are you a manufacturer of quality power solutions? Partner with Jurian Power to expand your market reach.
  </p>
  <button
    className="bg-white px-4 py-2 font-semibold rounded"
    style={{ color: '#41B26A' }}
  >
    Contact Us
  </button>
</div>

    </div>
  );
}

export default Brands;
