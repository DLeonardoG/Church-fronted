import { CarouselEvent } from "@/core/components/eventsCarousel";

/**
 * Sección del carousel de eventos
 * Muestra los próximos eventos en un carousel 3D
 */
export function CarouselSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Título de la sección */}
      <div className="mb-16 flex flex-col items-center gap-3 px-4 z-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground text-center">
          Próximos Eventos
        </h1>
        <p className="text-muted-foreground text-center text-lg md:text-xl max-w-2xl">
          Descubre nuestros próximos eventos y actividades especiales
        </p>
      </div>
      
      {/* Carousel - Centrado */}
      <div className="w-full shrink-0">
        <CarouselEvent />
      </div>
    </section>
  );
}

