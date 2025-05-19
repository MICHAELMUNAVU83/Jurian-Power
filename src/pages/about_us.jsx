import React from "react";
import { Icon } from "@iconify/react";

function AboutUs() {
  return (
    <div className="py-12 md:px-16 from-white-100 to-white via-green-50 bg-gradient-to-b">
      <div className="bg-gradient-to-b p-4 from-green-100 to-white via-green-50 h-[200px] flex flex-col items-center justify-center w-full">
        <h1
          className="text-5xl  font-bold"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          About Jarian{" "}
          <span
            className="text-[#41B26A] italic font-normal"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            Power
          </span>
        </h1>

        <p className="text-sm text-gray-600">
          We specialize in the sales, installation, and maintenance of diesel
          generators, as well as related services.
        </p>
      </div>

      {/* Our Vision */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-12 py-6">
        <div className="md:w-1/2 w-full space-y-2">
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="text-lg font-medium">
            We strive to be the leading provider of top-quality products from
            industry-leading manufacturers ensuring reliability and excellence.
          </p>
          <ul className="list-disc list-inside text-base text-gray-700">
            <li>
              Offering 24/7 expert maintenance and support to keep your
              equipment running smoothly.
            </li>
            <li>
              Providing flexible payment solutions tailored to meet our
              customers' unique needs.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src="/images/image1.png"
            alt="About Us"
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Our Core Values */}
      <div className="w-full px-4 md:px-12 py-6">
        <h2
          className="text-4xl font-bold mb-4 text-center"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Reliability",
              description:
                "We understand that power is not just a convinience, it is a necessity. Our solutions are designed to be reliable, so you can count on them when you need the most.",
            },
            {
              title: "Innovation",
              description:
                "we continously seek out the latest technologies and methodologies to provide you with the most efficient, cost-effective, and enviromentally friendly power solutions.",
            },
            {
              title: "Integrity",
              description:
                "We uphold the highest standards of proffessionalism and ethics in every aspect of our work. You can trust us to deliver on our promises and act in your best interest all times.",
            },
            {
              title: "Transparency & Honesty",
              description:
                "We believe in open communication and complete honesy with our clients. From pricing to project timelines, we ensure you're always informed and never left in the dark.",
            },
            {
              title: "Quality workship",
              description:
                "We take pride in the decission and skill behind every installation. Our team delivers meticulous, long-lasting results that reflect our commitment to excellence.",
            },
            {
              title: "Affordability",
              description:
                "We sstrive to make reliable power accessible to everyone. Our solutions are completely priced withput compromisng on performance or quality.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-300 rounded-xl p-6 flex flex-col items-center justify-between text-center h-64"
            >
              <div>
                <div className="bg-gray-200 p-3 rounded-full w-fit mx-auto mb-3">
                  <Icon
                    icon="mdi:shield-tick-outline"
                    className="text-[#41B26A] text-2xl"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Mission */}
      <div className="w-full px-4 md:px-12 py-6 text-center">
        <h1
          className="text-4xl font-bold mb-2"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          Our Mission
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto bg-[#41B26A33] p-4 rounded-md">
          "At Jarian Power, we value work ethics. We are productive and
          accountable. We prioritize quality, safety, and reliability. We pay
          close attention to detail in every project."
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-12">
          {[
            { value: "10+", label: "Years of Experience" },
            { value: "200+", label: "Installations Completed" },
            { value: "200+", label: "Happy Customers" },
            { value: "24/7", label: "Emergency Support" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#41B26A33] text-black text-lg font-semibold">
                {stat.value}
              </div>
              <p className="mt-2 text-sm font-medium text-gray-800">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
