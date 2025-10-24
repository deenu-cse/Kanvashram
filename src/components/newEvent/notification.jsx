"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Calendar, MapPin, Users, Leaf, Clock, Star } from "lucide-react"
import { cn } from "@/lib/utils"

export const EventNotification = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleJoinEvent = () => {
    router.push('/newevent')
  }

  if (!isMounted) return null

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out transform",
      isVisible ? "translate-x-0 opacity-100 scale-100" : "translate-x-32 opacity-0 scale-95"
    )}>
      <Card className="w-80 lg:w-96 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950 dark:via-emerald-950 dark:to-teal-950 border-2 border-green-200 dark:border-green-700 shadow-2xl relative overflow-hidden py-1">

        <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 dark:bg-green-800 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-amber-200 dark:bg-amber-800 rounded-full translate-y-8 -translate-x-8 opacity-20"></div>
        
        <CardContent className="p-4 relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-6 w-6 rounded-full bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black z-10"
            onClick={handleClose}
          >
            <X className="h-3 w-3" />
          </Button>

          {/* Header */}
          <div className="flex items-start space-x-3 mb-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-serif font-bold text-lg text-green-800 dark:text-green-200 leading-tight">
                Special Invitation
              </h3>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                Rishikesh's Premier Spiritual Event
              </p>
            </div>
          </div>

          {/* Event Badge */}
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 mb-3">
            <Star className="w-3 h-3 mr-1 fill-amber-500" />
            Limited Seats Available
          </div>

          {/* Event Title */}
          <h4 className="font-semibold text-green-900 dark:text-green-100 text-sm leading-snug mb-3">
            🌿 Maharishi Kanva Yoga & Ayurveda Spiritual Practice Retreat
          </h4>

          {/* Event Details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-xs text-green-700 dark:text-green-300">
              <Calendar className="w-3 h-3 mr-2 text-green-600 dark:text-green-400" />
              <span>23rd – 29th November 2025</span>
            </div>
            <div className="flex items-center text-xs text-green-700 dark:text-green-300">
              <MapPin className="w-3 h-3 mr-2 text-green-600 dark:text-green-400" />
              <span className="flex-1">Vedic Gurukul, Kanvashram</span>
            </div>
            <div className="flex items-center text-xs text-green-700 dark:text-green-300">
              <Users className="w-3 h-3 mr-2 text-green-600 dark:text-green-400" />
              <span>7-Day Transformative Retreat</span>
            </div>
            <div className="flex items-center text-xs text-green-700 dark:text-green-300">
              <Clock className="w-3 h-3 mr-2 text-green-600 dark:text-green-400" />
              <span>Daily Yoga, Meditation & Ayurveda</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-white/50 dark:bg-black/30 rounded-lg p-2 mb-4 border border-green-100 dark:border-green-800">
            <div className="flex flex-wrap gap-1">
              {["Yoga", "Meditation", "Ayurveda", "Silence", "Nature"].map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleJoinEvent}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold py-2 text-sm"
          >
            Discover This Sacred Journey
          </Button>

          {/* Footer Note */}
          <p className="text-xs text-center text-green-600 dark:text-green-400 mt-2">
            Transform your body, mind & soul
          </p>
        </CardContent>

        {/* Animated border */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400 to-emerald-500 opacity-20 blur-sm -z-10 animate-pulse"></div>
      </Card>

      {/* Floating particles */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-40"></div>
    </div>
  )
}

export default EventNotification