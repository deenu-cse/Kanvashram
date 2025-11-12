"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, MapPin, Users, Bed, Wifi, Coffee, Wind, Droplet, CheckCircle2, Info, Menu, X, DoorOpen } from "lucide-react"
import { cn } from "@/lib/utils"
import { RulesSection } from "@/components/rules-section"
import { ImageGallery } from "@/components/image-gallery"
import { LocationMap } from "@/components/location-map"

export default function RoomDetailPage({ params }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [category, setCategory] = useState(null)
    const [checkIn, setCheckIn] = useState(searchParams.get('checkIn') ? new Date(searchParams.get('checkIn')) : null)
    const [checkOut, setCheckOut] = useState(searchParams.get('checkOut') ? new Date(searchParams.get('checkOut')) : null)
    const [guests, setGuests] = useState(searchParams.get('guests') || 1)
    const [isAvailable, setIsAvailable] = useState(null)
    const [availableRoom, setAvailableRoom] = useState(null)
    const [isChecking, setIsChecking] = useState(false)
    const [isRulesOpen, setIsRulesOpen] = useState(false)
    const [loading, setLoading] = useState(true)

    const categoryId = params.id

    const baseUrl = process.env.NEXT_PUBLIC_API_URL

    useEffect(() => {
        fetchCategoryDetails()
    }, [categoryId])

    const fetchCategoryDetails = async () => {
        try {
            const response = await fetch(`${baseUrl}/user/room/${categoryId}`)
            const data = await response.json()

            if (data.success) {
                setCategory(data.data)
            }
        } catch (error) {
            console.error('Error fetching category details:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleCheckAvailability = async () => {
        if (!checkIn || !checkOut) {
            alert("Please select check-in and check-out dates")
            return
        }

        setIsChecking(true)
        try {
            const response = await fetch(`${baseUrl}/user/room/${categoryId}/check`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    checkIn: checkIn.toISOString().split('T')[0],
                    checkOut: checkOut.toISOString().split('T')[0],
                    guests: parseInt(guests)
                }),
            })

            const data = await response.json()

            if (data.success) {
                setIsAvailable(data.available)
                setAvailableRoom(data.availableRoom)
            } else {
                alert(data.message)
            }
        } catch (error) {
            console.error('Error checking availability:', error)
            alert('Error checking availability')
        } finally {
            setIsChecking(false)
        }
    }

    const handleBookNow = async () => {
        if (!isAvailable) {
            alert("Please check availability first")
            return
        }

        const token = localStorage.getItem('ashramUserToken')

        if (!token) {
            const bookingParams = new URLSearchParams({
                categoryId: categoryId,
                checkIn: checkIn.toISOString().split('T')[0],
                checkOut: checkOut.toISOString().split('T')[0],
                guests: guests
            })
            router.push(`/signin?redirect=/stay/booking?${bookingParams.toString()}`)
            return
        }

        const bookingParams = new URLSearchParams({
            categoryId: categoryId,
            checkIn: checkIn.toISOString().split('T')[0],
            checkOut: checkOut.toISOString().split('T')[0],
            guests: guests
        })
        router.push(`/stay/booking?${bookingParams.toString()}`)
    }

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>
    }

    if (!category) {
        return <div className="min-h-screen flex items-center justify-center">Room category not found</div>
    }

    const finalPrice = category.basePrice - (category.basePrice * category.discount / 100)

    return (
        <>
            {/* Custom CSS */}
            <style jsx global>{`
                @import "tailwindcss";
                @import "tw-animate-css";

                @custom-variant dark (&:is(.dark *));

                :root {
                    --background: oklch(0.98 0.01 85);
                    --foreground: oklch(0.25 0.02 45);
                    --card: oklch(1 0 0);
                    --card-foreground: oklch(0.25 0.02 45);
                    --popover: oklch(1 0 0);
                    --popover-foreground: oklch(0.25 0.02 45);
                    --primary: oklch(0.45 0.08 35);
                    --primary-foreground: oklch(0.98 0.01 85);
                    --secondary: oklch(0.92 0.02 75);
                    --secondary-foreground: oklch(0.25 0.02 45);
                    --muted: oklch(0.95 0.01 75);
                    --muted-foreground: oklch(0.5 0.02 45);
                    --accent: oklch(0.72 0.12 65);
                    --accent-foreground: oklch(0.98 0.01 85);
                    --destructive: oklch(0.577 0.245 27.325);
                    --destructive-foreground: oklch(0.98 0.01 85);
                    --border: oklch(0.88 0.01 75);
                    --input: oklch(0.88 0.01 75);
                    --ring: oklch(0.45 0.08 35);
                    --chart-1: oklch(0.646 0.222 41.116);
                    --chart-2: oklch(0.6 0.118 184.704);
                    --chart-3: oklch(0.398 0.07 227.392);
                    --chart-4: oklch(0.828 0.189 84.429);
                    --chart-5: oklch(0.769 0.188 70.08);
                    --radius: 0.5rem;
                    --sidebar: oklch(0.985 0 0);
                    --sidebar-foreground: oklch(0.145 0 0);
                    --sidebar-primary: oklch(0.205 0 0);
                    --sidebar-primary-foreground: oklch(0.985 0 0);
                    --sidebar-accent: oklch(0.97 0 0);
                    --sidebar-accent-foreground: oklch(0.205 0 0);
                    --sidebar-border: oklch(0.922 0 0);
                    --sidebar-ring: oklch(0.708 0 0);
                }

                .dark {
                    --background: oklch(0.145 0 0);
                    --foreground: oklch(0.985 0 0);
                    --card: oklch(0.145 0 0);
                    --card-foreground: oklch(0.985 0 0);
                    --popover: oklch(0.145 0 0);
                    --popover-foreground: oklch(0.985 0 0);
                    --primary: oklch(0.985 0 0);
                    --primary-foreground: oklch(0.205 0 0);
                    --secondary: oklch(0.269 0 0);
                    --secondary-foreground: oklch(0.985 0 0);
                    --muted: oklch(0.269 0 0);
                    --muted-foreground: oklch(0.708 0 0);
                    --accent: oklch(0.269 0 0);
                    --accent-foreground: oklch(0.985 0 0);
                    --destructive: oklch(0.396 0.141 25.723);
                    --destructive-foreground: oklch(0.637 0.237 25.331);
                    --border: oklch(0.269 0 0);
                    --input: oklch(0.269 0 0);
                    --ring: oklch(0.439 0 0);
                    --chart-1: oklch(0.488 0.243 264.376);
                    --chart-2: oklch(0.696 0.17 162.48);
                    --chart-3: oklch(0.769 0.188 70.08);
                    --chart-4: oklch(0.627 0.265 303.9);
                    --chart-5: oklch(0.645 0.246 16.439);
                    --sidebar: oklch(0.205 0 0);
                    --sidebar-foreground: oklch(0.985 0 0);
                    --sidebar-primary: oklch(0.488 0.243 264.376);
                    --sidebar-primary-foreground: oklch(0.985 0 0);
                    --sidebar-accent: oklch(0.269 0 0);
                    --sidebar-accent-foreground: oklch(0.985 0 0);
                    --sidebar-border: oklch(0.269 0 0);
                    --sidebar-ring: oklch(0.439 0 0);
                }

                @theme inline {
                    --font-sans: var(--font-geist-sans);
                    --font-mono: var(--font-geist-mono);
                    --color-background: var(--background);
                    --color-foreground: var(--foreground);
                    --color-card: var(--card);
                    --color-card-foreground: var(--card-foreground);
                    --color-popover: var(--popover);
                    --color-popover-foreground: var(--popover-foreground);
                    --color-primary: var(--primary);
                    --color-primary-foreground: var(--primary-foreground);
                    --color-secondary: var(--secondary);
                    --color-secondary-foreground: var(--secondary-foreground);
                    --color-muted: var(--muted);
                    --color-muted-foreground: var(--muted-foreground);
                    --color-accent: var(--accent);
                    --color-accent-foreground: var(--accent-foreground);
                    --color-destructive: var(--destructive);
                    --color-destructive-foreground: var(--destructive-foreground);
                    --color-border: var(--border);
                    --color-input: var(--input);
                    --color-ring: var(--ring);
                    --color-chart-1: var(--chart-1);
                    --color-chart-2: var(--chart-2);
                    --color-chart-3: var(--chart-3);
                    --color-chart-4: var(--chart-4);
                    --color-chart-5: var(--chart-5);
                    --radius-sm: calc(var(--radius) - 4px);
                    --radius-md: calc(var(--radius) - 2px);
                    --radius-lg: var(--radius);
                    --radius-xl: calc(var(--radius) + 4px);
                    --color-sidebar: var(--sidebar);
                    --color-sidebar-foreground: var(--sidebar-foreground);
                    --color-sidebar-primary: var(--sidebar-primary);
                    --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
                    --color-sidebar-accent: var(--sidebar-accent);
                    --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
                    --color-sidebar-border: var(--sidebar-border);
                    --color-sidebar-ring: var(--sidebar-ring);
                }

                @layer base {
                    * {
                        @apply border-border outline-ring/50;
                    }
                    body {
                        @apply bg-background text-foreground;
                    }
                }
            `}</style>

            <div className="min-h-screen bg-background">
                <div className="lg:hidden fixed top-4 left-4 z-40">
                    <Button
                        onClick={() => setIsRulesOpen(true)}
                        variant="secondary"
                        size="sm"
                        className="bg-background/80 backdrop-blur-sm border"
                    >
                        <Menu className="w-4 h-4 mr-2" />
                        Ashram Rules
                    </Button>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="grid lg:grid-cols-[300px_1fr] gap-8">
                        <div className="hidden lg:block">
                            <RulesSection />
                        </div>

                        <div className={cn(
                            "fixed inset-0 z-50 lg:hidden transform transition-transform duration-300 ease-in-out",
                            isRulesOpen ? "translate-x-0" : "-translate-x-full"
                        )}>
                            <div className="absolute inset-0 bg-background overflow-y-auto">
                                <div className="sticky top-0 bg-background border-b z-10 p-4">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-xl font-serif font-semibold">Ashram Rules & Schedule</h2>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => setIsRulesOpen(false)}
                                        >
                                            <X className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <RulesSection />
                                </div>
                            </div>
                        </div>
                        {isRulesOpen && (
                            <div
                                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                                onClick={() => setIsRulesOpen(false)}
                            />
                        )}

                        <div className="space-y-8">
                            <ImageGallery images={category.images} />

                            <div>
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h1 className="text-3xl font-serif font-semibold text-foreground mb-2 text-balance">
                                            {category.name}
                                        </h1>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm">Rishikesh, Uttarakhand, India</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        {category.discount > 0 ? (
                                            <div>
                                                <div className="text-2xl font-semibold text-primary">₹{finalPrice}</div>
                                                <div className="text-sm text-muted-foreground line-through">₹{category.basePrice}</div>
                                                <div className="text-xs text-green-600">Save {category.discount}%</div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div className="text-3xl font-semibold text-primary">₹{category.basePrice}</div>
                                                <div className="text-sm text-muted-foreground">per night</div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-4 flex-wrap">
                                    <Badge variant="secondary" className="flex items-center gap-1">
                                        <Users className="w-3 h-3" />
                                        Up to {category.maxGuests} guests
                                    </Badge>
                                    <Badge variant="secondary" className="flex items-center gap-1">
                                        <Bed className="w-3 h-3" />{category.beds} {category.beds === 1 ? 'Bed' : 'Beds'}
                                    </Badge>
                                    <Badge variant="secondary" className="flex items-center gap-1">
                                        <DoorOpen className="w-3 h-3" />
                                        {category.availableRooms} rooms available
                                    </Badge>
                                    <Badge variant="secondary">
                                        {category.type.charAt(0).toUpperCase() + category.type.slice(1)} Room
                                    </Badge>
                                </div>
                            </div>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl font-serif">About This Room Category</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {category.description}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl font-serif">Amenities</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {category.amenities.map((amenity, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="font-medium">{amenity}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-primary/20">
                                <CardHeader>
                                    <CardTitle className="text-xl font-serif">Check Availability</CardTitle>
                                    <CardDescription>Select your dates to check room availability</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Check-in</label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal",
                                                            !checkIn && "text-muted-foreground",
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {checkIn ? format(checkIn, "PPP") : "Select date"}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        selected={checkIn}
                                                        onSelect={setCheckIn}
                                                        disabled={(date) => date < new Date()}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Check-out</label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal",
                                                            !checkOut && "text-muted-foreground",
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {checkOut ? format(checkOut, "PPP") : "Select date"}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        selected={checkOut}
                                                        onSelect={setCheckOut}
                                                        disabled={(date) => date < (checkIn || new Date())}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Guests</label>
                                            <select
                                                value={guests}
                                                onChange={(e) => setGuests(Number(e.target.value))}
                                                className="w-full h-10 px-3 rounded-md border border-input bg-background"
                                            >
                                                {Array.from({ length: category.maxGuests }, (_, i) => i + 1).map((num) => (
                                                    <option key={num} value={num}>
                                                        {num} {num === 1 ? "Guest" : "Guests"}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <Button onClick={handleCheckAvailability} disabled={isChecking} className="w-full" size="lg">
                                        {isChecking ? "Checking..." : "Check Availability"}
                                    </Button>

                                    {isAvailable !== null && (
                                        <div
                                            className={cn(
                                                "p-4 rounded-lg border-2 flex items-center gap-3",
                                                isAvailable ? "bg-accent/10 border-accent" : "bg-destructive/10 border-destructive",
                                            )}
                                        >
                                            <CheckCircle2 className={cn("w-5 h-5", isAvailable ? "text-accent" : "text-destructive")} />
                                            <div>
                                                <p className="font-semibold">
                                                    {isAvailable ? "Room Available!" : "Room Not Available"}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {isAvailable 
                                                        ? availableRoom 
                                                            ? `Room ${availableRoom.roomNumber} is available for your selected dates`
                                                            : "A room in this category is available for your selected dates"
                                                        : "Please try different dates"}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {isAvailable && (
                                        <Button onClick={handleBookNow} size="lg" className="w-full bg-primary hover:bg-primary/90">
                                            Book Now
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>

                            <LocationMap />

                            <Card className="border-accent/50">
                                <CardHeader>
                                    <CardTitle className="text-xl font-serif flex items-center gap-2">
                                        <Info className="w-5 h-5 text-accent" />
                                        Important Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 text-sm text-muted-foreground">
                                    <p>• Check-in time: 12:00 PM | Check-out time: 11:00 AM</p>
                                    <p>• Valid ID proof required at check-in</p>
                                    <p>• Advance booking recommended during peak season</p>
                                    <p>• Cancellation policy: Free cancellation up to 48 hours before check-in</p>
                                    <p>• Room assignment will be done at check-in based on availability</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}