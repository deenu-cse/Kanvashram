"use client"

import { Card } from "@/components/ui/card"
import { Flower2, Leaf, Wind } from "lucide-react"

const features = [
  {
    icon: Flower2,
    title: "Yoga",
    description: "Prana Power Yoga, Hatha Yoga, and meditative practices to rejuvenate body and mind",
  },
  {
    icon: Leaf,
    title: "Ayurveda",
    description: "Ancient healing science with Sattvik meals and therapeutic sessions for holistic wellness",
  },
  {
    icon: Wind,
    title: "Silence Practice",
    description: "Maun Spiritual Practice and deep meditation in the serene Himalayan environment",
  },
]

export default function About() {
  return (
    <section id="about" className="py-6 md:py-12 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">About the Retreat</span>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 mb-6 text-balance">
          Rejuvenate Body, Mind & Soul
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          This seven-day retreat offers a rare opportunity to rejuvenate through the ancient sciences of Yoga and
          Ayurveda, under the guidance of revered Swami Jayant Saraswati Ji and eminent Yoga Gurus.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card
              key={index}
              className="p-8 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-1">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-1">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          )
        })}
      </div>

      <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 border border-primary/10">
        <h3 className="font-serif text-2xl text-foreground mb-6">What You Will Learn</h3>
        <ul className="space-y-4 text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-primary font-semibold">•</span>
            <span>The principles of Ayurvedic nutrition and disease-free living</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-semibold">•</span>
            <span>Practical methods for physical and mental purification through Shatkarma, Asana, and Pranayama</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-semibold">•</span>
            <span>The healing power of silence and meditative practices</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-semibold">•</span>
            <span>Preventive and therapeutic Yoga for natural health and tranquility</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
