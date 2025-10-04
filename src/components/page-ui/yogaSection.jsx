"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function YogaSection() {
  const images = [
    { url: "/yogaimages/yimg1.jpg" },
    { url: "/yogaimages/yimg2.jpg" },
    { url: "/yogaimages/yimg3.jpg" },
    { url: "/yogaimages/yimg4.jpg" },
    { url: "/yogaimages/yimg5.jpg" },
    { url: "/yogaimages/yimg6.jpg" },
  ]

  const [selectedImage, setSelectedImage] = useState(0)

  const nextImage = () => setSelectedImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + images.length) % images.length)

  const handleGridImageClick = (index) => setSelectedImage(index)

  return (
    <div className="space-y-4 w-[90vw] mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-7 gap-3 items-stretch">

        <div className="hidden md:flex col-span-2 flex-col gap-3">
          <div className="relative flex-1 rounded-xl overflow-hidden border border-border shadow-md hover:shadow-lg transition">
            <Image
              src={images[(selectedImage - 1 + images.length) % images.length]?.url || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex-1 rounded-xl overflow-hidden border border-border shadow-md hover:shadow-lg transition">
            <Image
              src={images[(selectedImage - 2 + images.length) % images.length]?.url || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="col-span-1 sm:col-span-3 md:col-span-3 relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#45300a] shadow-lg">
          <Image
            src={images[selectedImage]?.url || "/placeholder.svg"}
            alt=""
            fill
            className="object-cover"
            priority
          />
            
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-background/70 hover:bg-background h-9 w-9 rounded-full shadow"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-background/70 hover:bg-background h-9 w-9 rounded-full shadow"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="hidden md:flex col-span-2 flex-col gap-3">
          <div className="relative flex-1 rounded-xl overflow-hidden border border-border shadow-md hover:shadow-lg transition">
            <Image
              src={images[(selectedImage + 1) % images.length]?.url || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex-1 rounded-xl overflow-hidden border border-border shadow-md hover:shadow-lg transition">
            <Image
              src={images[(selectedImage + 2) % images.length]?.url || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 md:grid md:grid-cols-7 md:gap-3 md:overflow-visible">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleGridImageClick(index)}
            className={cn(
              "relative aspect-video min-w-[120px] md:min-w-0 rounded-lg overflow-hidden border-2 transition-all shadow-sm",
              selectedImage === index
                ? "border-[#45300a] ring-2 ring-primary/40"
                : "border-border hover:border-primary/40"
            )}
          >
            <Image
              src={image.url || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
