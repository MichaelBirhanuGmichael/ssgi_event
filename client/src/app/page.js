import React from "react";
import EventHero from "@/components/landing/hero";
import EventCountdown from "@/components/landing/nextEvent";
import TestimonialSlider from "@/components/landing/testimonial";
import Schedule from "@/components/landing/schedule";
import WhyJoin from "@/components/landing/whyJoin";
import EventSpeakers from "@/components/landing/eventSpeaker";
import SponsorsSection from "@/components/landing/sponsors";

export default function Home() {
  return (
    <>
      <EventHero />
      <WhyJoin />
      <EventCountdown />
      <Schedule />
      <EventSpeakers />
      <SponsorsSection />
      <TestimonialSlider />
    </>
  );
}
