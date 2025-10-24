"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FaBed, FaSnowflake, FaShower, FaWifi, FaUtensils, FaSpa } from "react-icons/fa";
import Link from "next/link";

const rooms = [
  {
    name: "VIP Room",
    image: "https://i.pinimg.com/1200x/b7/8c/5d/b78c5d3741784b69fd99acc2f76750a0.jpg",
    price: 3000,
    amenities: ["Bed", "AC", "Bathroom", "Meditation Space", "WiFi", "Meals"],
  },
  {
    name: "AC Room",
    image: "https://i.pinimg.com/1200x/95/82/f3/9582f37577bdaf193bbfcf85b59c9c81.jpg",
    price: 2000,
    amenities: ["Bed", "AC", "Bathroom", "Meditation Space", "Meals"],
  },
  {
    name: "4-Bed Room",
    image: "https://i.pinimg.com/1200x/2f/13/f6/2f13f6186c1d407ea91dcecbd03bc3e4.jpg",
    price: 1000,
    amenities: ["Bed", "Bathroom", "Meditation Space", "Meals"],
  },
];

const amenityIcons = {
  Bed: <FaBed className="text-green-600" />,
  AC: <FaSnowflake className="text-blue-400" />,
  Bathroom: <FaShower className="text-gray-500" />,
  WiFi: <FaWifi className="text-purple-500" />,
  Meals: <FaUtensils className="text-yellow-500" />,
  "Meditation Space": <FaSpa className="text-indigo-500" />,
};

export function AshramStay() {
  return (
    <section className="py-8 bg-beige-50">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 px-1">
            {rooms.map((room) => (
              <CarouselItem key={room.name} className="pl-2 md:basis-1/3 my-4">
                <Card className="shadow-md rounded-xl overflow-hidden hover:scale-101 transition-transform duration-300 h-52 py-0 border-green-500 hover:border-green-700">
                  <div className="flex flex-row h-full">
                    <div className="w-1/3">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-1/3 p-4 px-2 flex flex-col justify-between">
                      <div>
                        <CardHeader className="p-0">
                          <CardTitle className="text-lg font-semibold">{room.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-2">
                          <div className="flex flex-wrap gap-1">
                            {room.amenities.map((amenity) => (
                              <div
                                key={amenity}
                                className="flex items-center gap-1 py-0.5 rounded-full text-xs font-medium"
                              >
                                {amenityIcons[amenity]} <span>{amenity}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </div>
                    </div>
                    <div className="w-1/3 p-2 flex flex-col justify-end items-end border-l border-green-700 relative">
                      <p className="text-red-500 text-sm font-semibold absolute top-2">10% off</p>
                      <div className="text-right">
                        <p className="text-gray-500 line-through font-medium text-base">
                          ₹{(room.price * 1.1).toFixed(0)}
                        </p>
                        <p className="text-green-700 font-bold text-base">₹{room.price}/night</p>
                      </div>
                      <Link href={'/stay'}>
                        <Button className="bg-green-700 hover:bg-green-800 text-white w-full text-sm py-1 mt-2 cursor-pointer">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </Carousel>
      </div>
    </section>
  );
}