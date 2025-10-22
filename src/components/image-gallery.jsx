"use client"

import { useState } from "react"
import Image from "next/image"

export function ImageGallery({images}) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-2">
      <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt={images[selectedImage].alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-4 gap-1">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === index ? "border-primary" : "border-transparent hover:border-border"
            }`}
          >
            <Image src={image} alt='' fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
