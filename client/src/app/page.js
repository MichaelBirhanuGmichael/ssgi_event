import React from "react";
import EventHero from "@/components/landing/hero";
import AboutSection from "@/components/landing/about";
import EventCountdown from "@/components/landing/nextEvent";
import FeaturedEvents from "@/components/landing/featuredEvents";

export default function Home() {
  return (
    <>
      <EventHero />
      <AboutSection />
      <EventCountdown />
      <FeaturedEvents />
    </>
  );
}
