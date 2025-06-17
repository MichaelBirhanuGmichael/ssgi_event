"use client";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/BG/footer.jpg"
          alt="Background Lines"
          fill
          className="object-cover brightness-70"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-16 flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/ssgiLogo.png"
              alt="SSGI Logo"
              width={150}
              height={100}
              className="rounded-full"
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-100 max-w-xl mb-6">
            The Space Science and Geospatial Institute (SSGI) is Ethiopia&#39;s
            leading institution dedicated to advancing space science, satellite
            technology, and geospatial solutions. Our mission is to drive
            sustainable development through cutting-edge research, satellite
            data applications, and innovation in Earth observation and space
            technology. From Earth to space, we empower decision-makers,
            researchers, and communities across Ethiopia and beyond.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 text-white mb-6">
            <Icon icon="mdi:twitter" width="20" />
            <Icon icon="mdi:linkedin" width="20" />
            <Icon icon="mdi:instagram" width="20" />
            <Icon icon="mdi:facebook" width="20" />
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 border border-white rounded hover:bg-white hover:text-[#0b4b46] transition"
          >
            <Icon icon="mdi:arrow-up" width="18" />
            BACK TO TOP
          </button>
        </div>

        {/* Middle Section - Site Map */}
        <div className="w-full md:w-1/4">
          <h2 className="text-sm font-semibold uppercase mb-4">Site Map</h2>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><a href="#" className="hover:underline">Homepage</a></li>
            <li><a href="#" className="hover:underline">Technology</a></li>
            <li><a href="#" className="hover:underline">Ataraxis Breast</a></li>
            <li><a href="#" className="hover:underline">Resources & News</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Portal</a></li>
          </ul>
        </div>

        {/* Right Section - Legal */}
        <div className="w-full md:w-1/4">
          <h2 className="text-sm font-semibold uppercase mb-4">Legal</h2>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Services</a></li>
            <li><a href="#" className="hover:underline">Lawyer’s Corners</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 text-white text-center text-sm md:text-md py-4 border-t border-white/20">
        © 2025 Ethiopian Space Science & Geospatial Institute. All Rights Reserved.
      </div>
    </footer>
  );
}
