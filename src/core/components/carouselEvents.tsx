"use client";

import { Card, CardContent } from "@/core/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/core/components/ui/carousel";
import { CountdownTimer } from "@/core/components/ui/countdown-timer";
import { cn } from "@/shared/lib/utils";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { Calendar, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface Evento {
  titulo: string;
  descripcion: string;
  fecha: string;
  imagen: string;
  lugar?: string;
}

interface CarouselOrientationProps {
  eventos: Evento[];
  itemHeight?: string;
}

export function CarouselOrientation({
  eventos,
  itemHeight = "400px",
}: CarouselOrientationProps) {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
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
        <CarouselContent className="space-y-4" style={{ height: itemHeight }}>
          {eventos.map((evento, index) => (
            <CarouselItem key={index} className="pt-4 md:basis-full">
              <div
                className={cn(
                  "relative p-1 h-full overflow-hidden rounded-2xl",
                  "group cursor-pointer transition-all duration-300",
                  "hover:shadow-2xl"
                )}
                style={{ height: "320px" }}
              >
                {/* Imagen de fondo con efecto parallax */}
                <div
                  className={cn(
                    "absolute inset-0 bg-cover bg-center",
                    "transition-transform duration-700 ease-out",
                    "group-hover:scale-110"
                  )}
                  style={{ backgroundImage: `url(${evento.imagen})` }}
                />

                {/* Overlay con degradado */}
                <div className={cn(
                  "absolute inset-0",
                  "bg-linear-to-t from-background/95 via-background/60 to-background/30",
                  "backdrop-blur-[1px]"
                )} />

                {/* Contenido */}
                <Card className="relative z-10 bg-transparent border-none shadow-none h-full">
                  <CardContent className="flex flex-col justify-between h-full p-6 gap-4">
                    {/* Header del evento */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Calendar className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <h3 className={cn(
                          "font-bold text-3xl text-foreground",
                          "leading-tight tracking-tight",
                          "line-clamp-2"
                        )}>
                          {evento.titulo}
                        </h3>
                      </div>
                      
                      <p className={cn(
                        "text-sm text-muted-foreground",
                        "line-clamp-2 leading-relaxed"
                      )}>
                        {evento.descripcion}
                      </p>

                      {evento.lugar && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{evento.lugar}</span>
                        </div>
                      )}
                    </div>

                    {/* Countdown */}
                    <div className="w-full">
                      <CountdownTimer 
                        targetDate={evento.fecha} 
                        variant="compact"
                        className="scale-90 origin-left"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>

      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
