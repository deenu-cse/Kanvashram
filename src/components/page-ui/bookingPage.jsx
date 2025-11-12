"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { format, differenceInDays } from "date-fns"
import { CalendarIcon, MapPin, Users, Bed, Shield, CreditCard, CheckCircle2, ArrowLeft, Star, Wifi, Coffee, Car, Utensils, Leaf, Mountain, Heart, Mail, Calendar, Clock, DoorOpen } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

export default function BookingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [bookingData, setBookingData] = useState(null)
  const [category, setCategory] = useState(null)
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [countdownProgress, setCountdownProgress] = useState(100)
  const [guestInfo, setGuestInfo] = useState({
    guestName: "",
    guestEmail: "",
    guestPhone: ""
  })

  const categoryId = searchParams.get('categoryId')
  const checkIn = searchParams.get('checkIn') ? new Date(searchParams.get('checkIn')) : null
  const checkOut = searchParams.get('checkOut') ? new Date(searchParams.get('checkOut')) : null
  const guests = searchParams.get('guests') || 1

  const baseUrl = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const token = localStorage.getItem('ashramUserToken')
    if (!token) {
      router.push(`/signin?redirect=/stay/booking?${searchParams.toString()}`)
      return
    }

    if (categoryId && checkIn && checkOut) {
      fetchCategoryDetails()
    } else {
      toast.error("Missing booking information")
      router.push('/')
    }
  }, [categoryId, router, searchParams])

  useEffect(() => {
    if (showSuccessDialog) {
      const duration = 5000 // 5 seconds
      const interval = 50 // update every 50ms
      const steps = duration / interval
      const decrement = 100 / steps

      const timer = setInterval(() => {
        setCountdownProgress(prev => {
          const newProgress = prev - decrement
          if (newProgress <= 0) {
            clearInterval(timer)
            router.push('/')
            return 0
          }
          return newProgress
        })
      }, interval)

      return () => clearInterval(timer)
    }
  }, [showSuccessDialog, router])

  const fetchCategoryDetails = async () => {
    try {
      const token = localStorage.getItem('ashramUserToken')
      const response = await fetch(`${baseUrl}/users/room/${categoryId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()

      if (data.success) {
        setCategory(data.data)
        calculateBookingSummary(data.data)
      } else {
        toast.error("Failed to fetch room category details")
        router.push('/')
      }
    } catch (error) {
      console.error('Error fetching room category details:', error)
      toast.error("Error fetching room category details")
    } finally {
      setLoading(false)
    }
  }

  const calculateBookingSummary = (categoryData) => {
    if (!checkIn || !checkOut) return

    const nights = differenceInDays(checkOut, checkIn)
    const finalPrice = categoryData.basePrice - (categoryData.basePrice * categoryData.discount / 100)
    const roomPrice = finalPrice * nights
    const taxes = 0
    const serviceFee = 0
    const totalAmount = roomPrice + taxes + serviceFee

    setBookingData({
      nights,
      roomPrice,
      taxes,
      serviceFee,
      totalAmount,
      finalPrice
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setGuestInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleBookNow = async () => {
    if (!guestInfo.guestName || !guestInfo.guestEmail || !guestInfo.guestPhone) {
      toast.error("Please fill all guest details")
      return
    }

    if (!categoryId || !checkIn || !checkOut) {
      toast.error("Missing booking information")
      return
    }

    setProcessing(true)
    try {
      const token = localStorage.getItem('ashramUserToken')
      const response = await fetch(`${baseUrl}/users/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          categoryId,
          guestName: guestInfo.guestName,
          guestEmail: guestInfo.guestEmail,
          guestPhone: guestInfo.guestPhone,
          guests: parseInt(guests),
          checkIn: checkIn.toISOString().split('T')[0],
          checkOut: checkOut.toISOString().split('T')[0],
          notes: "Online booking"
        }),
      })

      const data = await response.json()

      if (data.success) {
        setShowSuccessDialog(true)
        toast.success("Booking successful!")
      } else {
        toast.error(data.message || "Booking failed")
      }
    } catch (error) {
      console.error('Error creating booking:', error)
      toast.error("Error creating booking")
    } finally {
      setProcessing(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading booking details...</p>
        </div>
      </div>
    )
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-2">Room category not found</h2>
          <Button onClick={() => router.push('/')} className="mt-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
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

      <div className="min-h-screen bg-background mt-5">
        <header className="bg-card shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <div className="mx-4 text-amber-500 text-2xl">ॐ</div>
                </div>
                <div>
                  <span className="text-xl font-serif font-semibold text-foreground">AshramStay</span>
                  <p className="text-xs text-muted-foreground">Spiritual Retreat & Stay</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Secure booking</p>
                <div className="flex items-center justify-end space-x-1">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">SSL encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Room
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Booking Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-2 border-primary/20 pt-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-lg">
                  <CardTitle className="flex items-center space-x-2 font-serif">
                    <Users className="w-5 h-5" />
                    <span>Guest Information</span>
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/90">
                    Please provide your details for booking confirmation
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guestName" className="text-sm font-medium">Full Name *</Label>
                      <Input
                        id="guestName"
                        name="guestName"
                        value={guestInfo.guestName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guestEmail" className="text-sm font-medium">Email Address *</Label>
                      <Input
                        id="guestEmail"
                        name="guestEmail"
                        type="email"
                        value={guestInfo.guestEmail}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guestPhone" className="text-sm font-medium">Phone Number *</Label>
                    <Input
                      id="guestPhone"
                      name="guestPhone"
                      value={guestInfo.guestPhone}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      className="h-12"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-secondary/30 rounded-lg">
                    <img
                      src={category.images?.[0] || "/placeholder-room.jpg"}
                      alt={category.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif font-semibold text-lg text-foreground">{category.name}</h3>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{guests} Guest{guests > 1 ? 's' : ''}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Bed className="w-4 h-4" />
                          <span>{category.beds} Bed{category.beds > 1 ? 's' : ''}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DoorOpen className="w-4 h-4" />
                          <span>{category.availableRooms} Available</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Rishikesh, Uttarakhand</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-muted-foreground">Check-in</span>
                      <span className="font-medium text-foreground">{format(checkIn, "EEE, MMM dd, yyyy")}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-muted-foreground">Check-out</span>
                      <span className="font-medium text-foreground">{format(checkOut, "EEE, MMM dd, yyyy")}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium text-foreground">{bookingData?.nights} Night{bookingData?.nights > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-muted-foreground">Room Type</span>
                      <span className="font-medium text-foreground capitalize">{category.type} Room</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Room Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {category.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span className="text-sm text-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Price Summary */}
            <div className="space-y-6">
              <Card className="border-2 border-accent/20 sticky top-24 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-t-lg">
                  <CardTitle className="flex items-center justify-between font-serif">
                    <span>Price Summary</span>
                    <CreditCard className="w-5 h-5" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {bookingData && (
                    <>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            ₹{bookingData.finalPrice} x {bookingData.nights} night{bookingData.nights > 1 ? 's' : ''}
                          </span>
                          <span className="text-foreground">₹{bookingData.roomPrice}</span>
                        </div>
                        {/* <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Taxes & Fees (18% GST)</span>
                          <span className="text-foreground">₹{bookingData.taxes.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Service Fee</span>
                          <span className="text-foreground">₹{bookingData.serviceFee}</span>
                        </div> */}
                        <div className="border-t pt-3">
                          <div className="flex justify-between text-lg font-bold">
                            <span className="text-foreground">Total Amount</span>
                            <span className="text-foreground">₹{bookingData.totalAmount.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>

                      {category.discount > 0 && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <div className="flex items-center space-x-2 text-green-700">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              You save ₹{(category.basePrice * category.discount / 100) * bookingData.nights} with {category.discount}% discount
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                        <div className="flex items-center space-x-2 text-accent">
                          <Leaf className="w-4 h-4" />
                          <span className="text-sm font-medium">Free cancellation until 48 hours before check-in</span>
                        </div>
                      </div>

                      <Button
                        onClick={handleBookNow}
                        disabled={processing}
                        className="w-full h-12 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-serif font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        {processing ? (
                          <>
                            <div className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          `Pay ₹${bookingData.totalAmount.toFixed(2)}`
                        )}
                      </Button>

                      <div className="text-center text-xs text-muted-foreground">
                        By proceeding, you agree to our Terms and Privacy Policy
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Spiritual Trust Badges */}
              <Card className="border-2 border-primary/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium text-sm text-foreground">Secure Payment</p>
                        <p className="text-xs text-muted-foreground">Your data is protected</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium text-sm text-foreground">Mindful Stay</p>
                        <p className="text-xs text-muted-foreground">Curated for spiritual growth</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mountain className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium text-sm text-foreground">Sacred Location</p>
                        <p className="text-xs text-muted-foreground">In the lap of Himalayas</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Leaf className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium text-sm text-foreground">Eco-Friendly</p>
                        <p className="text-xs text-muted-foreground">Sustainable practices</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Success Dialog */}
        <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
          <DialogContent className="sm:max-w-md border-0 shadow-2xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900">
            <div className="flex flex-col items-center text-center p-6">
              {/* Animated Checkmark */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-10 h-10 text-white animate-in zoom-in duration-500" />
                </div>
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
              </div>

              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-green-800 dark:text-green-200">
                  Booking Confirmed!
                </DialogTitle>
                <DialogDescription className="text-lg text-green-700 dark:text-green-300 mt-2">
                  Your room has been successfully booked
                </DialogDescription>
              </DialogHeader>

              {/* Booking Details */}
              <div className="w-full max-w-xs space-y-4 my-6">
                <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">Confirmation Sent</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">{format(checkIn, "MMM dd")} - {format(checkOut, "MMM dd")}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">{guests} Guest{guests > 1 ? 's' : ''}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <DoorOpen className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium capitalize">{category.type} Room</span>
                  </div>
                </div>
              </div>

              <div className="w-full space-y-2">
                <div className="flex justify-between text-sm text-green-700 dark:text-green-300">
                  <span>Redirecting to home...</span>
                  <span>{Math.ceil(countdownProgress / 20)}s</span>
                </div>
                <Progress 
                  value={countdownProgress} 
                  className="w-full h-2 bg-green-200 dark:bg-green-800"
                  indicatorClassName="bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-50 ease-linear"
                />
              </div>

              <div className="mt-6 p-4 bg-white/30 dark:bg-white/5 rounded-lg border border-green-200 dark:border-green-700">
                <div className="text-3xl text-amber-500 mb-2">ॐ</div>
                <p className="text-sm text-green-700 dark:text-green-300 italic">
                  "May your stay bring peace, clarity, and spiritual rejuvenation"
                </p>
              </div>

              <Button
                onClick={() => router.push('/')}
                className="mt-4 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white shadow-lg"
              >
                Go to Home Now
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}