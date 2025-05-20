import React from "react";
import { Icon } from "@iconify/react";

const Landing = () => {
  return (
    <div className="w-full bg-white pt-12 pb-8">
      {/* Headline and subheadline */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Powering Your World with
        </h1>
        <h2 className="text-3xl md:text-4xl italic text-[#41B26A] font-medium mb-4">
          Reliable Energy Solutions
        </h2>
        <p className="text-gray-700 mb-6">
          Jarian Power provides top-quality generators, maintenance contracts,
          and electrical services to keep your business or home running
          smoothly.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="tel:0790064777"
            rel="noopener noreferrer"
            className="bg-[#41B26A] text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-[#369a59] transition"
          >
            Request A Quote
          </a>
          <a
            href="tel:0790064777"
            rel="noopener noreferrer"
            className="bg-white border border-[#41B26A] text-[#41B26A] px-6 py-2 rounded-md font-semibold shadow hover:bg-[#41B26A] hover:text-white transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Main image and gallery */}
      <div className="relative w-full md:w-[1200px] mx-auto">
        {/* Main image */}
        <div
          className="rounded-3xl shadow-xl mx-auto w-full md:w-[1200px] overflow-hidden relative"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(65,178,106,0.15), 0 1.5px 8px 0 rgba(65,178,106,0.10)",
          }}
        >
          <img
            src="/images/hero.jpg" // replace with your main image path
            alt="Main Generator"
            className="w-full h-[500px] object-cover"
          />
        </div>
        {/* Four images below */}
        <div className="justify-center md:flex hidden gap-4 mt-[40px] absolute -bottom-28 left-0 w-full z-10">
          <img
            src="/images/herosection1.png"
            alt="Hero 1"
            className="w-1/4  h-[300px] object-cover rounded-2xl shadow"
          />
          <img
            src="/images/herosection2.png"
            alt="Hero 2"
            className="w-1/4  h-[300px] object-cover rounded-2xl shadow"
          />
          <img
            src="/images/herosection3.png"
            alt="Hero 3"
            className="w-1/4  h-[300px] object-cover rounded-2xl shadow"
          />
          <img
            src="/images/brand.png"
            alt="Brand Main"
            className="w-1/4  h-[300px] object-cover rounded-2xl shadow"
          />
        </div>
      </div>

      {/* Our Power Solutions Section */}
      <div className="px-4 sm:px-6 py-10 md:mt-28 mt-8 ">
        <div className="font-bold mb-6 text-left max-w-xl">
          <h1
            className="text-2xl md:text-4xl"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            Our Power
            <span
              style={{ fontFamily: '"Instrument Serif", serif' }}
              className="text-[#41B26A]"
            >
              {" "}
              Solutions
            </span>
          </h1>
          <p className="font-normal text-sm mt-2 text-gray-700">
            From generators to electrical services, we provide comprehensive
            power solutions for both businesses and residences.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Generator Installation",
              description:
                "Purchase and professional installlation of generators tailored to your needs.",
              icon: "icomoon-free:switch",
            },
            {
              title: "Maintenance Contact",
              description:
                "Regular maintenance to ensure your power runs smoothly.",
              icon: "material-symbols:settings-outline-rounded",
            },
            {
              title: "Genset Repair",
              description:
                "Expert repair services for all types of generator sets.",
              icon: "hugeicons:repair",
            },
            {
              title: "On-Call Service",
              description:
                "24/7 emergency services for unexpected power issues.",
              icon: "ri:time-line",
            },
            {
              title: "Spare Parts",
              description:
                "High-quality replacement parts for various generator brands.",
              icon: "mdi:cube-outline",
            },
            {
              title: "Elecrical Services",
              description:
                "Custom electrical solutions tailored to your specific requirements.",
              icon: "material-symbols-light:electric-bolt-outline-rounded",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-300 rounded-xl p-6 flex flex-col justify-between h-64"
            >
              <div>
                {/* Icon on top */}
                <div className="bg-[#41B26A] p-2 w-10 h-10 flex items-center justify-center rounded-sm mb-4">
                  <Icon icon={item.icon} className="text-white text-xl" />
                </div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <button className="mt-4 text-green-600 font-medium flex items-center gap-1 hover:underline">
                Learn More <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="bg-[#41B26A] w-full py-10 px-4 sm:px-8">
        <div className="text-white text-center">
          <h1
            className="text-2xl sm:text-4xl font-bold"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            How It{" "}
            <span style={{ fontFamily: '"Instrument Serif", serif' }}>
              Works
            </span>
          </h1>
          <p className="text-xs sm:text-sm">
            Our simple process makes it easy to get the power solutions you
            need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-6">
          {[
            {
              title: "Identify your need",
              description:
                "Determine what kind of power solution you require for your home or business.",
            },
            {
              title: "Explore solutions",
              description:
                "Browse our products and services to find what best fits your requirement.",
            },
            {
              title: "Contact Us",
              description:
                "Reach to our team for professional advice and to schedule our services.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-300 rounded-xl p-6 flex flex-col justify-between h-auto w-full max-w-sm mx-auto text-center"
            >
              <div>
                <div className="w-6 h-6 rounded-full bg-[#41B26A] text-white flex items-center justify-center text-sm font-semibold mb-2 mx-auto">
                  {i + 1}
                </div>
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why choose us */}
      <div className="w-full h-auto px-4 md:px-8 py-6">
        <div>
          <h1
            className="mt-4 text-2xl sm:text-4xl font-bold"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            Why Choose{" "}
            <span
              style={{ fontFamily: '"Instrument Serif", serif' }}
              className="text-[#41B26A]"
            >
              Us
            </span>
          </h1>
          <p className="text-sm text-black">
            From generators to electrical services, we provide comprehensice
            power solutions for both businesses and residence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-between gap-6 py-10">
          <div className="md:w-1/2">
            <div className="flex flex-col justify-end h-full">
              <h2 className="text-2xl font-semibold mb-2">
                24/7 Emergency Support
              </h2>
              <p className="text-gray-700 text-sm">
                When your power system fails, timing is critical. That's why our
                technicians are available around the clock-every day of the
                week. Whether it's a breakdown in the middle of the night or a
                weekend emergency, our team is just a phone call away. You get
                quick, expert support without delays
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-72 sm:h-96">
            <img
              src="/images/landing1.png"
              alt="Emergency Support"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:py-6">
          <div className="w-full md:w-1/2 h-72 sm:h-96">
            <img
              src="/images/landing2.png"
              alt="Spare Parts"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 md:px-6 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold mb-2">
              Genuine OEM Spare Parts
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We only use Original Equipment Manufacturer (OEM) parts in all
              repairs and replacements. That means every component- from filters
              to controllers- is built to last and approved by the original
              brand. No counterfeits, no guesswork just quaranteed performance
              and diurability.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:py-6">
          <div className="w-full md:w-1/2 flex items-end md:p-6 min-h-[300px]">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Trusted Global Brands
              </h2>
              <p>
                We partner with globally recognized brands like Perkins, Volvo,
                Cummins and CAT. These brands are known for quality, effciency,
                and long-term reliability. When you choose us, you're getting
                provwn technology backed by expert local service.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            {[
              "landing3.png",
              "landing4.png",
              "landing5.png",
              "landing6.png",
            ].map((img, i) => (
              <img
                key={i}
                src={`/images/${img}`}
                alt={`Brand ${i + 1}`}
                className="w-full h-[300px] object-contain rounded-lg"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 py-6">
          <div className="w-full md:w-1/2">
            <h1
              className="text-4xl font-bold"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Spare{" "}
              <span
                style={{ fontFamily: '"Instrument Serif", serif' }}
                className="text-[#41B26A]"
              >
                Parts
              </span>
            </h1>
            <p className="text-base text-gray-700 mt-2">
              Our company provides a full range of spare parts for generators...
            </p>
            <h2
              className="text-3xl font-semibold mt-6"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              We offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-lg">
              <ul className="list-disc list-inside space-y-1">
                <li>Fuel Filters</li>
                <li>Fuel Water Separators</li>
                <li>Fuel Pumps</li>
                <li>Lube Oil</li>
                <li>Belts</li>
                <li>All Electrical Controllers and Accessories</li>
              </ul>
              <ul className="list-disc list-inside space-y-1">
                <li>Oil Filters</li>
                <li>Overhaul Kits</li>
                <li>Coolants</li>
                <li>Batteries</li>
                <li>Radiators</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="/images/landing7.png"
              alt="Spare Parts"
              className="w-full max-h-[500px] object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Our clients */}
      <div className="bg-gray-200 w-full min-h-[300px] px-4 sm:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1
              className="text-4xl font-bold"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              What Our Clients{" "}
              <span
                className="text-[#41B26A]"
                style={{ fontFamily: '"Instrument Serif", serif' }}
              >
                Say
              </span>
            </h1>
            <p className="text-sm text-gray-700 mt-2">
              Don't just take our word for it. See what our customers have to
              say about our services.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-white rounded-full shadow hover:bg-green-300">
              ←
            </button>
            <button className="p-2 bg-white rounded-full shadow hover:bg-green-300">
              →
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 shadow-md h-40 flex flex-col justify-between"
              >
                <p className="text-gray-700 text-sm italic">
                  "Great service, quick response, and very professional. Will
                  definitely use them again."
                </p>
                <span className="text-xs text-gray-500 mt-2">— Client {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
