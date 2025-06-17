"use client";
import React from "react";
import Navbar from "../common/Navbar";
import Image from "next/image";

const featuredEvents = [
  {
    title: "Digital thinkers meetup",
    date: "29 Jan",
    location: "Grand Chapiteau",
    image: "/images/sampleOne.jpg",
    buttonStyle: "bg-gray-100 text-black hover:bg-gray-200",
  },
  {
    title: "Web design conference 2023",
    date: "29 Jan",
    location: "Grand Chapiteau",
    image: "/images/sampleTwo.jpg",
    buttonStyle: "bg-gray-100 text-black hover:bg-gray-200",
  },
  {
    title: "Digital Economy Conference 2023",
    date: "29 Jan",
    location: "Grand Chapiteau",
    image: "/images/sampleThree.jpg",
    buttonStyle: "bg-black text-white hover:bg-gray-900",
  },
];

export default function EventifyHero() {
  return (
    <section className="relative text-white min-h-screen flex items-center justify-center px-4 bg-[url('/images/BG/heroBG.jpg')] bg-no-repeat bg-cover overflow-hidden">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-[url('/images/BG/pattern.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f2e]/20 to-[#0f112e]/95"></div>

      {/* Left animated background */}
      <div className="absolute left-0 top-0 w-1/2 h-full hidden md:block z-0">
        <div className="w-full h-full bg-[url('/images/BG/space-night.jpg')] bg-cover bg-left animate-pulse-slow"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 pt-20">
        {/* Left content */}
        <div className="w-full text-left space-y-6 px-4 sm:px-6 md:px-0 max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight">
            The Ultimate Platform for 
            Planning and Promoting 
            Successful Events
          </h1>

          <p className="text-gray-300 text-sm sm:text-base">
            Eventify is a leading event and conference website that brings
            together industry experts, thought leaders, and enthusiasts from
            around the world to share knowledge, network, and make lasting
            connections.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-400">
            <div>
              <p className="uppercase tracking-wider text-xs sm:text-sm">
                9 June 2023
              </p>
              <p className="font-medium text-white text-sm sm:text-base">
                Get Inside in The Philosopher&apos;s Mind
              </p>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 w-full sm:w-auto">
              Buy Tickets
            </button>
          </div>

          <a
            href="#about"
            className="text-sm text-indigo-400 underline inline-block"
          >
            See more about us
          </a>
        </div>

        <div className="relative w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar">
          <div className="flex -space-x-20 px-4 h-[22rem] md:h-[26rem]">
            {featuredEvents.map((event, index) => {
              const blur =
                index === 0 ? "blur-none" : index === 1 ? "blur-sm" : "blur-md";
              const scale =
                index === 0
                  ? "scale-100"
                  : index === 1
                  ? "scale-95"
                  : "scale-90";
              const opacity = index === 0 ? "opacity-100" : "opacity-90";

              // 👇 Earlier cards should have higher z-index
              const zIndex = 100 - index;

              return (
                <div
                  key={index}
                  className={`flex-shrink-0 snap-center relative rounded-xl overflow-hidden shadow-lg border border-white/10 bg-cover bg-center transition-all duration-500 hover:scale-100 hover:blur-none hover:opacity-100 ${blur} ${scale} ${opacity}`}
                  style={{
                    backgroundImage: `url(${event.image})`,
                    width: "70%",
                    minWidth: "70%",
                    zIndex: zIndex,
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end">
                    <p className="text-sm text-purple-300">
                      {event.date} • {event.location}
                    </p>
                    <h3 className="text-lg font-semibold text-white mt-1">
                      {event.title}
                    </h3>
                    <button
                      className={`mt-3 px-3 py-1 ${event.buttonStyle} text-sm rounded w-max`}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
