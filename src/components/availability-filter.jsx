
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, UsersIcon } from "lucide-react"

export function AvailabilityFilter({ onFiltersChange, initialFilters }) {
  const formatDate = (date) => {
    return date.toISOString().split('T')[0]
  }

  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const [checkIn, setCheckIn] = useState(initialFilters.checkIn || formatDate(today))
  const [checkOut, setCheckOut] = useState(initialFilters.checkOut || formatDate(tomorrow))
  const [guests, setGuests] = useState(initialFilters.guests || "1")

  useEffect(() => {
    onFiltersChange({
      checkIn: formatDate(today),
      checkOut: formatDate(tomorrow),
      guests: 1,
    })
  }, []) 

  const handleSearch = () => {
    onFiltersChange({
      checkIn,
      checkOut,
      guests: Number.parseInt(guests),
    })
  }

  // Set minimum checkout date based on checkin
  const getMinCheckoutDate = () => {
    if (checkIn) {
      const nextDay = new Date(checkIn)
      nextDay.setDate(nextDay.getDate() + 1)
      return formatDate(nextDay)
    }
    return formatDate(tomorrow)
  }

  return (
    <Card className="border-green-500 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-green-600 flex items-center gap-2 text-lg">
          <CalendarIcon className="w-5 h-5" />
          Check Availability
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="checkin" className="flex items-center gap-2 text-sm">
              <CalendarIcon className="w-4 h-4" />
              Check-in
            </Label>
            <Input
              id="checkin"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="border-green-500"
              min={formatDate(today)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="checkout" className="flex items-center gap-2 text-sm">
              <CalendarIcon className="w-4 h-4" />
              Check-out
            </Label>
            <Input
              id="checkout"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="border-green-500"
              min={getMinCheckoutDate()}
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-sm">
              <UsersIcon className="w-4 h-4" />
              Guests
            </Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger className="border-green-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
                <SelectItem value="5">5 Guests</SelectItem>
                <SelectItem value="6">6+ Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end">
            <Button 
              onClick={handleSearch} 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Check Availability
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}