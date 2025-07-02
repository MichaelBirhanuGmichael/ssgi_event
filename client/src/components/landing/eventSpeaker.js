import React from "react";
import Image from "next/image";

const speakers = [
  {
    name: "James Killer",
    title: "Founder, Edilta",
    image: "/images/menPortrait.jpg",
  },
  {
    name: "Melisa Rock",
    title: "Lead Designer, Payol",
    image: "/images/womenPortrait.jpg",
  },
  {
    name: "Agaton Ronald",
    title: "Developer Expert",
    image: "/images/menPortrait.jpg",
  },
  {
    name: "Devid Arone",
    title: "Founder, Cards",
    image: "/images/womenPortrait.jpg",
  },
];

export default function EventSpeakers() {
  return (
    <section className="bg-[url('/images/BG/guests.jpg')] bg-cover bg-no-repeat py-20 px-6 text-center relative overflow-hidden">
      {/* Optional background dots */}
      <div className="absolute inset-0 bg-[url('/images/bg-dots.png')] bg-repeat opacity-10 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="uppercase text-gray-500 tracking-widest mb-2">
          Listen to the
        </p>
        <h2 className="text-4xl font-bold text-[#321B6F] mb-4">
          Event Speakers
        </h2>
        <div className="flex justify-center gap-2 mb-12">
          <span className="w-4 h-1 bg-[#321B6F]"></span>
          <span className="w-4 h-1 bg-[#321B6F]"></span>
          <span className="w-4 h-1 bg-[#321B6F]"></span>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <div className="w-48 h-48 flex justify-center items-center rounded-full overflow-hidden shadow-lg mb-4 mx-auto">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mt-4 font-semibold text-xl text-[#321B6F]">{speaker.name}</h3>
              <p className="text-purple-600 text-md">{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
