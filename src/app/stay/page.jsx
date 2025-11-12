"use client"

import { useState, useEffect } from "react"
import { RoomFilters } from "@/components/room-filters"
import { RoomCategoryCard } from "@/components/room-category-card"
import { AvailabilityFilter } from "@/components/availability-filter"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FilterIcon, XIcon } from "lucide-react"
import axios from "axios"

export default function RoomsPage() {
    const [categories, setCategories] = useState([])
    const [filteredCategories, setFilteredCategories] = useState([])
    const [isFiltersOpen, setIsFiltersOpen] = useState(false)
    const [availabilityFilters, setAvailabilityFilters] = useState({
        checkIn: "",
        checkOut: "",
        guests: "1"
    })
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const baseUrl = process.env.NEXT_PUBLIC_API_URL

    const fetchAvailableCategories = async (filters) => {
        setLoading(true);
        try {
            const response = await axios.post(`${baseUrl}/users/room/availability`, filters);

            const data = response.data;

            if (data.success) {
                setCategories(data.data);
                setFilteredCategories(data.data);
            } else {
                console.error("Error fetching room categories:", data.message);
                setCategories([]);
                setFilteredCategories([]);
            }
        } catch (error) {
            console.error("Error fetching room categories:", error);
            setCategories([]);
            setFilteredCategories([]);
        } finally {
            setLoading(false);
        }
    };

    const handleAvailabilityChange = async (filters) => {
        setAvailabilityFilters(filters)
        await fetchAvailableCategories(filters)
    }

    const handleFiltersChange = (filters) => {
        let filtered = categories

        if (filters.roomType && filters.roomType !== "any") {
            filtered = filtered.filter((category) => category.type === filters.roomType)
        }

        if (filters.amenities && filters.amenities.length > 0) {
            filtered = filtered.filter((category) =>
                filters.amenities.some((amenity) => category.amenities.includes(amenity))
            )
        }

        if (filters.priceRange && filters.priceRange !== "any") {
            const [min, max] = filters.priceRange
                .split("-")
                .map((p) => (p.includes("+") ? Number.POSITIVE_INFINITY : Number.parseInt(p.replace("₹", "").replace(",", ""))))
            filtered = filtered.filter((category) => {
                const finalPrice = category.basePrice - (category.basePrice * category.discount / 100)
                return finalPrice >= min && (max === Number.POSITIVE_INFINITY || finalPrice <= max)
            })
        }

        setFilteredCategories(filtered)

        if (window.innerWidth < 768) {
            setIsFiltersOpen(false)
        }
    }

    const handleBookNow = (categoryId) => {
        const queryParams = new URLSearchParams({
            checkIn: availabilityFilters.checkIn,
            checkOut: availabilityFilters.checkOut,
            guests: availabilityFilters.guests
        })
        router.push(`/stay/${categoryId}?${queryParams}`)
    }

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

            <div className="min-h-screen bg-background max-w-6xl mx-auto">
                <div className="md:hidden fixed top-4 right-4 z-40">
                    <Button
                        onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
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

                    {loading && (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-lg text-muted-foreground">Checking availability...</p>
                        </div>
                    )}

                    <div className="flex gap-8">
                        <div className={`
                            fixed md:sticky md:top-4 h-full md:h-auto
                            left-0 top-0 z-30
                            w-80 md:w-64
                            transition-transform duration-300 ease-in-out
                            ${isFiltersOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                            bg-card md:bg-transparent
                            shadow-lg md:shadow-none
                            overflow-y-auto md:overflow-visible
                            max-h-screen md:max-h-none
                            border-r md:border-r-0
                        `}>
                            <div className="p-4 md:p-0">
                                <div className="flex justify-between items-center mb-4 md:hidden">
                                    <h3 className="text-lg font-serif font-semibold text-foreground">Filters</h3>
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
                                <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                                    Available Room Categories ({filteredCategories.length})
                                </h3>
                                {availabilityFilters.checkIn && availabilityFilters.checkOut && (
                                    <p className="text-muted-foreground">
                                        Showing room categories available from {new Date(availabilityFilters.checkIn).toLocaleDateString()} to {new Date(availabilityFilters.checkOut).toLocaleDateString()}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-6">
                                {filteredCategories.map((category) => (
                                    <RoomCategoryCard
                                        key={category._id}
                                        category={category}
                                        onBookNow={handleBookNow}
                                    />
                                ))}
                            </div>

                            {!loading && filteredCategories.length === 0 && (
                                <div className="text-center py-12">
                                    <p className="text-lg text-muted-foreground">
                                        {categories.length === 0
                                            ? "Please select check-in and check-out dates to see available room categories."
                                            : "No room categories match your current filters. Please adjust your search criteria."}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}