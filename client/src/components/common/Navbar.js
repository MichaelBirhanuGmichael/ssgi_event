import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute top-0  max-w-[1440px] mx-auto w-full px-6 py-4 flex justify-between items-center z-20 bg-transparent">
      <div className="text-xl font-bold tracking-wide">
        <Image
          src="/images/ssgiLogo.png"
          alt="SSGI Logo"
          width={150}
          height={100}
          className="h-10"
        />
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
        <a href="#about" className="hover:text-white">
          Event 1
        </a>
        <a href="#event" className="hover:text-white">
          Event 2
        </a>
        <a href="#speaker" className="hover:text-white">
          Event 3
        </a>
        <a href="#ticket" className="hover:text-white">
          Event 4
        </a>
        <a href="#blogs" className="hover:text-white">
          Event 5
        </a>
        <button className="ml-4 bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 rounded-md text-white font-semibold">
          Contact
        </button>
      </nav>
    </header>
  );
}
