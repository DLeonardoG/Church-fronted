"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/core/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/core/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const images = [
    "https://lh3.googleusercontent.com/p/AF1QipNC910UDY9SN7HY4YwkkmxN7blwh4Y8i0Z71lat=w1024-k",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4no0wOR7bU4FmTKvMqzwkJ8lrN9tUifoEEq4EfJ0c2VVqWN4qkMfs6wm4bwsUt8yKxB2WXPaKTCmruxH7cwjI_D59kqm-UhLbSjocffJT0iDm8VYHeSvMwagzRNPDNSkveaBYakHhg=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqpKn968KZSY1TfxjlP0a2kCy32EMrG98McIH3KJ4tmW9ivyNsSV01FZhpnfqZvXxIwrOv9E_B7NtGc1kic7t7XhzAAredyy2b3XdyYw1itdU0lFrVvjK_XpCIwhCrm4ok3IN4=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrj0H3wS0PkfOUa0mzZWN-kTPqp13UP4uz1y2-CYnAiJeDjVdKTduA5xQhVMG_LUwhKzH6g3v3C_5_QGIb8sHWZQ5p923gcFvz3HQkzlROPe7EIKEI4Zw-yDBYlkpNiplKhDz-EYw=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noCZNLNolD0QW8oZ-9QvXO9VZ5KZOgciOOMmnfgTD4nniAOjixbrgxr6Y-K0YG7s_zJ5xaF67zeA3rZu48W9lygj1Zzj9DxvNrGPBoNi3BJ8tNMxBi3wGsEtwgBnwx-CjgcudRlIg=s680-w680-h510-rw",
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent>
        {images.map((url, index) => (
          <CarouselItem key={index}>
            <div className="h-134">
              <Card className="relative overflow-hidden p-0 rounded-none">
                <CardContent className="p-0">
                  <img
                    src={url}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-white/90" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-white/90" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
