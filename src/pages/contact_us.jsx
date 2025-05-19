import React from "react";
import { Icon } from "@iconify/react";

function ContactUs() {
  return (
    <div className="py-12 md:px-16 from-white-100 to-white via-green-50 bg-gradient-to-b">
      <div className="bg-gradient-to-b from-green-100 to-white via-green-50 h-[200px] flex flex-col items-center justify-center w-full">
        <h1
          className="text-5xl font-bold"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          Contact Jarian{" "}
          <span className="text-[#41B26A] font-normal">Power</span>
        </h1>

        <p className="text-sm">
          Have questions or ready to get started? We're here to help!
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-8 p-6 lg:p-12 bg-white rounded-xl shadow-md">
        {/* Left Side - Contact Info */}
        <div className="lg:w-1/2 space-y-6 text-gray-800">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <span
                className="w-7 h-7 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#41B26A33" }}
              >
                <Icon
                  icon="mdi:email"
                  className="w-4 h-4"
                  style={{ color: "#41B26A" }}
                />
              </span>
              Email
            </h1>

            <p>info@jarianpower.co.ke </p>
          </div>

          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <span
                className="w-7 h-7 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#41B26A33" }}
              >
                <Icon
                  icon="ic:baseline-call"
                  className="w-4 h-4"
                  style={{ color: "#41B26A" }}
                />
              </span>
              Phone
            </h1>
            <p>0790064777</p>
            <p>0704194918</p>
          </div>

          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <span
                className="w-7 h-7 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#41B26A33" }}
              >
                <Icon
                  icon="mdi:map-marker"
                  className="w-4 h-4"
                  style={{ color: "#41B26A" }}
                />
              </span>
              Address
            </h1>
            <p>Lunga Lunga Plaza</p>
            <p>Industrial Area</p>
            <p>Nairobi</p>
          </div>

          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <span
                className="w-7 h-7 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "#41B26A33" }}
              >
                <Icon
                  icon="mdi:clock-time-four-outline"
                  className="w-4 h-4"
                  style={{ color: "#41B26A" }}
                />
              </span>
              Business Hours
            </h1>
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
            <p>24/7 Emergency Service Available</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-[#41B26A]">
            Send Us A Message
          </h1>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm font-semibold">Full Name</label>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm font-semibold">
                Email Address
              </label>
              <input
                type="email"
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm font-semibold">Phone Number</label>
              <input
                type="tel"
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm font-semibold">
                Select a Subject
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 text-gray-600">
                <option>Select a subject</option>
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Sales</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">Message</label>
            <textarea
              rows="5"
              className="border border-gray-300 rounded px-3 py-2 resize-none w-full"
            ></textarea>

            <button className="mt-4 bg-[#41B26A] text-white px-6 py-3 rounded hover:bg-white hover:text-green-600 hover:border hover:border-green-600 transition duration-300 w-full">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
