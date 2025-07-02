import React from "react";
import { FaUsers, FaHome, FaMicrophoneAlt, FaLaughBeam } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Networking",
    description:
      "How you transform your business as technology, consumer, habits industry dynamic",
    icon: <FaUsers className="text-gray-300 text-5xl absolute top-4 right-4" />,
  },
  {
    id: 2,
    title: "New People",
    description:
      "How you transform your business as technology, consumer, habits industry dynamic",
    icon: <FaHome className="text-gray-300 text-5xl absolute top-4 right-4" />,
  },
  {
    id: 3,
    title: "Great Speakers",
    description:
      "How you transform your business as technology, consumer, habits industry dynamic",
    icon: (
      <FaMicrophoneAlt className="text-gray-300 text-5xl absolute top-4 right-4" />
    ),
  },
  {
    id: 4,
    title: "Have Fun",
    description:
      "How you transform your business as technology, consumer, habits industry dynamic",
    icon: (
      <FaLaughBeam className="text-gray-300 text-5xl absolute top-4 right-4" />
    ),
  },
];

export default function WhyJoin() {
  return (
    <section className="bg-[#0f112e] py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Why you should <br /> Join Event
          </h2>
          <div className="flex gap-2 mb-6">
            <span className="w-4 h-1 bg-[#321B6F]"></span>
            <span className="w-4 h-1 bg-[#321B6F]"></span>
            <span className="w-4 h-1 bg-[#321B6F]"></span>
          </div>
          <p className="text-gray-300 mb-6 max-w-md">
            How you transform your business as tech, consumer, habits industry
            dynamic change, Find out from those leading the charge.
          </p>
          <button className="bg-[#321B6F] uppercase text-white px-6 py-3 rounded-md font-bold">
            Register Now
          </button>
        </div>

        {/* Right Side */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative bg-white shadow-md rounded-lg p-6 overflow-hidden"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
              <div className="absolute bottom-0 right-0 w-14 h-14 rounded-tl-full bg-[#321B6F] text-white flex items-center justify-center font-bold text-lg">
                {feature.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
