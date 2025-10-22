"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
    const scrollToForm = () => {
        const element = document.getElementById("registration-form")
        element?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section id="home-header" className="relative min-h-screen flex items-end justify-center overflow-hidden -mt-28 ">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url(/bgashram.jpg)",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-background/80" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto -mb-8">
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight text-balance">
                    Maharishi Kanva Yoga & Ayurveda Spiritual Practice Retreat
                </h1>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <div className="text-white/80 text-sm md:text-base">
                        <span className="font-semibold">23rd – 29th November 2025</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-primary" />
                    <div className="text-white/80 text-sm md:text-base">
                        <span>Vedic Gurukul, Kanvashram</span>
                    </div>
                </div>

                <Button
                    onClick={scrollToForm}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 mb-16"
                >
                    Register Now
                </Button>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-6 h-6 text-white/60" />
                </div>
            </div>
        </section>
    )
}
