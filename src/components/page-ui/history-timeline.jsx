"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const timelineEvents = [
  {
    period: "Ancient Times",
    title: "Hermitage of Rishi Kanva",
    description:
      "Kanvashram flourished as the revered hermitage of Rishi Kanva, cherished as the birthplace of Bharat and immortalized by Kalidasa’s Abhijnan Shakuntalam, laying the spiritual foundation.",
    image: "/guru/kanva-rishi.jpg",
  },
  {
    period: "1947–1950s",
    title: "Birth & Vedic Initiation of Swami Vishwapal",
    description:
      "Born on India’s independence day, Vishwapal Jayant’s Upanayana and Vedic studies at Gurukul Mahavidyalaya marked his journey to become Swami Vishwapal Saraswati.",
    image: "/guru/swami-viswapal.jpg",
  },
  {
    period: "1955",
    title: "Revival of Kanva Ashram",
    description:
      "Nehru’s vision in Moscow and the foundation stone laying by dignitaries rekindled national focus on Kanva Ashram’s cultural and spiritual legacy.",
    image: "/guru/kanvashram.jpg",
  },
  {
    period: "1960s–1970s",
    title: "Establishment & Growth of Gurukul Kanvashram",
    description:
      "From yogic feats and the title ‘Modern Bhima’ to founding Gurukul Kanvashram and overcoming wilderness challenges, a tradition of discipline was established.",
    image: "/guru/growth.jpeg",
  },
  {
    period: "Lifetime",
    title: "Global Spiritual Legacy",
    description:
      "Swami Vishwapal’s dedication to yoga, Ayurveda, and international yoga camps spread the Gurukul ethos worldwide.",
    image: "/guru/global.jpg",
  },
];

const cardVariants = {
  hidden: (isLeft) => ({
    opacity: 0,
    x: isLeft ? -60 : 60,
    y: 30,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function HistoryTimeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden rounded-[1.75rem] border border-[#e2d5c1]/70 p-2 md:p-10 bg-gradient-to-b from-[#F2F2EB] to-[#F8F8F2]">
      <div className="mx-auto flex w-full max-w-full flex-col gap-16">

        <header className="text-center space-y-4">
          <h1 className="font-serif text-3xl font-semibold text-[#88734C] sm:text-4xl lg:text-5xl">
            Eternal Heritage of Gurukul Kanvashram
          </h1>
        </header>

        <div className="hidden md:flex justify-between items-start relative">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.title}
              className="flex-1 flex flex-col items-center text-center relative"
              variants={prefersReducedMotion ? {} : cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index % 2 === 0}
              viewport={{ once: true }}
            >
              {index % 2 === 0 ? (
                <>
                  <TimelineImage src={event.image} alt={event.title} />
                  <TimelineContent
                    title={event.title}
                    description={event.description}
                  />
                </>
              ) : (
                <>
                  <TimelineContent
                    title={event.title}
                    description={event.description}
                  />
                  <TimelineImage src={event.image} alt={event.title} />
                </>
              )}
              {index < timelineEvents.length - 1 && (
                <span className="absolute top-1/2 left-full h-px w-16 bg-[#c1a062]" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-12 relative">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.title}
              className="flex flex-col items-center text-center relative"
              variants={prefersReducedMotion ? {} : cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index % 2 === 0}
              viewport={{ once: true }}
            >
              {index % 2 === 0 ? (
                <>
                  <TimelineImage src={event.image} alt={event.title} small />
                  <TimelineContent
                    title={event.title}
                    description={event.description}
                  />
                </>
              ) : (
                <>
                  <TimelineContent
                    title={event.title}
                    description={event.description}
                  />
                  <TimelineImage src={event.image} alt={event.title} small />
                </>
              )}
              {index < timelineEvents.length - 1 && (
                <span className="h-16 w-px bg-[#c1a062] mt-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineImage({ src, alt, small = false }) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={small ? 100 : 150}
        height={small ? 100 : 150}
        className="rounded-full object-cover border-4 border-[#e2d5c1]/70 shadow-md"
      />
      <span className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#c1a062]" />
    </div>
  );
}

function TimelineContent({ title, description }) {
  return (
    <div className="max-w-xs mt-4 space-y-2">
      <h3 className="font-serif text-lg font-semibold text-[#88734C]">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
