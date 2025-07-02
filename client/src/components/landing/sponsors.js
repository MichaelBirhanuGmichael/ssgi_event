"use client";
import React from "react";
import Image from "next/image";

const sponsors = [
  "/images/sponsors/MF.png",
  "/images/sponsors/MFA.png",
  "/images/sponsors/MH.jfif",
  "/images/sponsors/MINT.jpg",
  "/images/sponsors/Prime_Minister_office.jpg",
];

export default function SponsorsSection() {
  return (
    <div className="bg-[url('/images/BG/sponsor.jpg')] bg-cover bg-no-repeat text-white py-28 px-4 text-center">
      {/* Title */}
      <div className="mb-20">
        <p className="text-md uppercase tracking-widest text-white">Who helps us</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Sponsors</h2>
        <div className="mt-3 flex justify-center">
          <div className="w-6 h-1 bg-pink-400 mx-1"></div>
          <div className="w-6 h-1 bg-pink-400 mx-1"></div>
          <div className="w-6 h-1 bg-pink-400 mx-1"></div>
        </div>
      </div>

      {/* Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center max-w-6xl mx-auto mb-12">
        {sponsors.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Sponsor ${index + 1}`}
            className=" mx-auto"
            width={150}
            height={150}
          />
        ))}
      </div>

      {/* CTA Button
      <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded shadow-md transition">
        BECOME A SPONSOR
      </button> */}
    </div>
  );
}
