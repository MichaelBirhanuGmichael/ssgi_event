import React from "react";
import { Globe, Settings, SlidersHorizontal, Megaphone } from "lucide-react";


export default function AboutSection() {
  return (
    <section className="bg-[#0f112e] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Who We Are */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">WHO WE ARE</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Eventify is a comprehensive platform for organizing and promoting events,
            conferences, and other industry-related gatherings. Our team of experienced
            professionals is dedicated to providing unparalleled event management solutions
            that help you streamline your event planning process and maximize your ROI. We
            believe that events are powerful tools for driving growth, innovation, and success,
            and we’re committed to helping you make the most of every opportunity.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:opacity-90 transition">
            CONTACT
          </button>
        </div>

        {/* Right: Benefits */}
        <div>
          <h3 className="text-lg text-gray-300 mb-4">Benefits of Choosing SSGI</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 bg-[#101437] border border-gray-600 rounded-md overflow-hidden">
            <div className="p-6 text-center bg-gradient-to-b from-purple-500/30 to-transparent border-r border-gray-600">
              <Globe className="mx-auto mb-2 text-purple-400" size={28} />
              <p className="text-sm">Global Network</p>
            </div>
            <div className="p-6 text-center border-r border-gray-600">
              <Settings className="mx-auto mb-2 text-indigo-400" size={28} />
              <p className="text-sm">Advanced Tools</p>
            </div>
            <div className="p-6 text-center border-r border-gray-600">
              <SlidersHorizontal className="mx-auto mb-2 text-indigo-400" size={28} />
              <p className="text-sm">Customizable Pages</p>
            </div>
            <div className="p-6 text-center">
              <Megaphone className="mx-auto mb-2 text-indigo-400" size={28} />
              <p className="text-sm">Powerful Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
