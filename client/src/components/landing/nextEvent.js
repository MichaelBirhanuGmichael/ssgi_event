"use client";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import React from "react";


const EventCountdown = () => {
  const eventDate = new Date("2025-06-20T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-[url('/images/BG/eventCountdownBG.jpg')] bg-cover bg-no-repeat flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-700 uppercase mb-4">
          Join us for our upcoming event!
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          The <span className="text-purple-600">Future of Technology</span>{" "}
          Conference
        </h1>

        <div className="flex justify-center gap-6 mb-6 text-purple-600 text-3xl font-semibold">
          <div className="text-center">
            <div>{timeLeft.days.toString().padStart(2, "0")}</div>
            <div className="text-xs text-gray-600 mt-1">DAYS</div>
          </div>
          <div className="text-center">
            <div>{timeLeft.hours.toString().padStart(2, "0")}</div>
            <div className="text-xs text-gray-600 mt-1">HOURS</div>
          </div>
          <div className="text-center">
            <div>{timeLeft.minutes.toString().padStart(2, "0")}</div>
            <div className="text-xs text-gray-600 mt-1">MINUTES</div>
          </div>
          <div className="text-center">
            <div>{timeLeft.seconds.toString().padStart(2, "0")}</div>
            <div className="text-xs text-gray-600 mt-1">SECONDS</div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 text-gray-600 text-sm mb-6">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">
              <Icon icon="ph:calendar-blank" width="25" height="25" />
            </span>
            April 15–17, 2025
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">
              <Icon icon="ph:map-pin" width="25" height="25" />
            </span>
            Addis Ababa, Ethiopia
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button className="border border-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
            VIEW DETAILS
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventCountdown;
