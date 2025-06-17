"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const testimonials = [
  {
    name: "Eren Yeager",
    location: "AAU, Ethiopia",
    image: "/images/menPortrait.jpg",
    message:
      "I’m feeling grateful to meet this service! It’s helped me a lot to manage my event properly, even there is huge audience around the world. I’ll use this service again in the future for sure!",
  },
  {
    name: "Jessica Lee",
    location: "AASTU, Ethiopia",
    image: "/images/womenPortrait.jpg",
    message:
      "Great team work from agenda! Even we discuss the event via online, they still make my event go smoothly and properly! It’s the best service for online event so far. I will use this service again and again! Thank you!",
  },
  {
    name: "Eren Yeager",
    location: "Addis Ababa, Ethiopia",
    image: "/images/menPortrait.jpg",
    message:
      "I’m feeling grateful to meet this service! It’s helped me a lot to manage my event properly, even there is huge audience around the world. I’ll use this service again in the future for sure!",
  },
  {
    name: "Jessica Lee",
    location: "Addis Ababa, Ethiopia",
    image: "/images/womenPortrait.jpg",
    message:
      "Great team work from agenda! Even we discuss the event via online, they still make my event go smoothly and properly! It’s the best service for online event so far. I will use this service again and again! Thank you!",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  // Determine how many cards to show
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const visibleTestimonials = isMobile
    ? testimonials.slice(current, current + 1)
    : testimonials.slice(current, current + 2);

  return (
    <section className="bg-[#0f112e] py-16 px-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6 md:gap-0">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-snug">
            What they think <br className="hidden sm:block" /> about us?
          </h2>

          {/* External Controls */}
          <div className="flex gap-4 self-start md:self-auto">
            <button
              onClick={prev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1c2275] text-white shadow hover:bg-[#131D4F] flex items-center justify-center"
            >
              <Icon icon="ph:caret-left-bold" width="20" height="20" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#3d406a] text-white shadow hover:bg-[#131D4F] flex items-center justify-center"
            >
              <Icon icon="ph:caret-right-bold" width="20" height="20" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleTestimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#0E2148] p-6 rounded-xl border border-gray-700 shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-purple-600">{t.location}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">{t.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
