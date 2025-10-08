"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const gurusData = [
    {
        id: 2,
        name: "Yogirishi Ashutosh Ji Maharaj",
        position: "Spiritual Head",
        image: "/guru/guru2-bg.png",
    },
    {
        id: 3,
        name: "Yogi Naveen Joshi Ji",
        position: "Yoga Master",
        image: "/guru/guru3-bg.png",
    },
    {
        id: 4,
        name: "Yogirishi Vishwaketu Ji",
        position: "Meditation Guide",
        image: "/guru/guru4-bg.png",
    },
    {
        id: 5,
        name: "Dr. Partibha Mamgain",
        position: "Vedic Scholar",
        image: "/guru/guru5-bg.png",
    },
    {
        id: 6,
        name: "Dr. Ravindra Kumar Mamgain",
        position: "Vedic Scholar",
        image: "/guru/guru6-bg.png",
    },
];

export default function GurusImage() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

    return (
        <section className="w-full py-5 md:py-10 lg:py-12 bg-gradient-to-b from-[#F2F2EB] to-[#f5f5b5]">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        Our Spiritual Guides
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Meet the enlightened souls who guide us on the path of spirituality
                        and self-realization
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    <div className="w-full lg:w-2/5 order-1 lg:order-1">
                        <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/guru/guru1-bg.png"
                                alt="Yogi Swami Jayant Saraswati"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-end">
                                <div className="p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Yogi Swami Jayant Saraswati</h3>
                                    <p className="text-amber-200 font-medium">Ashram Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-full lg:w-3/5 order-2 lg:order-2">
                        <Carousel
                            plugins={[plugin.current]}
                            className="w-full"
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                        >
                            <CarouselContent className="-ml-2 md:-ml-4">
                                {gurusData.map((guru) => (
                                    <CarouselItem
                                        key={guru.id}
                                        className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/2 xl:basis-1/3"
                                    >
                                        <div className="p-2">
                                            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white rounded-2xl p-0">
                                                <div className="relative aspect-[3/4] overflow-hidden">
                                                    <div className="w-full h-full bg-gradient-to-br from-amber-100 to-blue-100 flex items-center justify-center">
                                                        <span className="text-slate-400 text-sm">
                                                            Guru Image
                                                        </span>
                                                        <Image
                                                            src={guru.image}
                                                            alt={guru.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>

                                                    <div className="team-content">
                                                        <p className="team-name">{guru.name}</p>
                                                        {/* <p className="team-position">{guru.position}</p> */}
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <div className="flex justify-center gap-4 mt-8">
                                <CarouselPrevious className="relative static transform-none bg-white border-2 border-slate-200 hover:bg-slate-50 hover:border-amber-200 text-slate-700" />
                                <CarouselNext className="relative static transform-none bg-white border-2 border-slate-200 hover:bg-slate-50 hover:border-amber-200 text-slate-700" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .team-content {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    top: auto;
                    z-index: 9;
                    margin: auto;
                    background: linear-gradient(
                        0deg,
                        rgba(136, 115, 76, 0.95) 40%, 
                        rgba(136, 115, 76, 0.1) 100%   
                    );
                    padding: 20px 15px 15px;
                    transform: translateY(0);
                    transition: all 0.3s ease;
                }
                .team-name {
                    color: white;
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 0.25rem;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                }

                .team-position {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 0.875rem;
                    font-weight: 400;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                }

                .relative:hover .team-content {
                    background: linear-gradient(
                        0deg,
                        rgba(136, 115, 76, 0.95) 40%, 
                        rgba(136, 115, 76, 0.1) 100%   
                    );
                    padding-bottom: 20px;
                }
            `}</style>
        </section>
    );
}