"use client"

import { useState } from "react"
import { RoomFilters } from "@/components/room-filters"
import { RoomCard } from "@/components/room-card"
import { AvailabilityFilter } from "@/components/availability-filter"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FilterIcon, XIcon } from "lucide-react"

const sampleRooms = [
    {
        id: "1",
        name: "Peaceful Garden Room",
        image: "https://i.pinimg.com/1200x/b7/8c/5d/b78c5d3741784b69fd99acc2f76750a0.jpg",
        price: 1500,
        amenities: ["Garden View", "Meditation Space", "WiFi", "Attached Bathroom", "Hot Water"],
        type: "single",
        description: "A serene single room overlooking the beautiful ashram gardens.",
    },
    {
        id: "2",
        name: "Spiritual Suite",
        image: "https://i.pinimg.com/1200x/95/82/f3/9582f37577bdaf193bbfcf85b59c9c81.jpg",
        price: 2500,
        amenities: ["AC", "Balcony", "Meditation Space", "Room Service", "Yoga Mat", "WiFi"],
        type: "suite",
        description: "Luxurious suite with dedicated meditation area and mountain views.",
    },
    {
        id: "3",
        name: "Traditional Cottage",
        image: "https://i.pinimg.com/1200x/2f/13/f6/2f13f6186c1d407ea91dcecbd03bc3e4.jpg",
        price: 1200,
        amenities: ["Garden View", "Attached Bathroom", "Hot Water", "Yoga Mat"],
        type: "single",
        description: "Authentic cottage experience with traditional architecture.",
    },
    {
        id: "4",
        name: "Meditation Retreat Room",
        image: "/meditation-retreat-room-peaceful.jpg",
        price: 1800,
        amenities: ["Meditation Space", "WiFi", "Balcony", "Attached Bathroom", "Hot Water"],
        type: "double",
        description: "Perfect for couples seeking spiritual retreat together.",
    },
    {
        id: "5",
        name: "Ayurveda Wellness Room",
        image: "/ayurveda-wellness-room-herbs.jpg",
        price: 2200,
        amenities: ["AC", "Garden View", "Room Service", "Attached Bathroom", "Hot Water", "WiFi"],
        type: "double",
        description: "Specially designed room for Ayurvedic treatments and wellness.",
    },
    {
        id: "6",
        name: "Shared Dormitory",
        image: "/shared-dormitory-ashram-simple.jpg",
        price: 800,
        amenities: ["WiFi", "Attached Bathroom", "Hot Water", "Yoga Mat"],
        type: "dormitory",
        description: "Budget-friendly shared accommodation for spiritual seekers.",
    },
]

export default function RoomsPage() {
    const [filteredRooms, setFilteredRooms] = useState(sampleRooms)
    const [isFiltersOpen, setIsFiltersOpen] = useState(false)
    const [availabilityFilters, setAvailabilityFilters] = useState({
        checkIn: "",
        checkOut: "",
        guests: "1"
    })
    const router = useRouter()

    const handleAvailabilityChange = (filters) => {
        setAvailabilityFilters(filters)
    }

    const handleFiltersChange = (filters) => {
        let filtered = sampleRooms

        if (filters.roomType && filters.roomType !== "any") {
            filtered = filtered.filter((room) => room.type === filters.roomType)
        }

        if (filters.amenities && filters.amenities.length > 0) {
            filtered = filtered.filter((room) =>
                filters.amenities.some((amenity) => room.amenities.includes(amenity))
            )
        }

        if (filters.priceRange && filters.priceRange !== "any") {
            const [min, max] = filters.priceRange
                .split("-")
                .map((p) => (p.includes("+") ? Number.POSITIVE_INFINITY : Number.parseInt(p.replace("₹", "").replace(",", ""))))
            filtered = filtered.filter((room) => room.price >= min && (max === Number.POSITIVE_INFINITY || room.price <= max))
        }

        setFilteredRooms(filtered)

        if (window.innerWidth < 768) {
            setIsFiltersOpen(false)
        }
    }

    const handleBookNow = (roomId) => {
        router.push(`/rooms/${roomId}`)
    }

    return (
        <div className="min-h-screen bg-background max-w-6xl mx-auto">
            <div className="md:hidden fixed top-4 right-4 z-40">
                <Button
                    onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                    className="bg-spiritual-green hover:bg-spiritual-green/90 text-white shadow-lg"
                    size="sm"
                >
                    {isFiltersOpen ? <XIcon className="w-4 h-4" /> : <FilterIcon className="w-4 h-4" />}
                    {isFiltersOpen ? "Close" : "Filters"}
                </Button>
            </div>

            {isFiltersOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsFiltersOpen(false)}
                />
            )}

            <div className="container mx-auto px-4 py-8">
                <div className="mb-6">
                    <AvailabilityFilter
                        onFiltersChange={handleAvailabilityChange}
                        initialFilters={availabilityFilters}
                    />
                </div>

                <div className="flex gap-8">
                    <div className={`
            fixed md:sticky md:top-4 h-full md:h-auto
            left-0 top-0 z-30
            w-80 md:w-64
            transition-transform duration-300 ease-in-out
            ${isFiltersOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            bg-white md:bg-transparent
            shadow-lg md:shadow-none
            overflow-y-auto md:overflow-visible
            max-h-screen md:max-h-none
          `}>
                        <div className="p-4 md:p-0">
                            <div className="flex justify-between items-center mb-4 md:hidden">
                                <h3 className="text-lg font-semibold text-spiritual-green">Filters</h3>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsFiltersOpen(false)}
                                >
                                    <XIcon className="w-4 h-4" />
                                </Button>
                            </div>
                            <RoomFilters onFiltersChange={handleFiltersChange} />
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-spiritual-green mb-2">
                                Available Rooms ({filteredRooms.length})
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {filteredRooms.map((room) => (
                                <RoomCard key={room.id} room={room} onBookNow={handleBookNow} />
                            ))}
                        </div>

                        {filteredRooms.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-lg text-muted-foreground">
                                    No rooms match your current filters. Please adjust your search criteria.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}