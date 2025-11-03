"use client"

import { useState } from "react"
import Hero from "@/components/newEvent/hero"
import About from "@/components/newEvent/about"
import SeatAvailability from "@/components/newEvent/seat-availability"
import RegistrationForm from "@/components/newEvent/registration-form"
import Footer from "@/components/newEvent/footer"
import TermsModal from "@/components/newEvent/terms-modal"
import TicketModal from "@/components/newEvent/ticket-modal"
import PaymentTracker from "../../components/newEvent/PaymentTracker"

export default function Home() {
  const [showTerms, setShowTerms] = useState(false)
  const [showTicket, setShowTicket] = useState(false)
  const [ticketData, setTicketData] = useState(null)

  const handleRegistrationSuccess = (data) => {
    setTicketData(data)
    setShowTicket(true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Hero />
      <About />
      {/* <SeatAvailability /> */}
      <RegistrationForm onSuccess={handleRegistrationSuccess} onTermsClick={() => setShowTerms(true)} />
      <PaymentTracker />
      <Footer />

      <TermsModal open={showTerms} onOpenChange={setShowTerms} />
      {/* <TicketModal open={showTicket} onOpenChange={setShowTicket} data={ticketData} /> */}
    </main>
  )
}
