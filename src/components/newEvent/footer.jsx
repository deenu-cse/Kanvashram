"use client"

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/50 border-t border-primary/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">

        <div className="text-center mb-12 pb-8 border-b border-primary/10">
          <p className="font-serif text-lg md:text-xl text-primary italic">"Lokah Samastah Sukhino Bhavantu"</p>
          <p className="text-sm text-muted-foreground mt-2">May all beings everywhere be happy and free</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-3 md:justify-start">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Location</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Vedic Gurukul, Kanvashram
              <br />
              Pauri Garhwal, Uttarakhand
              <br />
              India
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center gap-3 mb-3 justify-center">
              <Phone className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Phone</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              +91 9837162511
              <br />
              Available 9 AM - 6 PM IST
            </p>
          </div>

          <div className="text-center md:text-right">
            <div className="flex items-center gap-3 mb-3 md:justify-end">
              <Mail className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Email</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              info@kanvashram.org
              <br />
              register@kanvashram.org
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
