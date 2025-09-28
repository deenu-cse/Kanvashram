'use client';

import { useState } from 'react';
import { AnimatedRoadmap } from '@/components/animated-roadmap';
import { MapPin, Train, Car, Plane, Navigation, Clock, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function HowToReachPage() {
    const milestonesData = [
        {
            id: 1,
            title: 'Starting Point',
            description: 'Begin your journey from the base camp',
            position: { x: 5, y: 85 },
            mobilePosition: { x: 3, y: 90 },
            icon: <span>📍</span>,
            distance: '0 km',
            duration: '0 days',
        },
        {
            id: 2,
            title: 'First Checkpoint',
            description: 'Reach the first milestone in your adventure',
            position: { x: 25, y: 35 },
            mobilePosition: { x: 25, y: 40 },
            icon: <span>🚩</span>,
            distance: '15 km',
            duration: '2 days',
        },
        {
            id: 3,
            title: 'Mountain Base',
            description: 'Prepare for the ascent at the mountain base',
            position: { x: 45, y: 60 },
            mobilePosition: { x: 45, y: 65 },
            icon: <span>⛰️</span>,
            distance: '30 km',
            duration: '4 days',
        },
        {
            id: 4,
            title: 'Halfway Point',
            description: "You've reached the halfway mark of your journey",
            position: { x: 65, y: 35 },
            mobilePosition: { x: 65, y: 40 },
            icon: <span>🎯</span>,
            distance: '45 km',
            duration: '6 days',
        },
        {
            id: 5,
            title: 'Final Ascent',
            description: 'Begin the final climb to your destination',
            position: { x: 85, y: 60 },
            mobilePosition: { x: 85, y: 65 },
            icon: <span>🧗</span>,
            distance: '60 km',
            duration: '8 days',
        },
        {
            id: 6,
            title: 'Destination',
            description: "Congratulations! You've reached Kanvashram",
            position: { x: 95, y: 40 },
            mobilePosition: { x: 97, y: 45 },
            icon: <span>🏁</span>,
            distance: '75 km',
            duration: '10 days',
        },
    ];

    const travelOptions = [
        {
            id: 'train',
            title: 'By Train',
            icon: Train,
            routes: [
                {
                    name: 'Masoorie Express',
                    from: 'Old Delhi Station',
                    to: 'Kotdwara',
                    departure: '10:10 PM',
                    arrival: '6:05 AM',
                    duration: '7 hours 55 mins',
                },
                {
                    name: 'Garhwal Express',
                    from: 'Delhi',
                    to: 'Kotdwara',
                    departure: '7:20 AM',
                    arrival: '2:15 PM',
                    duration: '6 hours 55 mins',
                },
            ],
        },
        {
            id: 'road',
            title: 'By Road',
            icon: Car,
            description: 'Delhi - Meerut - Mawana - Mirapur - Bijnore - Najibabad - Kotdwara',
            distance: '220 km',
            duration: '5-6 hours',
        },
        {
            id: 'air',
            title: 'By Air',
            icon: Plane,
            description: 'Nearest airport is Jolly Grant, Dehradun',
            distance: '115 km from Kotdwara',
            airlines: 'Jet Airways, Air India',
            duration: '1-2 hours',
        },
    ];

    const handleShowDirections = () => {
        window.open(
            'https://www.google.com/maps/place/Kanvashram./@29.792678,78.459305,38762m/data=!3m1!1e3!4m6!3m5!1s0x390965271842b213:0x74ca34785f95fa60!8m2!3d29.7926781!4d78.4593047!16s%2Fg%2F1vk6xlhh?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D',
            '_blank'
        );
    };

    return (
        <div className="relative -mt-28 min-h-screen bg-gradient-to-b from-amber-50 to-green-50 overflow-x-hidden">

            <section id="home-header" className="relative h-[470px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("/chapter_image/ashram.jpg")',
                    }}
                ></div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-amber-800/60 to-amber-900/70"></div>
                
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InRyYW5zcGFyZW50Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDUwSDEwME0xMDAgMEwwIDEwME0wIDBMMTAwIDEwME0wIDEwMEwxMDAgMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjAuMSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-10"></div>

                <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center mt-4">
                    <div className="text-center text-white">
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-wider">
                            How to Reach Kanvashram
                        </h1>
                        <div className="w-32 h-1 bg-amber-400 mx-auto mb-4"></div>
                        <p className="text-xl md:text-2xl font-serif italic text-amber-200 mb-8">
                            Journey to Spiritual Enlightenment
                        </p>
                        <Button
                            onClick={handleShowDirections}
                            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                            size="lg"
                        >
                            <Navigation className="w-5 h-5 mr-2" />
                            Show Me the Way
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-6">
                            Welcome to Kanvashram
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed font-serif">
                            Nestled in the divine land of Uttarakhand, known as{' '}
                            <span className="font-semibold text-amber-700">&quot;The Land of Gods&quot;</span> or{' '}
                            <span className="font-semibold text-amber-700">&quot;देवभूमी&quot;</span>,
                            Kanvashram is a spiritual sanctuary where ancient wisdom meets natural beauty. The closest
                            town is Kotdwara in Pauri Garhwal district, situated just 11 km away from this sacred
                            ashram.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-1 bg-amber-50 min-h-screen">
                <div className="container mx-auto px-4">
                    <AnimatedRoadmap
                        milestones={milestonesData}
                        mapImageSrc="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-SsfjxCJh43Hr1dqzkbFWUGH3ICZQbH.png&w=320&q=75"
                        aria-label="Animated roadmap showing travel routes to Kanvashram"
                    />
                </div>
            </section>

            <section className="py-16 bg-amber-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-amber-900 mb-12">
                        Detailed Travel Information
                    </h2>

                    <Carousel className="max-w-5xl mx-auto">
                        <CarouselContent>
                            {travelOptions.map((option) => (
                                <CarouselItem key={option.id} className="md:basis-1/2 lg:basis-1/3">
                                    <Card className="hover:shadow-xl transition-all duration-300 border-amber-200 flex flex-col h-full bg-white/80 backdrop-blur-sm">
                                        <CardContent className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center mb-4">
                                                <div className="bg-amber-100 p-3 rounded-full mr-4">
                                                    <option.icon className="w-8 h-8 text-amber-600" />
                                                </div>
                                                <h3 className="text-xl font-bold text-amber-900 font-serif">{option.title}</h3>
                                            </div>

                                            {option.id === 'train' ? (
                                                <div className="space-y-4 flex-grow">
                                                    {option.routes.map((route, index) => (
                                                        <div key={index} className="border-l-4 border-amber-300 pl-4">
                                                            <h4 className="font-semibold text-gray-800 font-serif">{route.name}</h4>
                                                            <div className="text-sm text-gray-600 space-y-1 mt-2">
                                                                <p className="flex items-center">
                                                                    <span className="mr-2">🛑</span>
                                                                    Departure: {route.departure}
                                                                </p>
                                                                <p className="flex items-center">
                                                                    <span className="mr-2">✅</span>
                                                                    Arrival: {route.arrival}
                                                                </p>
                                                                <p className="flex items-center">
                                                                    <span className="mr-2">⏱️</span>
                                                                    Duration: {route.duration}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="space-y-3 flex-grow flex flex-col justify-between">
                                                    <div>
                                                        <p className="text-gray-700 font-serif">{option.description}</p>
                                                    </div>
                                                    <div className="mt-4 space-y-2">
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <Clock className="w-4 h-4 mr-2" />
                                                            <span>{option.duration}</span>
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <MapPin className="w-4 h-4 mr-2" />
                                                            <span>{option.distance}</span>
                                                        </div>
                                                        {option.airlines && (
                                                            <div className="text-sm text-gray-600 flex items-center">
                                                                <Plane className="w-4 h-4 mr-2" />
                                                                Airlines: {option.airlines}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="block md:hidden" />
                        <CarouselNext className="block md:hidden -right-3" />
                    </Carousel>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                        Ready for Your Spiritual Journey?
                    </h2>
                    <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto font-serif">
                        Embark on a transformative journey to Kanvashram and experience the divine peace and
                        wisdom of this ancient ashram.
                    </p>
                    <Button
                        onClick={handleShowDirections}
                        className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                        size="lg"
                    >
                        <Navigation className="w-5 h-5 mr-2" />
                        Get Directions on Google Maps
                    </Button>
                </div>
            </section>
        </div>
    );
}