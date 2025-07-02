import React from "react";
import { Globe, Settings, SlidersHorizontal, Megaphone } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="text-[#0f112e] py-20 px-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Who We Are */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">WHO WE ARE</h2>
          <p className="text-[#0f112e] leading-relaxed mb-6">
            The Ethiopian Space Science and Geospatial Institute (ESSGI) is a
            national institution dedicated to advancing Ethiopia’s presence in
            space science, satellite technology, and geospatial research. As a
            pioneer in the region, ESSGI plays a pivotal role in driving
            scientific innovation, enhancing national development through
            space-based data, and promoting STEM education. Through satellite
            missions, Earth observation programs, and cutting-edge research, the
            institute empowers decision-making in agriculture, urban planning,
            environmental management, and disaster response. 
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:opacity-90 transition">
            CONTACT
          </button>
        </div>

        {/* Right: Benefits */}
        <div>
          <h3 className="text-lg text-[#0f112e] mb-4">
            Benefits of Choosing SSGI
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 bg-[#101437] border border-gray-600 rounded-md overflow-hidden">
            <div className="p-6 text-center bg-gradient-to-b from-purple-500/30 to-transparent border-r border-gray-600">
              <Globe className="mx-auto mb-2 text-purple-400" size={28} />
              <p className="text-sm text-white">Global Network</p>
            </div>
            <div className="p-6 text-center border-r border-gray-600">
              <Settings className="mx-auto mb-2 text-indigo-400" size={28} />
              <p className="text-sm text-white">Advanced Tools</p>
            </div>
            <div className="p-6 text-center border-r border-gray-600">
              <SlidersHorizontal
                className="mx-auto mb-2 text-indigo-400"
                size={28}
              />
              <p className="text-sm text-white">Customizable Pages</p>
            </div>
            <div className="p-6 text-center">
              <Megaphone className="mx-auto mb-2 text-indigo-400" size={28} />
              <p className="text-sm text-white">Powerful Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
