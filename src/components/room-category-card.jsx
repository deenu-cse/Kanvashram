"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
  UsersIcon,
  DoorOpenIcon,
} from "lucide-react"

const amenityIcons = {
  "Wi-Fi": <WifiIcon className="w-3 h-3 text-blue-400" />,
  "Air Conditioning": <AirVentIcon className="w-3 h-3 text-green-600" />,
  "Meditation Space": <FlowerIcon className="w-3 h-3 text-purple-500" />,
  "Garden View": <TreePineIcon className="w-3 h-3 text-emerald-500" />,
  "Balcony": <MapPinIcon className="w-3 h-3 text-yellow-500" />,
  "Attached Bathroom": <BathIcon className="w-3 h-3 text-indigo-500" />,
  "Hot Water": <CoffeeIcon className="w-3 h-3 text-orange-500" />,
  "Room Service": <UtensilsIcon className="w-3 h-3 text-red-500" />,
  "Yoga Mat": <BedIcon className="w-3 h-3 text-pink-500" />,
}

export function RoomCategoryCard({ category, onBookNow }) {
  const finalPrice = category.basePrice - (category.basePrice * category.discount / 100)
  
  const typeLabels = {
    single: "Single Room",
    double: "Double Room",
    suite: "Suite",
    dormitory: "Dormitory"
  }

  return (
    <Card className="shadow-md rounded-xl overflow-hidden hover:scale-101 transition-transform duration-300 h-52 py-0 border border-green-500 hover:border-green-700 cursor-pointer max-w-4xl">
      <div className="flex flex-row h-full">
        {/* Image Section */}
        <div className="w-1/3">
          <img
            src={category.images?.[0] || "/placeholder.svg"}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Info Section */}
        <div className="w-1/3 p-4 px-2 flex flex-col justify-between">
          <div>
            <CardHeader className="p-0">
              <CardTitle className="text-lg font-semibold text-orange-500">{category.name}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {typeLabels[category.type] || category.type}
                </Badge>
                {category.availableRooms > 0 && (
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                    <DoorOpenIcon className="w-3 h-3 mr-1" />
                    {category.availableRooms} available
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <div className="flex items-center gap-1">
                  <BedIcon className="w-3 h-3" />
                  <span>{category.beds} bed{category.beds > 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center gap-1">
                  <UsersIcon className="w-3 h-3" />
                  <span>Max {category.maxGuests}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {category.amenities.slice(0, 3).map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-1 py-0.5 rounded-full text-xs font-medium text-green-700"
                  >
                    {amenityIcons[amenity] || <FlowerIcon className="w-3 h-3 text-gray-500" />}
                    <span>{amenity}</span>
                  </div>
                ))}
                {category.amenities.length > 3 && (
                  <span className="text-xs text-muted-foreground">
                    +{category.amenities.length - 3} more
                  </span>
                )}
              </div>
            </CardContent>
          </div>
        </div>
        
        {/* Price & Booking Section */}
        <div className="w-1/3 p-2 flex flex-col justify-end items-end border-l border-green-700 relative">
          {category.discount > 0 && (
            <p className="text-red-500 text-sm font-semibold absolute top-2">
              {category.discount}% off
            </p>
          )}
          
          <div className="text-right">
            {category.discount > 0 ? (
              <>
                <p className="text-gray-500 line-through font-medium text-base">
                  ₹{category.basePrice}/night
                </p>
                <p className="text-green-700 font-bold text-base">
                  ₹{finalPrice}/night
                </p>
              </>
            ) : (
              <p className="text-green-700 font-bold text-base">
                ₹{category.basePrice}/night
              </p>
            )}
          </div>
          
          <Button
            className="bg-green-700 hover:bg-green-800 text-white w-full text-sm py-1 mt-2 cursor-pointer"
            onClick={() => onBookNow(category._id)}
          >
            Book Now
          </Button>
        </div>
      </div>
    </Card>
  )
}