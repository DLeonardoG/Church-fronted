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
    "https://cms-imgp.jw-cdn.org/img/p/2018642/univ/art/2018642_univ_lsr_lg.jpg",
    "https://watv.org/wp-content/uploads/2025/01/thum_because_you_say_so.jpg",
    "https://media.swncdn.com/via/images/2024/05/08/35672/35672-daniel_source_file.jpg",
    "https://lh3.googleusercontent.com/p/AF1QipNC910UDY9SN7HY4YwkkmxN7blwh4Y8i0Z71lat=w1024-k",
  ]

  return (
    <Carousel
      opts={{loop: true }}
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent>
        {images.map((url, index) => (
          <CarouselItem key={index}>
            <div className="h-screen">
              <Card className="relative overflow-hidden p-0 rounded-none">
                <CardContent className="p-0">
                  <img
                    src={url}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-screen object-cover"
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
