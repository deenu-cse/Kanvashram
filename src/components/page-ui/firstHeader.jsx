"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const ashramSections = [
  {
    id: 1,
    title: "Welcome to Kanvashram Ashram",
    image: "/homimg/homeimg1.png",
    quote: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
  },
  {
    id: 2,
    title: "Daily Satsang & Meditation",
    image: "/homimg/homimg2.png",
    quote: "The soul is the same in all living beings.",
    author: "Vedic Wisdom",
  },
  {
    id: 3,
    title: "Yoga & Wellness Programs",
    image: "/homimg/homeimg4.png",
    quote: "Yoga is the journey of the self, through the self, to the self.",
    author: "Bhagavad Gita",
  },
  {
    id: 4,
    title: "Vedic Learning Center",
    image: "/smarknew.jpg",
    quote: "Knowledge is the greatest treasure.",
    author: "Upanishads",
  },
];

const HomeHeader = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <section
      id="home-header"
      className="w-full h-screen relative overflow-hidden -mt-28"
    >
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full min-h-screen"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {ashramSections.map((section) => (
            <CarouselItem key={section.id} className="h-full">
              <div className="w-full h-full min-h-screen relative">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="absolute bottom-32 left-8 z-10">
                  <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    {section.title}
                  </h1>
                </div>

                <div className="absolute bottom-11 left-8 z-10 max-w-md">
                  <p className="text-amber-100 text-lg italic">
                    "{section.quote}"
                  </p>
                  <p className="text-amber-300 text-sm mt-1">
                    — {section.author}
                  </p>
                </div>

                <div className="absolute top-8 right-8 text-amber-200/20 text-6xl">
                  ॐ
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-6">
          <CarouselPrevious className="relative static transform-none bg-[#88734c9d] hover:bg-[#6756369d] text-amber-200 border-amber-500/30 hover:border-amber-500 w-12 h-12 rounded-full shadow-lg" />
          <div className="flex gap-3">
            {ashramSections.map((_, index) => (
              <button
                key={index}
                className="w-2 h-2 rounded-full bg-amber-200/40 hover:bg-amber-200 transition-colors duration-300"
              />
            ))}
          </div>
          <CarouselNext className="relative static transform-none bg-[#88734c9d] hover:bg-[#6756369d] text-amber-200 border-amber-500/30 hover:border-amber-500 w-12 h-12 rounded-full shadow-lg" />
        </div>
      </Carousel>
    </section>
  );
};

export default HomeHeader;
