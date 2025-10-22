"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Users } from "lucide-react"
import { useEffect, useState } from "react"

export default function SeatAvailability() {
  const [seatCategories, setSeatCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const baseUrl = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchSeatAvailability = async () => {
      try {
        const response = await fetch(`${baseUrl}/registrations/seats`)
        const data = await response.json()
        
        if (data.success) {
          setSeatCategories(data.data)
        }
      } catch (error) {
        console.error('Error fetching seat availability:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSeatAvailability()
  }, [])

  if (loading) {
    return (
      <section id="seats" className="py-6 md:py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Loading...</span>
        </div>
      </section>
    )
  }

  return (
    <section id="seats" className="py-6 md:py-12 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Limited Availability</span>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6 text-balance">Seat Availability</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Register early to secure your spot at this transformative retreat
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {seatCategories.map((seat, index) => {
          const percentage = (seat.available / seat.total) * 100
          return (
            <Card key={index} className="p-8 border-primary/20 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif text-2xl text-foreground">{seat.category}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{seat.price}</p>
                </div>
                <span className="text-3xl">{seat.emoji}</span>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-foreground">Seats Available</span>
                  <span className="text-lg font-bold text-primary">
                    {seat.available}/{seat.total}
                  </span>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{Math.round(percentage)}% available</span>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="mt-12 p-6 bg-accent/10 border border-accent/30 rounded-xl text-center">
        <p className="text-muted-foreground">
          <span className="font-semibold text-foreground">Note:</span> Seats are filling up quickly. Early registration
          is recommended to secure your participation.
        </p>
      </div>
    </section>
  )
}