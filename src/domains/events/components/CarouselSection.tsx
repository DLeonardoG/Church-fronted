import { CarouselEvent } from "@/core/components/eventsCarousel";

/**
 * Sección del carousel de eventos
 * Muestra los próximos eventos en un carousel 3D
 */
export function CarouselSection() {
  return (
    <section className="space-y-12 h-screen w-full pt-4">
      <h2 className="flex text-5xl font-extrabold relative top-1 justify-center z-100 text-foreground py-4">
        Eventos
      </h2>
      <CarouselEvent />
    </section>
  );
}

