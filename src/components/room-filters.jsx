"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FilterIcon } from "lucide-react"

export function RoomFilters({ onFiltersChange }) {
  const [roomType, setRoomType] = useState("")
  const [amenities, setAmenities] = useState([])
  const [priceRange, setPriceRange] = useState("")

  const amenityOptions = [
    "Wi-Fi",
    "Air Conditioning",
    "Hot Water",
    "Ceiling Fan",
    "TV",
    "Safe",
    "Balcony",
    "Garden View",
    "River View",
    "Yoga Mat",
    "Meditation Cushion",
    "Prayer Hall Access",
    "Incense & Lamps",
    "Ayurvedic Toiletries",
    "Herbal Tea",
    "Library with Spiritual Books",
    "Silence Zone",
    "Vegetarian Meals",
    "Organic Food Options",
    "Ayurvedic Kitchen",
    "Filtered Drinking Water",
    "Laundry Service",
    "Room Service",
    "Daily Satsang / Bhajan",
    "Kirtan Hall",
    "Guru Darshan / Temple Access",
    "Cow Shelter (Gaushala) Visit",
    "Seva Opportunities (Volunteering)",
    "Gardening Area",
    "Walking Paths",
    "Morning & Evening Aarti",
    "Open Courtyard",
    "Traditional Floor Seating",
    "Outdoor Meditation Spaces",
    "Ayurvedic Massage (on request)",
    "Healing/Detox Programs"
  ]

  const handleAmenityChange = (amenity, checked) => {
    if (checked) {
      setAmenities([...amenities, amenity])
    } else {
      setAmenities(amenities.filter((a) => a !== amenity))
    }
  }

  const handleSearch = () => {
    onFiltersChange({
      roomType,
      amenities,
      priceRange,
    })
  }

  const handleClear = () => {
    setRoomType("")
    setAmenities([])
    setPriceRange("")
    onFiltersChange({
      roomType: "",
      amenities: [],
      priceRange: "",
    })
  }

  return (
    <Card className="border-green-400 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-green-600 flex items-center gap-2 text-lg">
          <FilterIcon className="w-5 h-5" />
          Filter Rooms
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label className="text-base font-medium">Room Type</Label>
          <Select value={roomType} onValueChange={setRoomType}>
            <SelectTrigger className="border-green-500">
              <SelectValue placeholder="Any type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any type</SelectItem>
              <SelectItem value="single">Single Room</SelectItem>
              <SelectItem value="double">Double Room</SelectItem>
              <SelectItem value="suite">Suite</SelectItem>
              <SelectItem value="dormitory">Dormitory</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label className="text-base font-medium">Amenities</Label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {amenityOptions.map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox
                  id={amenity}
                  checked={amenities.includes(amenity)}
                  onCheckedChange={(checked) => handleAmenityChange(amenity, checked)}
                />
                <Label htmlFor={amenity} className="text-sm flex-1">
                  {amenity}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-base font-medium">Price Range (per night)</Label>
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="border-green-500">
              <SelectValue placeholder="Any price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any price</SelectItem>
              <SelectItem value="0-1000">₹0 - ₹1,000</SelectItem>
              <SelectItem value="1000-2000">₹1,000 - ₹2,000</SelectItem>
              <SelectItem value="2000-3000">₹2,000 - ₹3,000</SelectItem>
              <SelectItem value="3000-5000">₹3,000 - ₹5,000</SelectItem>
              <SelectItem value="5000+">₹5,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Button 
            onClick={handleSearch} 
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Apply Filters
          </Button>
          <Button 
            onClick={handleClear} 
            variant="outline" 
            className="w-full border-green-500 text-green-700"
          >
            Clear Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}