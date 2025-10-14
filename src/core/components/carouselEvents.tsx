"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/core/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/core/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import { CountdownTimer } from "@/core/components/ui/countdown-timer";

interface Evento {
  titulo: string;
  descripcion: string;
  fecha: string;
  imagen: string;
}

interface CarouselOrientationProps {
  eventos: Evento[];
  itemHeight?: string;
}

export function CarouselOrientation({
  eventos,
  itemHeight = "345px",
}: CarouselOrientationProps) {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  );
  const carouselContainer = useRef<HTMLDivElement>(null);
  const [emblaApi, setEmbla] = useState<EmblaCarouselType | null>(null);

  useEffect(() => {
    const container = carouselContainer.current;
    if (!container || !emblaApi) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) emblaApi.scrollNext();
      else emblaApi.scrollPrev();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [emblaApi]); 

  return (
    <Carousel
      plugins={[autoplayPlugin.current]}
      opts={{ align: "start", loop: true }}
      orientation="vertical"
      className="w-full max-w-4xl overflow-hidden"
      setApi={(api) => setEmbla(api ?? null)} 
    >
      <div ref={carouselContainer}>
        <CarouselContent className="space-y-3" style={{ height: itemHeight }}>
          {eventos.map((evento, index) => (
            <CarouselItem key={index} className="pt-4 md:basis-full">
              <div
                className="relative p-2 h-full overflow-hidden rounded-3xl group bg-white"
                style={{ height: "280px" }}
              >
                <Card className="relative z-10 bg-transparent border-none shadow-none h-full">
                  <CardContent className="flex flex-col justify-between h-full p-5 gap-[10%]">
                    <div className="space-y-3">
                      <h3 className="font-bold text-4xl italic text-black">
                        {evento.titulo}
                      </h3>
                      <p className="text-sm italic text-gray-800 line-clamp-2">
                        {evento.descripcion}
                      </p>
                    </div>

                    <div className="flex items-center w-full h-60 gap-[2%]">
                      <div className="w-100 h-full">
                        <CountdownTimer targetDate={evento.fecha} />
                      </div>
                      <img
                        className="rounded-lg w-40 h-25 object-cover"
                        src={evento.imagen}
                        alt={evento.titulo}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
