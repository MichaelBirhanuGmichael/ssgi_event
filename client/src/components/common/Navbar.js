/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <header className="bg-[#0f112e] md:my-2 md:rounded-2xl w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center z-40 ">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <a href="/" className="flex items-center">
            <Image
              src="/images/ssgiLogo.png"
              alt="SSGI Logo"
              width={150}
              height={100}
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="/about" className="hover:text-white">
            About Us
          </a>
          <a href="/gallery" className="hover:text-white">
            Gallery
          </a>
          <a href="/events" className="hover:text-white">
            Events
          </a>
          <a href="/contact">
            <button className="ml-4 bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 rounded-md text-white font-semibold">
            Contact
          </button>
          </a>
          
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-300 focus:outline-none z-50"
          onClick={() => setIsOpen(true)}
        >
          <Icon icon="mdi:menu" width={28} />
        </button>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-30"
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#0f172a] text-white z-40 p-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-300"
        >
          <Icon icon="mdi:close" width={24} />
        </button>

        {/* Navigation Links */}
        <nav className="mt-12 flex flex-col gap-5 text-sm">
          <a href="/about" className="hover:text-white">
            About Us
          </a>
          <a href="/gallery" className="hover:text-white">
            Gallery
          </a>
          <a href="/events" className="hover:text-white">
            Events
          </a>
          <button className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 rounded-md text-white font-semibold">
            Contact
          </button>
        </nav>
      </div>
    </div>
  );
}
