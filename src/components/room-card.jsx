"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  WifiIcon,
  AirVentIcon,
  TreePineIcon,
  BedIcon,
  BathIcon,
  CoffeeIcon,
  FlowerIcon,
  UtensilsIcon,
  MapPinIcon,
} from "lucide-react"

const amenityIcons = {
  AC: <AirVentIcon className="w-3 h-3 text-green-600" />,
  WiFi: <WifiIcon className="w-3 h-3 text-blue-400" />,
  "Meditation Space": <FlowerIcon className="w-3 h-3 text-gray-500" />,
  "Garden View": <TreePineIcon className="w-3 h-3 text-purple-500" />,
  Balcony: <MapPinIcon className="w-3 h-3 text-yellow-500" />,
  "Attached Bathroom": <BathIcon className="w-3 h-3 text-indigo-500" />,
  "Hot Water": <CoffeeIcon className="w-3 h-3 text-blue-500" />,
  "Room Service": <UtensilsIcon className="w-3 h-3 text-orange-500" />,
  "Yoga Mat": <BedIcon className="w-3 h-3 text-pink-500" />,
}

export function RoomCard({ room, onBookNow }) {
  return (
    <Card className="shadow-md rounded-xl overflow-hidden hover:scale-101 transition-transform duration-300 h-52 py-0 border border-green-500 hover:border-green-700 cursor-pointer max-w-4xl">
      <div className="flex flex-row h-full">
        <div className="w-1/3">
          <img
            src={room.images[0] || "/placeholder.svg"}
            alt={room.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/3 p-4 px-2 flex flex-col justify-between">
          <div>
            <CardHeader className="p-0">
              <CardTitle className="text-lg font-semibold text-orange-500">{room.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <div className="flex flex-wrap gap-1">
                {room.amenities.slice(0, 4).map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-1 py-0.5 rounded-full text-xs font-medium text-green-700"
                  >
                    {amenityIcons[amenity]}
                    <span>{amenity}</span>
                  </div>
                ))}
                {room.amenities.length > 4 && (
                  <span className="text-xs text-muted-foreground">
                    +{room.amenities.length - 4} more
                  </span>
                )}
              </div>
            </CardContent>
          </div>
        </div>
        <div className="w-1/3 p-2 flex flex-col justify-end items-end border-l border-green-700 relative">
          <p className="text-red-500 text-sm font-semibold absolute top-2">10% off</p>
          <div className="text-right">
            <p className="text-gray-500 line-through font-medium text-base">₹{(room.price * 1.1).toFixed(0)}</p>
            <p className="text-green-700 font-bold text-base">₹{room.price}/night</p>
          </div>
          <Button
            className="bg-green-700 hover:bg-green-800 text-white w-full text-sm py-1 mt-2 cursor-pointer"
            onClick={() => onBookNow(room._id)}
          >
            Book Now
          </Button>
        </div>
      </div>
    </Card>
  )
}
